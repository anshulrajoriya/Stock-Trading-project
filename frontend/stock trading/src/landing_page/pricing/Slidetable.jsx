// import React, { useState } from "react";
// import "../../App.css";
// function Slidetable() {
//   const [active, setActive] = useState("equity");

//   return (
//     <div className="container mt-5">

//       {/* Tabs */}
//       <div className="tabs">
//         <span 
//           className={active === "equity" ? "tab active" : "tab"}
//           onClick={() => setActive("equity")}
//         >
//           Equity
//         </span>

//         <span 
//           className={active === "currency" ? "tab active" : "tab"}
//           onClick={() => setActive("currency")}
//         >
//           Currency
//         </span>

//         <span 
//           className={active === "commodity" ? "tab active" : "tab"}
//           onClick={() => setActive("commodity")}
//         >
//           Commodity
//         </span>
//       </div>

//       {/* Content */}
//       <div className="box mt-4">
// {active === "equity" && (
//   <table className="table">
//     <thead>
//       <tr>
//         <th></th>
//         <th>Equity delivery</th>
//         <th>Equity intraday</th>
//         <th>F&O - Futures</th>
//         <th>F&O - Options</th>
//       </tr>
//     </thead>

//     <tbody>
//       <tr>
//         <td>Brokerage</td>
//         <td>Zero Brokerage</td>
//         <td>0.03% or ₹20</td>
//         <td>0.03% or ₹20</td>
//         <td>₹20 per order</td>
//       </tr>

//       <tr>
//         <td>STT/CTT</td>
//         <td>0.1%</td>
//         <td>0.025%</td>
//         <td>0.05%</td>
//         <td>
//           • 0.15% intrinsic value <br/>
//           • 0.15% sell side
//         </td>
//       </tr>

//       <tr>
//         <td>Transaction</td>
//         <td>NSE: 0.00307%<br/>BSE: 0.00375%</td>
//         <td>NSE: 0.00307%<br/>BSE: 0.00375%</td>
//         <td>NSE: 0.00183%<br/>BSE: 0</td>
//         <td>NSE: 0.03553%<br/>BSE: 0.0325%</td>
//       </tr>

//       <tr>
//         <td>GST</td>
//         <td colSpan="4">18% on (brokerage + SEBI + transaction)</td>
//       </tr>

//       <tr>
//         <td>SEBI</td>
//         <td colSpan="4">₹10 / crore</td>
//       </tr>

//       <tr>
//         <td>Stamp</td>
//         <td>0.015%</td>
//         <td>0.003%</td>
//         <td>0.002%</td>
//         <td>0.003%</td>
//       </tr>
//     </tbody>
//   </table>
// )}

// <div className="table-box">
//   {/* table yaha */}

// {active === "currency" && (
//   <table className="table">
//     <thead>
//       <tr>
//         <th></th>
//         <th>Currency futures</th>
//         <th>Currency options</th>
//       </tr>
//     </thead>

//     <tbody>
//       <tr>
//         <td>Brokerage</td>
//         <td>0.03% or ₹20</td>
//         <td>₹20 per order</td>
//       </tr>

//       <tr>
//         <td>STT</td>
//         <td>No STT</td>
//         <td>No STT</td>
//       </tr>

//       <tr>
//         <td>Transaction</td>
//         <td>NSE: 0.00035%</td>
//         <td>NSE: 0.0311%</td>
//       </tr>

//       <tr>
//         <td>GST</td>
//         <td colSpan="2">18%</td>
//       </tr>

//       <tr>
//         <td>SEBI</td>
//         <td colSpan="2">₹10 / crore</td>
//       </tr>

//       <tr>
//         <td>Stamp</td>
//         <td colSpan="2">0.0001%</td>
//       </tr>
//     </tbody>
//   </table>
// )}


// {active === "commodity" && (
//   <table className="table pricing-table">
//     <thead>
//       <tr>
//         <th></th>
//         <th>Commodity futures</th>
//         <th>Commodity options</th>
//       </tr>
//     </thead>

//     <tbody>
//       <tr>
//         <td>Brokerage</td>
//         <td>0.03% or ₹20</td>
//         <td>₹20 per order</td>
//       </tr>

//       <tr>
//         <td>STT</td>
//         <td>0.01%</td>
//         <td>0.05%</td>
//       </tr>

//       <tr>
//         <td>Transaction</td>
//         <td>MCX: 0.0021%</td>
//         <td>MCX: 0.0418%</td>
//       </tr>

//       <tr>
//         <td>GST</td>
//         <td colSpan="2">18%</td>
//       </tr>

//       <tr>
//         <td>SEBI</td>
//         <td>₹1 / ₹10 crore</td>
//         <td>₹10 / crore</td>
//       </tr>

//       <tr>
//         <td>Stamp</td>
//         <td>0.002%</td>
//         <td>0.003%</td>
//       </tr>
//     </tbody>
//   </table>
// )}
// </div>
//       </div>
//     </div>
//   );
// }

// export default Slidetable;



import React, { useState } from "react";
import "../../App.css";
function Slidetable() {
  const [active, setActive] = useState("equity");
  return (
<div className="pricing-section container mt-5 fs-1 mb-5">

  {/* Tabs */}
  <div className="pricing-tabs fs-1">
    <span 
      className={active === "equity" ? "pricing-tab active" : "pricing-tab"}
      onClick={() => setActive("equity")}
    >
      Equity
    </span>

    <span 
      className={active === "currency" ? "pricing-tab active" : "pricing-tab"}
      onClick={() => setActive("currency")}
    >
      Currency
    </span>

    <span 
      className={active === "commodity" ? "pricing-tab active" : "pricing-tab"}
      onClick={() => setActive("commodity")}
    >
      Commodity
    </span>
  </div>

  {/* Table Box */}
  <div className="pricing-table-box mt-4">

     <div className="box mt-4">
{active === "equity" && (
  <table className="table">
    <thead>
      <tr>
        <th></th>
        <th>Equity delivery</th>
        <th>Equity intraday</th>
        <th>F&O - Futures</th>
        <th>F&O - Options</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Brokerage</td>
        <td>Zero Brokerage</td>
        <td>0.03% or ₹20</td>
        <td>0.03% or ₹20</td>
        <td>₹20 per order</td>
      </tr>

      <tr>
        <td>STT/CTT</td>
        <td>0.1%</td>
        <td>0.025%</td>
        <td>0.05%</td>
        <td>
          • 0.15% intrinsic value <br/>
          • 0.15% sell side
        </td>
      </tr>

      <tr>
        <td>Transaction</td>
        <td>NSE: 0.00307%<br/>BSE: 0.00375%</td>
        <td>NSE: 0.00307%<br/>BSE: 0.00375%</td>
        <td>NSE: 0.00183%<br/>BSE: 0</td>
        <td>NSE: 0.03553%<br/>BSE: 0.0325%</td>
      </tr>

      <tr>
        <td>GST</td>
        <td colSpan="4">18% on (brokerage + SEBI + transaction)</td>
      </tr>

      <tr>
        <td>SEBI</td>
        <td colSpan="4">₹10 / crore</td>
      </tr>

      <tr>
        <td>Stamp</td>
        <td>0.015%</td>
        <td>0.003%</td>
        <td>0.002%</td>
        <td>0.003%</td>
      </tr>
    </tbody>
  </table>
)}
 {active === "currency" && (
  <table className="table">
    <thead>
      <tr>
        <th></th>
        <th>Currency futures</th>
        <th>Currency options</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Brokerage</td>
        <td>0.03% or ₹20</td>
        <td>₹20 per order</td>
      </tr>

      <tr>
        <td>STT</td>
        <td>No STT</td>
        <td>No STT</td>
      </tr>

      <tr>
        <td>Transaction</td>
        <td>NSE: 0.00035%</td>
        <td>NSE: 0.0311%</td>
      </tr>

      <tr>
        <td>GST</td>
        <td colSpan="2">18%</td>
      </tr>

      <tr>
        <td>SEBI</td>
        <td colSpan="2">₹10 / crore</td>
      </tr>

      <tr>
        <td>Stamp</td>
        <td colSpan="2">0.0001%</td>
      </tr>
    </tbody>
  </table>
)}
    {active === "commodity" && (
      <table className="table pricing-table">
        <thead>
          <tr>
            <th></th>
            <th>Commodity futures</th>
            <th>Commodity options</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Brokerage</td>
            <td>0.03% or ₹20/executed order whichever is lower</td>
            <td>₹20/executed order</td>
          </tr>

          <tr>
            <td>STT/CTT</td>
            <td>0.01% on sell side (Non-Agri)</td>
            <td>0.05% on sell side</td>
          </tr>

          <tr>
            <td>Transaction charges</td>
            <td>MCX: 0.0021%<br/>NSE: 0.0001%</td>
            <td>MCX: 0.0418%<br/>NSE: 0.001%</td>
          </tr>

          <tr>
            <td>GST</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
          </tr>

          <tr>
            <td>SEBI charges</td>
            <td>
              Agri: ₹1 / crore <br/>
              Non-agri: ₹10 / crore
            </td>
            <td>₹10 / crore</td>
          </tr>

          <tr>
            <td>Stamp charges</td>
            <td>0.002% or ₹200 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    )}

  </div>
</div>

</div>
  


  
  )
}

export default Slidetable;