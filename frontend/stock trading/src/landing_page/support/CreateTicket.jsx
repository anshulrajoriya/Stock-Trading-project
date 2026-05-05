// import React from "react";
// import { Link } from "react-router-dom";
// function CreateTicket() {
//   return (
//     <div className="container mt-5" >
//   <div id="mainAccordion">
    

// <div className="w-100 mb-5">

//   {/* Clickable row */}
//   <div
//     className="col-8 d-flex justify-content-between align-items-center border bg-white p-4"
//     data-bs-toggle="collapse"
//     data-bs-target="#accountOpening"
//     style={{ cursor: "pointer" }}
//   >

//     {/* Left side */}
//     <div className="d-flex align-items-center">
//       <div className="bg-secondary bg-opacity-25 p-2 me-3 rounded">
//         <i className="fa-solid fa-plus text-primary"></i>
//       </div>
//       <span className="fw-medium fs-4">Account Opening</span>
//     </div>

//     {/* Right arrow */}
//     <i className="fa-solid fa-chevron-down text-primary"></i>
//   </div>

//   {/* Collapse content */}
//   <div id="accountOpening" className="collapse" data-bs-parent="#mainAccordion">
//     <div className="border p-3 fs-5">

//    <p>
//   <Link to="#">
//     <span className="me-2">•</span>Residential Individual
//   </Link>
// </p>

// <p>
//   <Link to="#">
//     <span className="me-2">•</span>Minor
//   </Link>
// </p>

// <p>
//   <Link to="#">
//     <span className="me-2">•</span>Not Resident India
//   </Link>
// </p>

// <p>
//   <Link to="#">
//     <span className="me-2">•</span>Company, Partnership, HUF and LLP
//   </Link>
// </p>

// <p>
//   <Link to="#">
//     <span className="me-2">•</span>Glossary
//   </Link>
// </p>

//     </div>
//   </div>

// </div>

        
//       <div className=" w-100 mb-5 fs-1">

//         {/* Button styled like row */}
//         <button
       
//   className="col-8 btn d-flex justify-content-between align-items-center border bg-white p-4"
//   data-bs-toggle="collapse"
//   data-bs-target="#zerodhaAccount"

//     style={{ cursor: "pointer" }}
//         >

//           {/* Left side */}
//           <div className="d-flex align-items-center">
//             <div className="bg-secondary bg-opacity-25 p-2 me-3 rounded ">
//                 <i className="fa-regular fa-circle-user text-primary"></i>
//             </div>
// <span className="fw-medium fs-4">Your Zerodha Account </span>
//           </div>

//           {/* Right arrow */}
//           <i className="fa-solid fa-chevron-down text-primary"></i>
//         </button>
//         <div
//   id="zerodhaAccount"
//   className="collapse"
//   data-bs-parent="#mainAccordion"
// >
//   <div className="border p-3 fs-5">

//     <p>
//       <Link to="#">
//         <span className="me-2">•</span>Open account steps
//       </Link>
//     </p>

//     <p>
//       <Link to="#">
//         <span className="me-2">•</span>Documents required
//       </Link>
//     </p>

//     <p>
//       <Link to="#">
//         <span className="me-2">•</span>Charges & fees
//       </Link>
//     </p>

//   </div>
// </div>
//       </div>


      
//       <div className=" w-100 mb-5 fs-1">

//         {/* Button styled like row */}
//         <button
//           className=" col-8 btn  d-flex justify-content-between align-items-center border bg-white p-4"

          
//             data-bs-toggle="collapse"
//     data-bs-target="#kite"
//     style={{ cursor: "pointer" }}
//         >

//           {/* Left side */}
//           <div className="d-flex align-items-center">
//             <div className="bg-secondary bg-opacity-25 p-2 me-3 rounded">
//                 <i className="fa-brands fa-squarespace text-primary"></i>
//             </div>
// <span className="fw-medium fs-4">Kite</span>
//           </div>

//           {/* Right arrow */}
//           <i className="fa-solid fa-chevron-down text-primary"></i>
//         </button>

//         {/* Dropdown content */}
// <div id="kite" className="collapse" data-bs-parent="#mainAccordion">
//   <div className="border p-3 fs-5">

//     <p>
//       <Link to="#">
//         <span className="me-2">•</span>Open account steps
//       </Link>
//     </p>

//     <p>
//       <Link to="#">
//         <span className="me-2">•</span>Documents required
//       </Link>
//     </p>

//     <p>
//       <Link to="#">
//         <span className="me-2">•</span>Charges & fees
//       </Link>
//     </p>

//   </div>
// </div>
//       </div>



      
//       <div className=" w-100 mb-5 fs-1">

//         {/* Button styled like row */}
//         <button
//           className=" col-8 btn  d-flex justify-content-between align-items-center border bg-white p-4"

    
//             data-bs-toggle="collapse"
//     data-bs-target="#Funds"
//     style={{ cursor: "pointer" }}
//         >

//           {/* Left side */}
//           <div className="d-flex align-items-center">
//             <div className="bg-secondary bg-opacity-25 p-2 me-3 rounded">
                
//             <p className="text-primary">₹</p>
//             </div>
// <span className="fw-medium fs-4">Funds</span>
//           </div>

//           {/* Right arrow */}
//           <i className="fa-solid fa-chevron-down text-primary"></i>
//         </button>

//         {/* Dropdown content */}
//         <div id="Funds" className="collapse" data-bs-parent="#mainAccordion">

//     <div className="border p-3 fs-5">

//   <p>
//     <Link to="#">
//       <span className="me-2">•</span>Open account steps
//     </Link>
//   </p>

//   <p>
//     <Link to="#">
//       <span className="me-2">•</span>Documents required
//     </Link>
//   </p>

//   <p>
//     <Link to="#">
//       <span className="me-2">•</span>Charges & fees
//     </Link>
//   </p>
// </div>
// </div>

//       </div>



      
//       <div className=" w-100 mb-5 fs-1">

//         {/* Button styled like row */}
//         <button
//           className=" col-8 btn  d-flex justify-content-between align-items-center border bg-white p-4"

         
//             data-bs-toggle="collapse"
//     data-bs-target="#console"
//     style={{ cursor: "pointer" }}
//         >

//           {/* Left side */}
//           <div className="d-flex align-items-center">
//             <div className="bg-secondary bg-opacity-25 p-2 me-3 rounded">
//                 <i className="fa-solid fa-c text-primary"></i>
//             </div>
// <span className="fw-medium fs-4">Console</span>
//           </div>

//           {/* Right arrow */}
//           <i className="fa-solid fa-chevron-down text-primary"></i>
//         </button>

//         {/* Dropdown content */}
//                 <div id="console" className="collapse" data-bs-parent="#mainAccordion">

//       <div className="border p-3 fs-5">

//   <p>
//     <Link to="#">
//       <span className="me-2">•</span>Open account steps
//     </Link>
//   </p>

//   <p>
//     <Link to="#">
//       <span className="me-2">•</span>Documents required
//     </Link>
//   </p>

//   <p>
//     <Link to="#">
//       <span className="me-2">•</span>Charges & fees
//     </Link>
//   </p>
// </div>
// </div>

//       </div>


      
//       <div className=" w-100 mb-5 fs-1">

//         {/* Button styled like row */}
//         <button
//           className=" col-8 btn  d-flex justify-content-between align-items-center border bg-white p-4"

     
//             data-bs-toggle="collapse"
//     data-bs-target="#coins"
//     style={{ cursor: "pointer" }}
//         >

//           {/* Left side */}
//           <div className="d-flex align-items-center">
//             <div className="bg-secondary bg-opacity-25 p-2 me-3 rounded">
//                 <i className="fa-solid fa-coins text-primary"></i>
//             </div>
// <span className="fw-medium fs-4">Coins</span>
//           </div>

//           {/* Right arrow */}
//           <i className="fa-solid fa-chevron-down text-primary"></i>
//         </button>

//         {/* Dropdown content */}
//                         <div id="coins" className="collapse" data-bs-parent="#mainAccordion">

//     <div className="border p-3 fs-5">

//   <p>
//     <Link to="#">
//       <span className="me-2">•</span>Open account steps
//     </Link>
//   </p>

//   <p>
//     <Link to="#">
//       <span className="me-2">•</span>Documents required
//     </Link>
//   </p>

//   <p>
//     <Link to="#">
//       <span className="me-2">•</span>Charges & fees
//     </Link>
//   </p>

// </div>

//       </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default CreateTicket;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function CreateTicket() {
//   // Use state to track which section is open
//   const [activeId, setActiveId] = useState(null);

//   const toggle = (id) => {
//     setActiveId(activeId === id ? null : id);
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-lg-8">
          
//           {/* Box 1 */}
//           <div className="mb-3">
//             <div 
//               className="d-flex justify-content-between align-items-center border p-4 bg-white shadow-sm rounded"
//               onClick={() => toggle('acc')}
//               style={{ cursor: "pointer" }}
//             >
//               <div className="d-flex align-items-center">
//                 <div className="icon-box-bg me-3"><i className="fa-solid fa-plus text-primary"></i></div>
//                 <span className="fw-medium fs-4">Account Opening</span>
//               </div>
//               <i className={`fa-solid fa-chevron-down text-primary transition-arrow ${activeId === 'acc' ? 'rotate' : ''}`}></i>
//             </div>

//             {/* Content renders ONLY if activeId matches. This prevents empty spaces. */}
//             {activeId === 'acc' && (
//               <div className="border-start border-end border-bottom p-4 bg-white rounded-bottom">
//                 <ul className="list-unstyled mb-0">
//                   <li className="mb-2"><Link to="#" className="text-decoration-none text-muted">• Residential Individual</Link></li>
//                   <li><Link to="#" className="text-decoration-none text-muted">• Minor</Link></li>
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* Repeat for other sections (Zerodha Account, Kite, etc.) */}

//         </div>
//       </div>
//          <div className="row justify-content-center">
//         <div className="col-lg-8">
          
//           {/* Box 1 */}
//           <div className="mb-3">
//             <div 
//               className="d-flex justify-content-between align-items-center border p-4 bg-white shadow-sm rounded"
//               onClick={() => toggle('acc')}
//               style={{ cursor: "pointer" }}
//             >
//               <div className="d-flex align-items-center">
//                 <div className="icon-box-bg me-3"><i className="fa-solid fa-plus text-primary"></i></div>
//                 <span className="fw-medium fs-4">Account Opening</span>
//               </div>
//               <i className={`fa-solid fa-chevron-down text-primary transition-arrow ${activeId === 'acc' ? 'rotate' : ''}`}></i>
//             </div>

//             {/* Content renders ONLY if activeId matches. This prevents empty spaces. */}
//             {activeId === 'acc' && (
//               <div className="border-start border-end border-bottom p-4 bg-white rounded-bottom">
//                 <ul className="list-unstyled mb-0">
//                   <li className="mb-2"><Link to="#" className="text-decoration-none text-muted">• Residential Individual</Link></li>
//                   <li><Link to="#" className="text-decoration-none text-muted">• Minor</Link></li>
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* Repeat for other sections (Zerodha Account, Kite, etc.) */}

//         </div>
//       </div>
//     </div>
//   );
// }

// export default CreateTicket;



import React, { useState } from "react";
import { Link } from "react-router-dom";

function CreateTicket() {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

const renderContent = (items) => (
  <div className="w-100 col-8 border-start border-end border-bottom p-3 fs-5 bg-white">
    {items.map((item, index) => (
      <p key={index}>
        <Link to={item.path} className="text-decoration-none text-primary">
          <span className="me-2">•</span>{item.label}
        </Link>
      </p>
    ))}
  </div>
);

  return (
    <div className=" container mt-5 ">
<div className="row ">
  <div className="col-lg-8 ">
      {/* Account Opening */}
      <div className="mb-4 mr-5">
        <div
          className="w-100 col-8 d-flex justify-content-between align-items-center border bg-white p-4 shadow-sm rounded"
          onClick={() => toggle("account")}
          style={{ cursor: "pointer" }}
        >
          <div className="d-flex align-items-center">
            <div className="bg-secondary bg-opacity-25 p-2 me-3 rounded">
              <i className="fa-solid fa-plus text-primary"></i>
            </div>
            <span className="fw-medium fs-4">Account Opening</span>
          </div>
          <i className={`fa-solid fa-chevron-down text-primary ${activeId === "account" ? "rotate" : ""}`}></i>
        </div>

      {activeId === "account" &&
  renderContent([
    { label: "Residential Individual", path: "residential" },
    { label: "Minor", path: "minor" },
    { label: "Not Resident India", path: "nri" },
    { label: "Company, Partnership, HUF and LLP", path: "company" },
    { label: "Glossary", path: "glossary" }
  ])
}
      </div>

      {/* Zerodha Account */}
      <div className="mb-4 mr-5">
        <div
          className="w-100 col-8 d-flex justify-content-between align-items-center border bg-white p-4 shadow-sm rounded"
          onClick={() => toggle("zerodha")}
        >
          <div className="d-flex align-items-center">
            <div className="bg-secondary bg-opacity-25 p-2 me-3 rounded">
              <i className="fa-regular fa-circle-user text-primary"></i>
            </div>
            <span className="fw-medium fs-4">Your Zerodha Account</span>
          </div>
          <i className={`fa-solid fa-chevron-down text-primary ${activeId === "zerodha" ? "rotate" : ""}`}></i>
        </div>

     {activeId === "zerodha" &&
  renderContent([
    { label: "Open account steps", path: "openaccount" },
    { label: "Documents required", path: "documentspage" },
    { label: "Charges & fees", path: "charges" }
  ])
}
      </div>

      {/* Kite */}
      <div className="mb-4 mr-5">
        <div
          className="w-100 col-8 d-flex justify-content-between align-items-center border bg-white p-4 shadow-sm rounded"
          onClick={() => toggle("kite")}
        >
          <div className="d-flex align-items-center">
            <div className="bg-secondary bg-opacity-25 p-2 me-3 rounded">
              <i className="fa-brands fa-squarespace text-primary"></i>
            </div>
            <span className="fw-medium fs-4">Kite</span>
          </div>
          <i className={`fa-solid fa-chevron-down text-primary ${activeId === "kite" ? "rotate" : ""}`}></i>
        </div>

        {activeId === "kite" &&
          renderContent([
          { label: "Open account steps", path: "openaccount" },
            { label: "Documents required", path: "documentspage"},
            { label: "Charges & fees", path: "charges" }
          ])
        }
      </div>

      {/* Funds */}
      <div className="mb-4 mr-5">
        <div
          className="w-100 col-8 d-flex justify-content-between align-items-center border bg-white p-4 shadow-sm rounded"
          onClick={() => toggle("funds")}
        >
          <div className="d-flex align-items-center">
            <div className="bg-secondary bg-opacity-25 p-2 me-3 rounded">
              <span className="text-primary">₹</span>
            </div>
            <span className="fw-medium fs-4">Funds</span>
          </div>
          <i className={`fa-solid fa-chevron-down text-primary ${activeId === "funds" ? "rotate" : ""}`}></i>
        </div>

        {activeId === "funds" &&
          renderContent([
            { label: "Add money", path: "addmoney" },
                        { label: "Add bank account", path: "addbank" },
            { label: "Withdraw money", path: "withdraw" },
          ])
        }
      </div>

      {/* Console */}
      <div className="mb-4 mr-5">
        <div
          className="w-100 col-8 d-flex justify-content-between align-items-center border bg-white p-4 shadow-sm rounded"
          onClick={() => toggle("console")}
        >
          <div className="d-flex align-items-center">
            <div className="bg-secondary bg-opacity-25 p-2 me-3 rounded">
              <i className="fa-solid fa-c text-primary"></i>
            </div>
            <span className="fw-medium fs-4">Console</span>
          </div>
          <i className={`fa-solid fa-chevron-down text-primary ${activeId === "console" ? "rotate" : ""}`}></i>
        </div>

        {activeId === "console" &&
          renderContent([
                       { label: "Portfolio", path: "portfolio" },
            { label: "Profile", path: "profile" },
            { label: "Segments", path: "segments" },

          ])
        }
      </div>

      {/* Coins */}
      <div className="mb-4 mr-5">
        <div
          className="w-100 col-8 d-flex justify-content-between align-items-center border bg-white p-4 shadow-sm rounded"
          onClick={() => toggle("coins")}
        >
          <div className="d-flex align-items-center">
            <div className="bg-secondary bg-opacity-25 p-2 me-3 rounded">
              <i className="fa-solid fa-coins text-primary"></i>
            </div>
            <span className="fw-medium fs-4">Coins</span>
          </div>
          <i className={`fa-solid fa-chevron-down text-primary ${activeId === "coins" ? "rotate" : ""}`}></i>
        </div>

        {activeId === "coins" &&
          renderContent([
                     { label: "Mutul funds", path: "mutul" },
            { label: "General and Orders", path: "general" },
            { label: "Add money", path: "addmoney" },
            { label: "Fix deposit", path: "fix" },

          ])
        }
      </div>
      </div>

      <div className=" col-lg-4">

        <div className="light-orange ml-5 fs-5 text-center border  p-3 sticky-top" style={{ top: "20px"  }}>
          <p className="text-primary mb-0">
            <Link to="#" className="text-decoration-none fs-4">
             • Adjust of F&O contracts of 
              INDIANB due to dividend
            </Link>
          </p>

             <p className="mt-3 text-primary mb-0 fs-4">
            <Link to="#" className="text-decoration-none">
             • Latest Intraday leverages and Square-off timings
            </Link>
          </p>

         
        </div>
         <div className="ml-5">
            <p className=" shadow-sm rounded fs-3 text-center mt-5 border form-control">Quick Links</p>
            <p className=" shadow-sm rounded fs-5 p-2 text-primary border">1. Track account opening</p>
                        <p className=" shadow-sm rounded fs-5 p-2 text-primary border">2. Track segment activation</p>
            <p className=" shadow-sm rounded fs-5 p-2 text-primary border">3. Intraday margins</p>
            <p className=" shadow-sm rounded fs-5 p-2 text-primary border">4. Kite user manual</p>
            <p className=" shadow-sm rounded fs-5 p-2 text-primary border">5. Learn how to create a ticket</p>

          </div>

        

      </div>

    </div>
    </div>
  );
}

export default CreateTicket;