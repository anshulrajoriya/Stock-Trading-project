import React from 'react';
import {Link , NavLink} from 'react-router-dom'

function Pricing() {
    return (
        <div className='container mb-5'>
            <div className='row align-items-center'>
                {/* Left Side: Text content */}
                <div className='col-4'>
                    <h1 className='fs-2 fw-bold mb-3'>Unbeatable pricing</h1>
                    <p className='text-muted mb-3' style={{ fontSize: "1.1rem" }}>
                        We pioneered the concept of discount broking and price transparency in India. 
                        Flat fees and no hidden charges.
                    </p>
                    <Link to="" className='fw-semibold mt-3' style={{ color: "blue", textDecoration: "none" }}>
                        See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </Link>
                </div>

                {/* Gap Column */}
                <div className='col-2'></div>

                {/* Right Side: Pricing Boxes */}
                <div className='col-6'>
                    <div className='row text-center border'>
                        {/* Box 1 */}
                        <div className='col p-4 border-end'>
                            <h1 className='display-4 fw-normal'>₹0</h1>
                            <p className='text-muted' style={{ fontSize: "0.9rem" }}>
                                Free equity delivery and<br />direct mutual funds
                            </p>
                        </div>
                        {/* Box 2 */}
                        <div className='col p-4'>
                            <h1 className='display-4 fw-normal'>₹20</h1>
                            <p className='text-muted' style={{ fontSize: "0.9rem" }}>
                                Intraday and F&O
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;