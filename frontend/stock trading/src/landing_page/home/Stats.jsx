import React from 'react';
import {Link , NavLink} from 'react-router-dom'
function Stats() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row align-items-center'>
                
                {/* LEFT TEXT CONTENT */}
                <div className='col-6 p-5 mb-5'>
                    {/* Main Heading: Darker (fw-bold) and Bigger (fs-1) */}
                    <h1 className='fs-1 fw-bold mb-5 text-dark'>Trust with confidence</h1>

                    {/* Sub Headings: Darker (fw-bold) but Smaller (fs-4) */}
                    <h3 className='fs-4 fw-bold text-dark'>Customer-first always</h3>
                    <p className='text-muted mb-4'>
                        That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.
                    </p>

                    <h3 className='fs-4 fw-bold mt-4 text-dark'>No spam or gimmicks</h3>
                    <p className='text-muted mb-4'>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
                    </p>

                    <h3 className='fs-4 fw-bold mt-4 text-dark'>The Zerodha universe</h3>
                    <p className='text-muted mb-4'>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>

                    <h3 className='fs-4 fw-bold mt-4 text-dark'>Do better with money</h3>
                    <p className='text-muted mb-4'>
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                </div>

                {/* RIGHT IMAGE & LINKS */}
                <div className='col-6 p-5 mb-5'>
                    <img 
                        src='media/imges/ecosystem.png' 
                        style={{ width: "100%" }} 
                        alt="Zerodha Ecosystem" 
                    />
                    <div className='text-center mt-4 mb-5'>
                        <Link to="" className='mx-3 fw-semibold' style={{ textDecoration: "none", color:"blue" }}>
                            Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </Link>
                        <Link to="" className='mx-3 fw-semibold mb-5'style={{ color: "blue", textDecoration: "none" }}>
                            Try Kite <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Stats;