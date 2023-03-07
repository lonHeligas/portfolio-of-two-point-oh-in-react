import React from 'react';
import { Card, Col } from 'react-bootstrap';
import PortfolioLarger from './PortfolioLarger';
import Button from 'react-bootstrap/Button';
import "../styles/portfoliocard.css"




const PortfolioCard = ({title, text, img}) => {
  
  console.log(`title is: ${title}`); 
  return (
    <Col md="6">
      <Card className='p-1 m-6' style={{ width: '20rem' , cursor: "pointer "}}>
        <Card.Img src={img} />
        <Card.ImgOverlay>
          <Card.Title className='card-title drop-shadow'>{title}</Card.Title>
          <Card.Text className='card-body drop-shadow'>{text}</Card.Text>       
          
        </Card.ImgOverlay>
      </Card>
    </Col>
    )
}



export default PortfolioCard;