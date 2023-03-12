import React from 'react';
import { Card, Col } from 'react-bootstrap';
import PortfolioLarger from './PortfolioLarger';
import Button from 'react-bootstrap/Button';
import "../styles/portfoliocard.css"


// console.log(`title is: ${title}`); 


const PortfolioCard = ({title, text, img, gitUrl}) => {
  
  return (
    <Col className="card-columns" md="6">
      <Card className='p-1 card-body' style={{ width: '20rem', height: '19rem'}}>
        <Card.Img className='card-image' src={img} />
        <Card.ImgOverlay>
          <Card.Title className='card-title drop-shadow'>{title}</Card.Title>
          <Card.Text className='card-text drop-shadow'>{text}</Card.Text>
          <a href="{gitUrl}"/>
        </Card.ImgOverlay> 


        

      </Card>
    </Col>
    )
}



export default PortfolioCard;