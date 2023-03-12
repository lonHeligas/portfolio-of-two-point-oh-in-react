import * as React from 'react';
import "../styles/footer.css"
import Button from 'react-bootstrap/Button';


const Footer = () => {

    return (
     <div className="footer-bottom">
      <Button className="footer-button">
          One
      </Button>      
      <Button className="footer-button">
          Two
      </Button>
        <h3 className="footer-text">Copyright © 2023 Lon Heligas</h3>
      <Button className="footer-button">
          Three
      </Button>
      <Button className="footer-button">
          Four
      </Button>
     
      <div className="footer-buttons">      
      </div>
     </div>
    )

}



export default Footer;