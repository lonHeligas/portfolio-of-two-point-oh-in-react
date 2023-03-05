import React from "react";
import NavButton from "./NavButton";
import { IntroPage, PortfolioPage, ResumePage, ContactPage } from "../pages";


const Navigation = (props) => {
  const page = window.location.href;
  
  const NavSections = ["About Me", "Portfolio", "Contact", "Resume"];
  return (
    <header style={{ borderBottom: "5px solid #333" }}>
      <nav
        className="navbar navbar-dark navbar-expand-md bg-body-secondary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="##">Navbar</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex p-7">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/contact">Contact Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/resume">Resume</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </header>

    
  );
};

export default Navigation;
