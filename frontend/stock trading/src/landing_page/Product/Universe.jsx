import React from 'react'

function Universe() {
  return (
    <div className='container text-center mt-5'>

      {/* Heading */}
      <h1 className='fs-2'>The Zerodha Universe</h1>
      <p className='mt-3 text-muted'>
        Extend your trading and investment experience even further with our partner platforms
      </p>

      {/* Logos Grid */}
      <div className='row mt-5 g-5'>

        <div className='col-md-4'>
          <img src="media/imges/smallcaseLogo.png" alt="smallcase" className="img-fluid mb-2" style={{ height: "40px" }} />
          <p className='text-muted small'>Thematic investment platform</p>
        </div>

        <div className='col-md-4'>
          <img src="media/imges/streakLogo.png" alt="streak" className="img-fluid mb-2" style={{ height: "40px" }} />
          <p className='text-muted small'>Algo & strategy platform</p>
        </div>

        <div className='col-md-4'>
          <img src="media/imges/sensibullLogo.svg" alt="sensibull" className="img-fluid mb-2" style={{ height: "40px" }} />
          <p className='text-muted small'>Options trading platform</p>
        </div>

        <div className='col-md-4'>
          <img src="media/imges/zerodhaFundhouse.png" alt="fundhouse" className="img-fluid mb-2" style={{ height: "40px" }} />
          <p className='text-muted small'>Asset management</p>
        </div>

        <div className='col-md-4'>
          <img src="media/imges/goldenpiLogo.png" alt="goldenpi" className="img-fluid mb-2" style={{ height: "40px" }} />
          <p className='text-muted small'>Bonds trading platform</p>
        </div>

        <div className='col-md-4'>
          <img src="media/imges/dittoLogo.png" alt="ditto" className="img-fluid mb-2" style={{ height: "40px" }} />
          <p className='text-muted small'>Insurance</p>
        </div>

      </div>

      {/* Button */}
      <button className="btn btn-primary btn-lg px-5 mt-4 mb-5">
        Sign up now
      </button>

    </div>
  )
}

export default Universe