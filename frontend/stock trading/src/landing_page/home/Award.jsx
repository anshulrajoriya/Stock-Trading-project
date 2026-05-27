import React from 'react'

function Award() {
  return (
    <div className='container-fluid py-5' style={{ minHeight: "80vh" }}>
      <div className='row align-items-center h-100'>

        {/* LEFT IMAGE */}
        <div className='col-md-6 text-center'>
          <img 
            src="/media/imges/largestBroker.svg" 
            alt="Broker"
            className="img-fluid"
            style={{ width: "90%" }}   // 🔥 increased size
          />
        </div>

        {/* RIGHT TEXT */}
        <div className='col-md-6 px-5'>
          <h1 className="mb-4" style={{ fontSize: "56px" }}>
            Largest stock Broker in India
          </h1>

          <p className="text-dark mb-4 fs-5">
            2+ million Zerodha clients contribute to over 15% of all retail order volume in India daily by trading and investing in:
          </p>

          <div className="row">

            <div className="col-6 fs-5">
              <ul className="list-unstyled">
                <li className='mb-3'>• Futures and Options</li>
                <li className='mb-3'>• Commodity derivatives</li>
                <li className='mb-3'>• Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6 fs-5">
              <ul className="list-unstyled">
                <li className='mb-3'>• Stocks & IPOs</li>
                <li className='mb-3'>• Direct mutual funds</li>
                <li className='mb-3'>• Bonds and govt securities</li>
              </ul>
            </div>

          </div>

          <img 
            src='/media/imges/pressLogos.png' 
            alt="press"
            className='img-fluid mt-4'
            style={{ width: "80%" }}
          />

        </div>

      </div>
    </div>
  )
}

export default Award;


// import React from 'react'

// function Award() {
//   return (
//     <div className='container mt-5'>
//       <div className='row align-items-center'>

//         {/* LEFT IMAGE */}
//         <div className='col-md-6 text-center mb-5'>
//           <img 
//             src="/media/imges/largestBroker.svg" 
//             alt="Broker"
//             className="img-fluid"
//             style={{ maxWidth: "70%" }}
//           />
//         </div>

//         {/* RIGHT TEXT */}
//         <div className='col-md-6 px-5 mb-5'>
//           <h1 className="mb-4" style={{ fontSize: "48px" }}>
//             Largest stock Broker in India
//           </h1>

//           <p className="text-dark mb-3 ">
//             2+ million Zerodha clients contribute to over 15% of all retail order volume in India daily by trading and investing in:
//           </p>

//     <div className="row">

//   <div className="col-6 fs-5">
//     <ul className="list-unstyled">
//       <li className='mb-3'>• Futures and Options</li>
//       <li className='mb-3'>• Commodity derivatives</li>
//       <li className='mb-3'>• Currency derivatives</li>
//     </ul>
//   </div>

//   <div className="col-6 fs-5">
//     <ul className="list-unstyled">
//       <li className='mb-3'>• Stocks & IPOs</li>
//       <li className='mb-3'>• Direct mutual funds</li>
//       <li className='mb-3'>• Bonds and govt securities</li>
//     </ul>
//   </div>

// </div>
// <img src='/media/imges/pressLogos.png'/>

//         </div>

//       </div>
//     </div>
//   )
// }

// export default Award;