import React from 'react'

function Fees() {
    return (
      <div className='container'>
           <div >
            <h1 className='fs-1 text-center mt-5 '>Charges and Fees</h1>
            <p className='fs-3 mt-5 text-center'>Fees</p>
           <div
            className="overflow-auto border rounded p-4 bg-white mt-4 shadow-sm"
            style={{ maxHeight: "600px" }}
          >
            <p className="fs-5 mb-2 text-primary mt-4">1. Account opening charges for individual trading and demat account</p>

<p className="fs-5 mb-2 text-primary mt-4">2. Annual Maintenance Charges (AMC) for demat account</p>

<p className="fs-5 mb-2 text-primary mt-4">3. Brokerage charges for equity delivery trades</p>

<p className="fs-5 mb-2 text-primary mt-4">4. Brokerage charges for intraday equity trading</p>

<p className="fs-5 mb-2 text-primary mt-4">5. Charges for Futures & Options (F&O) trading</p>

<p className="fs-5 mb-2 text-primary mt-4">6. Commodity trading brokerage and applicable fees</p>

<p className="fs-5 mb-2 text-primary mt-4">7. Currency derivatives trading charges</p>

<p className="fs-5 mb-2 text-primary mt-4">8. Transaction charges levied by exchanges (NSE, BSE, MCX)</p>

<p className="fs-5 mb-2 text-primary mt-4">9. SEBI turnover charges on trades</p>

<p className="fs-5 mb-2 text-primary mt-4">10. Stamp duty charges on buy orders</p>

<p className="fs-5 mb-2 text-primary mt-4">11. GST applicable on brokerage and charges</p>

<p className="fs-5 mb-2 text-primary mt-4">12. Demat debit transaction charges</p>

<p className="fs-5 mb-2 text-primary mt-4">13. Charges for pledge and unpledge of shares</p>

<p className="fs-5 mb-2 text-primary mt-4">14. Account closure charges</p>

<p className="fs-5 mb-2 text-primary mt-4">15. Penalty charges for insufficient funds or margin shortfall</p>
          </div>
        </div>

           </div>
    )
}

export default Fees
