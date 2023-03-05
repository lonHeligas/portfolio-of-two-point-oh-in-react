import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const PortfolioCard = ({title, gitUrl, webUrl, text, img}) => {
  
// console.log(ProfileCreatorApp);
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )

}



export default PortfolioCard;