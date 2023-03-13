import './App.css';
// import { useState } from 'react';
import { HashRouter, Routes, Route, Router, Switch } from "react-router-dom";
import { Header, Wrapper, Footer } from './components';
import { IntroPage, PortfolioPage, ResumePage, ContactPage } from './pages';
import "./styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/custom.css"

function App() {

  const page = window.location.href.split("3000/")[1];
  console.log(page);

  return (
    <Wrapper className="wrapper">      
      <HashRouter basename="/" hashType="slash">
        <Header />   
        <Routes>
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/" element={<IntroPage />} />
        </Routes>
        { /* page === '' && <IntroPage />}
        { page === 'contact' && <ContactPage />}
        { page === 'portfolio' && <PortfolioPage />}
    { page === 'resume' && <ResumePage /> */ }
      </HashRouter>
      <Footer />       
    </Wrapper>
  );
}

export default App;
