import React from 'react'
import Navbar from '../../Navbar'
import HeroSection from './HeroSection'
import Award from './Award'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from '../OpenAccount'
import Footer from '../Footer'

function HomePage() {
    return (
        <div>
            <Navbar />

            {/* spacing because of fixed navbar */}
            <div style={{ marginTop: "80px" }}>
                <HeroSection />
                <Award />
                <Stats />
                <Pricing />
                <Education />
                <OpenAccount />
                <Footer />
            </div>
        </div>
    )
}

export default HomePage