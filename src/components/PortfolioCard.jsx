import * as React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
// import PortfolioLarger from './PortfolioLarger';
import Button from 'react-bootstrap/Button';
import "../styles/portfoliocard.css"
import { Github } from 'react-bootstrap-icons';
import { BrowserChrome } from 'react-bootstrap-icons';

const PortfolioCard = ({title, text, img, gitUrl, webUrl}) => {

  

  return (
    <Col className="card-columns" md="6">
      <Card className='p-1 card-body' style={{ width: '20rem', height: '19rem'}}>
        <Card.Img className='card-image' src={img} />
        <Card.ImgOverlay>
          <Card.Title className='card-title drop-shadow'>{title}</Card.Title>
          <Card.Text className='card-text drop-shadow'>{text}</Card.Text>

        </Card.ImgOverlay> 
            <div className="button-group" style={{zIndex:1}}>
            <Link className="card-button" to ={gitUrl} target="_blank"  >
              <Button className="button-link" size="lg" variant="warning">
              <Github/ >
              </Button>             
            </Link>
            { webUrl && 
            (<Link className="card-button" to ={webUrl} target="_blank"  >
              <Button className="button-link" size="lg" variant="warning">
              <BrowserChrome />
              </Button>             
            </Link>)
            }
            </div>
          
      </Card>
    </Col>
    )
}



export default PortfolioCard;