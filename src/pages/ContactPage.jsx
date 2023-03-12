import React from "react";
import { useState } from "react"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import validator from "validator";
import "../styles/contact.css"





const ContactPage = (props) => {
  const [ formValues, setFormValues ] = useState({
    email: "",
    address: "",
    comment: ""
  });
  const [isReady, setIsReady] = useState(false)
  const checkIsReady = () =>{
    if(formValues.email && formValues.address && formValues.comment.length > 20){
      setIsReady(true)
    }
  }
  const handleUpdateForm = (e) => {
    e.preventDefault();
    console.log(e)
    setFormValues({...formValues, [e.target.id]: e.target.value})
    checkIsReady()
    // setFormValues({...formValues, e.target.type: e.target.value});
  }





  return (
    <div className="contact-page">
    <Form className = "contact-form" >
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id="email" onChange={handleUpdateForm}/>
        <Form.Text className="text-muted">
          I'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Address</Form.Label>
        <Form.Control type="address" placeholder="Enter address" id="address" onChange={handleUpdateForm} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Leave a comment! I'd love to hear from you!</Form.Label>
        <Form.Control as="textarea" rows={3} type="comment" id="comment" onChange={handleUpdateForm} />
      </Form.Group>
      {isReady?
     <Button variant="warning" type="submit" >
     Submit
   </Button>
      : <Button variant="warning" type="submit" disabled >
      Submit
    </Button>
    }
      
    </Form>
    </div>
  );
};

export default ContactPage;
