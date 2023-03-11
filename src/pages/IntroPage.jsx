import React from 'react';
import Bio from '../components/Bio'
import BioImage from "../components/BioImage"
import "../styles/bio.css"


const IntroPage = () => {


  return (
    <>
    <div className='container intro-page-layout'>
      <BioImage />
      <Bio className='bio-text'/>
    </div>    
    </>
  )
}



export default IntroPage;