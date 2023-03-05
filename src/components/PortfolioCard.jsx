import React from 'react';
import Card from 'react-bootstrap/Card';
import PortfolioLarger from './PortfolioLarger';
import Button from 'react-bootstrap/Button';
import "../styles/portfoliocard.css"




const PortfolioCard = ({title, gitUrl, webUrl, text, img}) => {
  
  console.log(`title is: ${title}`);
  return (
      <Card style={{ width: '18rem' , cursor: "pointer "}}>
      <Card.Img variant="top" src="./images/profilecreatorimg.png" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>        
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    )

}



export default PortfolioCard;