import React from 'react';
import portrait from "../images/portfolio_portrait.jpg"
import "../styles/bio.css"




const BioImage = () => {
  return(
    <div className='module-border-wrap'>
      <img className="bio-image module" style={{ width: 400 }} src={portrait} alt="Portrait of the portfolio author."
      />
     </div>
  )
}

export default BioImage

