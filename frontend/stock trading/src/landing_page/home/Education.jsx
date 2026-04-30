import React from 'react';
import {Link , NavLink} from 'react-router-dom'

function Education() {
    return (
        <div className='container py-5'>
            <div className='row align-items-center'>
                
                {/* LEFT SIDE: ILLUSTRATION */}
                <div className='col-5 p-5'>
                    <img 
                        src='media/imges/education.svg' 
                        style={{ width: "100%" }} 
                        alt="Varsity Illustration" 
                    />
                </div>
      <div className='col-2'></div>

                {/* RIGHT SIDE: TEXT CONTENT */}
                <div className='col-5 p-5'>
                    <h1 className='fs-2 fw-bold mb-4'>Free and open market education</h1>
                    
                    <p className='text-muted'>
                        Varsity, the largest online stock market education book in the world 
                        covering everything from the basics to advanced trading.
                    </p>
                    <Link to="" className='fw-semibold d-inline-block mb-5'style={{ color: "blue", textDecoration: "none" }}>
                        Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </Link>

                    <p className='text-muted'>
                        TradingQ&A, the most active trading and investment community in 
                        India for all your market related queries.
                    </p>
                    <Link to="" className='fw-semibold' style={{ color: "blue", textDecoration: "none" }}>
                        TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Education;