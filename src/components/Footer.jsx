import * as React from 'react';
import "../styles/footer.css"
import Button from 'react-bootstrap/Button';


const Footer = () => {

    return (
     <div className="footer-bottom">
      <div>
        <h3 className="footer-text">Copyright © 2023 Lon Heligas</h3>
      </div>
      <div className="footer-buttons">      
      <Button className="footer-button">
          One
      </Button>
      <Button className="footer-button">
          Two
      </Button>
      <Button className="footer-button">
          Three
      </Button>
      </div>
     </div>
    )

}



export default Footer;