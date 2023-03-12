import * as React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import PortfolioLarger from './PortfolioLarger';
import Button from 'react-bootstrap/Button';
import "../styles/portfoliocard.css"



// console.log(`title is: ${title}`); 


const PortfolioCard = ({title, text, img, gitUrl}) => {

  // const gitPage = {gitUrl};
  
  return (
    <Col className="card-columns" md="6">
      <Card className='p-1 card-body' style={{ width: '20rem', height: '19rem'}}>
        <Card.Img className='card-image' src={img} />
        <Card.ImgOverlay>
          <Card.Title className='card-title drop-shadow'>{title}</Card.Title>
          <Card.Text className='card-text drop-shadow'>{text}</Card.Text>
          
          <Router>
            <Link to ={gitUrl} target="_blank"  >
              <button img="../images/icons/github.svg">Git Repo</button>             
            </Link>
          </Router>
        </Card.ImgOverlay> 


        

      </Card>
    </Col>
    )
}



export default PortfolioCard;