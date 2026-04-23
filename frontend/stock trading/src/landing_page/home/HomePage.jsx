import React from 'react'
import Stats from './Stats'
import OpenAccount from '../OpenAccount';
import HeroSection from './HeroSection';
import Award from './Award';
import Pricing from './Pricing';
import Education from './Education';
import Navbar from '../../Navbar';
import Footer from '../Footer';
function HomePage() {
    return (
        <div>
            <Navbar/>
          <HeroSection/>
          <Award/>
          <Stats/>
          <Pricing/>
          <Education/>
          <OpenAccount/>
          <Footer/>
        </div>
    )
}

export default HomePage;
