import React from 'react';
import Bio from '../components/Bio'
import BioImage from "../components/BioImage"
import "../styles/bio.css"


const IntroPage = () => {


  return (
    <>
      <BioImage />
      <Bio className='bio-text'/>
    </>
  )
}



export default IntroPage;