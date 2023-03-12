import * as React from 'react';
import "../styles/footer.css"
import Button from 'react-bootstrap/Button';
import { Github } from 'react-bootstrap-icons';
import { Mailbox } from 'react-bootstrap-icons';
import { StackOverflow } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';




const Footer = () => {

    return (
     <div className="footer-bottom" style={{zIndex:2}}>     
          <Mailbox size="3em" className="footer-icons"/>
          <Github size="3em" className="footer-icons"/>
        <h3 className="footer-text">Copyright © 2023 Lon Heligas</h3>     
          <StackOverflow size="3em" className="footer-icons"/>
          <Linkedin size="3em" className="footer-icons"/>       
      <div className="footer-buttons">      
      </div>
     </div>
    )

}



export default Footer;