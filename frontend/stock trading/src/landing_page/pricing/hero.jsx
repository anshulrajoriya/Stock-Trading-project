import React from 'react'

function Hero() {
    return (
           <div className="container mt-5 ">

      {/* Heading */}
      <div className="row justify-content-center text-center fs-1 mb-5">  

                <h1>Charges</h1>
                <div className='text-muted fs-3 mt-3'>List of all charges and taxes</div>
    

        <div className="pricise col-md-4 mb-4 mt-5 pr-5 ">
              <div className="row justify-content-center text-center fs-1  mb-5">
                <img style={{height:'400px'}}  src='/media/imges/pricing0.svg'/>
                <h1>Free equity delivery
</h1>
               <p className='text-muted fs-4 mt-3'>All equity delivery investments (NSE, BSE), <br/> are absolutely free — ₹ 0 brokerage</p>
                </div>
        </div>

        {/* RIGHT */}
        <div className="pricise  col-md-4 mb-4 mt-5  mb-5 pr-5 pl-5">
            <div className="row justify-content-center text-center fs-1 ">
                <img style={{height:'400px'}}  src='/media/imges/intradayTrades.svg'/>
                <h1>Intraday and F&O trades
</h1>
               <p className='text-muted fs-4 mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per<br/> executed order on intraday trades across <br/>equity, currency, and commodity trades. Flat<br/> ₹20 on all option trades.</p>
                </div>
  
        </div>
             <div className="pricise c col-md-4 mb-4 mt-5 pl-5 mb-5"> 
            <div className="row justify-content-center text-center fs-1 ">
                <img style={{height:'400px'}}  src='/media/imges/pricingMF.svg'/>
                <h1>Intraday and F&O trades
</h1>
               <p className='text-muted fs-4 mt-3'>All direct mutual fund investments are <br/>absolutely free — ₹ 0 commissions & DP charges. equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
  
        </div>
          <button style={{width:"500px"}} className="btn btn-primary btn-lg px-5 mt-5 mb-5">
        Sign up now
      </button>
  </div>
  
      </div>
    
    )
}

export default Hero
