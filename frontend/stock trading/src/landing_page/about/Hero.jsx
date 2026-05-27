import React from "react";

function Hero() {
  return (
    <div className="container mt-5">

      {/* Heading */}
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h1 className="fs-1 mt-5 mb-5 " style={{ lineHeight: "1.8" }}>
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h1>
        </div>
      </div>

      <hr />

      {/* Content */}
      <div className="row mt-5 justify-content-center">

        {/* LEFT */}
        <div className="col-lg-5 col-md-6 mb-4">
          <p className="text-muted mb-4" style={{ lineHeight: "1.9" }}>
            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
          </p>

          <p className="text-muted mb-4" style={{ lineHeight: "1.9" }}>
            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
          </p>

          <p className="text-muted mb-4" style={{ lineHeight: "1.9" }}>
            Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms.
          </p>
        </div>

        {/* RIGHT */}
        <div className="col-lg-5 col-md-6 mb-4">
          <p className="text-muted  mb-4" style={{ lineHeight: "1.9" }}>
            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
          </p>

          <p className="text-muted mb-4" style={{ lineHeight: "1.9" }}>
            <span style={{ color: "#387ed1", cursor: "pointer" }}>Rainmatter</span>, our fintech fund and incubator, has invested in several fintech startups.
          </p>

          <p className="text-muted mb-4" style={{ lineHeight: "1.9" }}>
            And yet, we are always up to something new every day. Catch up on the latest updates on our <span style={{ color: "#387ed1" }}>blog</span>.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Hero;