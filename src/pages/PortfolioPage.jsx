import React from 'react';
import PortfolioCard from '../components/PortfolioCard';
import PortfolioLarger from '../components/PortfolioLarger';
import CardGroup from 'react-bootstrap/CardGroup';
import ProfileCreatorApp from '../portfolio-data/ProfileCreatorAppData';


const PortfolioPage = (props) => {

  return (
    <>
    
    <CardGroup className="card-group" >     
      {ProfileCreatorApp.map(info => <PortfolioCard {...info} />)}       
    </CardGroup>
    </>
  );
}




/*

* Portfolio pieces added to the arsenal
todo  title:    Profile Creator for Your Team
//    github:   https://github.com/lonHeligas/profile-creator-for-your-team
//    Website:  https://lonheligas.github.io/profile-creator-for-your-team/
//    tec used: HTML / JS / OOP

todo  Weather U Need to Know
todo  Day Calendar Appointment Tracker
todo  Quiz for Geeks and Other People
todo  Random Password Generator
todo  Tech of Blogs

*/


export default PortfolioPage;