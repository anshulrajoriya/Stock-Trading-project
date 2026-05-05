// import { StrictMode } from 'react'
// import {RouterProvider,Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import HomePage from './landing_page/home/HomePage.jsx'
// import Signup from './landing_page/signup/Signup.jsx'
// // import about from './landing_page/signup/Signup.jsx'
// import NotFound from './landing_page/Notfound/Notfound.jsx'

// const router = createBrowserRouter(
//     createRoutesFromElements(
// //       <Route path='/' element={<HomePage/>}> 
// //             <Route path='/Signup' element={<Signup/>}> </Route>
// //                   {/* <Route path='/About' element={<About/>}> </Route> */}
// //             {/* <Route path='/Product' element={<Product/>}> </Route>
// //             <Route path='/Pricing' element={<Pricing/>}> </Route>
// //             <Route path='/Support' element={<Support/>}> </Route> */}
// // <Route path="*" element={<NotFound />} />
//     //  </Route>

//     <>
//     <Route path='/' element={<HomePage />} />
//       <Route path='/signup' element={<Signup />} />
//       <Route path='*' element={<NotFound />} />
//     </>
//     )
// )

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router}/>
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.jsx'
import Productpage from './landing_page/Product/Productpage.jsx'
import HomePage from './landing_page/home/HomePage.jsx'
import Signup from './landing_page/signup/Signup.jsx'
import NotFound from './landing_page/Notfound/Notfound.jsx'
import Aboutpage from './landing_page/about/Aboutpage.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx'
import SupportPage from './landing_page/support/SupportPage.jsx'
import CreateTicket from './landing_page/support/CreateTicket.jsx'
import Residential from './landing_page/support/accountopening/Residential.jsx'
import Minor from './landing_page/support/accountopening/Minor.jsx'
import Notresidential from './landing_page/support/accountopening/Notresidential.jsx'
import Company from './landing_page/support/accountopening/Company.jsx'
import Grossary from './landing_page/support/accountopening/Grossary.jsx'
import AddMoney from './landing_page/support/coin/AddMoney.jsx'
import General from './landing_page/support/coin/General.jsx'
import Mutul from './landing_page/support/coin/Mutul.jsx'
import Portfolio from './landing_page/support/console/Portfolio.jsx'
import Profile from './landing_page/support/console/Profile.jsx'
import Segments from './landing_page/support/console/Segments.jsx'
import Withdraw from './landing_page/support/fund/Withdraw.jsx'
import Charges from './landing_page/support/kite/Charges.jsx'
import OpenAccount from './landing_page/OpenAccount.jsx'
import Accountsetup from './landing_page/support/zerodha account/Accountsetup.jsx'
import Fees from './landing_page/support/zerodha account/Fees.jsx'
import RequiredDocument from './landing_page/support/zerodha account/RequiredDocument.jsx'
import Addbank from './landing_page/support/fund/Addbank.jsx'
import Fix from './landing_page/support/coin/Fix.jsx'
import Documentpage from './landing_page/support/kite/Documentpage.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path='about' element={<Aboutpage />} />
      <Route path='signup' element={<Signup />} />
            <Route path='Product' element={<Productpage />} />
            <Route path='Pricing' element={<PricingPage />} />
             <Route path='support' element={<SupportPage />} >

 <Route index element={<CreateTicket />} />

        {/* Account Opening */}
        <Route path="residential" element={<Residential/>} />
        <Route path="minor" element={<Minor/>} />
        <Route path="nri" element={<Notresidential/>} />
        <Route path="company" element={<Company/>} />
        <Route path="glossary" element={<Grossary/>} />

        {/* Zerodha Account */}
        <Route path="accountsetup" element={<Accountsetup/>} />
        <Route path="charges" element={<Fees/>} />
        <Route path="requireddocument" element={<RequiredDocument/>} />

        {/* Kite */}
        <Route path="charges" element={Charges} />
        <Route path="documentspage" element={<Documentpage/>} />
        <Route path="openaccount" element={<OpenAccount/>} />

        {/* Funds */}
        <Route path="addbank" element={<Addbank/>} />
        <Route path="withdraw" element={<Withdraw/>} />

        {/* Console */}
        <Route path="portfolio" element={<Portfolio/>} />
        <Route path="profile" element={<Profile/>} />
                <Route path="segments" element={<Segments/>} />


        {/* Coins */}
        <Route path="addmoney" element={<AddMoney/>} />
                <Route path="fix" element={<Fix/>} />
        <Route path="general" element={<General/>} />
        <Route path="mutul" element={<Mutul/>} />


      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)



