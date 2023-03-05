import React from 'react';
import PortfolioCard from '../components/PortfolioCard';
import CardGroup from 'react-bootstrap/CardGroup';

const PortfolioPage = (props) => {

  return (
    <>
    <h1>Portfolio</h1>
    <CardGroup>
      <PortfolioCard />  
      <PortfolioCard />  
      <PortfolioCard />  
      <PortfolioCard />  
    </CardGroup>
    </>
  );
}


export default PortfolioPage;