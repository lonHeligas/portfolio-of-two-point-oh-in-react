import './App.css';
// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Wrapper, Footer } from './components';
import { IntroPage, PortfolioPage, ResumePage, ContactPage } from './pages';
import "./styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/custom.css"

function App() {

  const page = window.location.href.split("3000/")[1];
  console.log(page);


  /*
  <Routes>
    <Route path="/" element={<HomePage user={user} />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/profile" element={<ProfilePage user={user} />} />
    <Route path="/signup" element={<SignupPage />} />
  </Routes>


  */

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

      { page === '' && <IntroPage />}
      { page === 'contact' && <ContactPage />}
      { page === 'portfolio' && <PortfolioPage />}
      { page === 'resume' && <ResumePage />}
/
      <Footer />       
    </Wrapper>
  );
}

export default App;
