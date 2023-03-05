import React from 'react';
import PortfolioCard from '../components/PortfolioCard';
import CardGroup from 'react-bootstrap/CardGroup';

const PortfolioPage = (props) => {

  return (
    <>
    <h1>Portfolio</h1>
    <CardGroup>
      <BridgeClock />
      <PortfolioCard />  
      <PortfolioCard />  
      <PortfolioCard />  
    </CardGroup>
    </>
  );
}


const BridgeClock = () => {
  <PortfolioCard title="portfoliio piece 1 "></PortfolioCard>  
}

export default PortfolioPage;