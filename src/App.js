import './App.css';
// import { useState } from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { Header, Wrapper, Footer } from './components';
import { IntroPage, PortfolioPage, ResumePage, ContactPage } from './pages';
import "./styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/custom.css"

function App() {

  const page = window.location.href.split("3000/")[1];
  console.log(page);




  return (
    <Wrapper>      
      <Header />   
      
        {/* <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>    
        We'll have to look at this and figure it out later
              */}
      <BrowserRouter>
        { page === '' && <IntroPage />}
        { page === 'contact' && <ContactPage />}
        { page === 'portfolio' && <PortfolioPage />}
        { page === 'resume' && <ResumePage />}
      </BrowserRouter>
      <Footer />       
    </Wrapper>
  );
}

export default App;
