import {Link , NavLink} from "react-router-dom"
import React from 'react'

function Hero() {
    return (
        <div className='container border-bottom mb-5'>
            <div className='text-center py-5 p-5'>
            <h1 className="fs-1 mt-4">Technology</h1>
            <h2 className="text-muted fs-4 mt-2">Sleek, modern, and intuitive trading platforms

</h2>
<h3>  <Link to="#"  style={{ color: "blue", textDecoration: "none" }}>Check out our investment offerings <i className="fa fa-long-arrow-right mt-3" aria-hidden="true"></i></Link> 
</h3>
        </div>
        </div>
    )
}

export default Hero
