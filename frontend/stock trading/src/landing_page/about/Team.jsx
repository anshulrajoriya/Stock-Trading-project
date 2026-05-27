import React from 'react'
import { Link,NavLink } from 'react-router-dom';

function Team() {
    return (
          <div className="container mt-5 text-center">

      {/* Heading */}
      <div className="row justify-content-center text-center">
        <div className="col-lg-8 text-center">
          <h1 className="fs-1 mt-5 mb-5 " style={{ lineHeight: "1.8" }}>
                           People
          </h1>
        </div>
      </div>

      <hr />

      {/* Content */}
     <div className="row mt-5 justify-content-center">

  {/* LEFT */}
<div className="col-lg-5 col-md-6 mb-4 text-center">

  <div className="d-flex flex-column align-items-center">
    
    <img 
      src="media/imges/nithinKamath.jpg"
      alt="Nithin Kamath"
      style={{
        width: "300px",
        height: "300px",
        borderRadius: "100%",
        objectFit: "cover"
      }}
    />

    <h4 className="mt-3 mb-1 text-center">Nithin Kamath</h4>
    <p className="text-muted text-center">Founder, CEO</p>

  </div>

</div>
  {/* RIGHT */}
  <div className="col-lg-5 col-md-6 mb-4 text-start">
    <p className="text-muted mb-4" style={{ lineHeight: "1.9" }}>
      Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader.
    </p>

    <p className="text-muted mb-4" style={{ lineHeight: "1.9" }}>
      He is a member of the SEBI committees.
    </p>

    <p className="text-muted mb-4" style={{ lineHeight: "1.9" }}>
      Playing basketball is his zen.
    </p>

<p>
  Connect on{" "}
  <Link to="#"  style={{ color: "red", textDecoration: "none" }}>Homepage</Link> /{" "}
  <Link to="#"  style={{ color: "red", textDecoration: "none" }}>TradingQnA</Link> /{" "}
  <Link to="#" style={{ color: "red", textDecoration: "none" }}> Twitter</Link>
</p>

  </div>

</div>
    </div>
    )
}

export default Team;
