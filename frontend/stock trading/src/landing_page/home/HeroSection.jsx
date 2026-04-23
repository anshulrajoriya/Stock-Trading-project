import React from 'react'
function HeroSection() {
    return (
        <div className="container-fluid p-3 mb-7 text-center">
            <img 
                src="/media/imges/homeHero.png" 
                alt="hero"
        className="w-100 mb-7"
            />
            <h1 className="text-center mt-5 display-2 text-dark">Invest in everything</h1>
        <p className="text-center mt-3 fs-3 text-dark">Online platform to invest in stock, derivatives,mutul fund and more</p>
<button type="button" className="  btn btn-primary btn-lg px-5 mt-5 mb-5">Signup Now</button>
       </div>
         
    )
}

export default HeroSection;