import './App.css';
// import { useState } from 'react';
import { Header, Wrapper, Footer } from './components';
import { IntroPage, PortfolioPage, ResumePage, ContactPage } from './pages';

import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/custom.css"
import "./styles/global.css"

function App() {

  const page = window.location.href.split("3000/")[1];
  console.log(page);

  return (
    <Wrapper>      
      <Header />

      { page === '' && <IntroPage />}
      { page === 'contact' && <ContactPage />}
      { page === 'portfolio' && <PortfolioPage />}
      { page === 'resume' && <ResumePage />}

      <Footer />       
    </Wrapper>
  );
}

export default App;
