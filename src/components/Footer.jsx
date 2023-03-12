import * as React from "react";
import "../styles/footer.css";
import Button from "react-bootstrap/Button";
import { Github } from "react-bootstrap-icons";
import { Mailbox } from "react-bootstrap-icons";
import { StackOverflow } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="footer-bottom" style={{ zIndex: 2 }}>
    <a href="mailto: lon.heligas@gmail.com" target="_blank">
      <Mailbox size="3em" className="footer-icons" />
    </a>
    <a href="https://github.com/lonHeligas" target="_blank">
      <Github size="3em" className="footer-icons" />
    </a>
    <h3 className="footer-text">Copyright © 2023 Lon Heligas</h3>
    <a href="https://stackoverflow.com/users/21338620/lon-heligas"
      target="_blank">
      <StackOverflow size="3em" className="footer-icons" />
    </a>
    <a href="https://www.linkedin.com/feed/s" target="_blank">
      <Linkedin size="3em" className="footer-icons" />
    </a>
    <div className="footer-buttons"></div>
  </div>
);

export default Footer;
