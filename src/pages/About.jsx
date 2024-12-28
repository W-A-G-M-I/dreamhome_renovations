import React from 'react';
import CenteredText from '../components/about/CenteredText'
import Image from '../components/about/Image'
import Midddletext from '../components/about/middletxt'
import Album from '../components/about/Album'
import Guarantee from '../components/about/Gurantee'
import Estimate from '../components/about/Estimate'
import Footer from '../components/about/Footer'

const About = () => {
  return (
    <>
    <CenteredText />
    <Image /><br></br><br></br>
    <Midddletext /><br></br><br></br>
    <Album /><br></br><br></br>
   <Guarantee /><br></br><br></br>
    <Estimate />
    <Footer />
    </>
  )
}

export default About