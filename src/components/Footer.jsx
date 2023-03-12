import * as React from 'react';
import "../styles/footer.css"
import Button from 'react-bootstrap/Button';


const Footer = () => {

    return (
     <div className="footer-bottom" style={{zIndex:1}}>
      <Button className="footer-button bg-transparent" size="lg">
          One
      </Button>      
      <Button className="footer-button bg-transparent" size="lg">
          Two
      </Button>
        <h3 className="footer-text">Copyright © 2023 Lon Heligas</h3>
      <Button className="footer-button bg-transparent" size="lg">
          Three
      </Button>
      <Button className="footer-button bg-transparent"size="lg">
          Four
      </Button>
     
      <div className="footer-buttons">      
      </div>
     </div>
    )

}



export default Footer;