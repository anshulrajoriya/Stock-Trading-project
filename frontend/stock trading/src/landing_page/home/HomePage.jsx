// import React from 'react'
// import Navbar from '../../Navbar'
// import HeroSection from './HeroSection'
// import Award from './Award'
// import Stats from './Stats'
// import Pricing from './Pricing'
// import Education from './Education'
// import OpenAccount from '../OpenAccount'
// import Footer from '../Footer'

// function HomePage() {
//     return (
//         <div>
//             <Navbar />

//             {/* spacing because of fixed navbar */}
//             <div style={{ marginTop: "80px" }}>
//                 <HeroSection />
//                 <Award />
//                 <Stats />
//                 <Pricing />
//                 <Education />
//                 <OpenAccount />
//                 <Footer />
//             </div>
//         </div>
//     )
// }

// export default HomePage
import React from 'react'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from '../../Navbar'
import HeroSection from './HeroSection'
import Award from './Award'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from '../OpenAccount'
import Footer from '../Footer'

function HomePage() {

  const location = useLocation();
  const [message, setMessage] = useState("");
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const error = params.get("error");

  if (error === "notfound") {
    setMessage("Page not found!");
  }
}, []);
return (
  <div>
    
    <Navbar />

    {/* 🔥 ALERT goes here */}
    {message && (
      <div className="alert alert-danger text-center m-0 rounded-0">
        ⚠️ {message}
      </div>
    )}

    {/* Main content */}
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
);
}

export default HomePage;