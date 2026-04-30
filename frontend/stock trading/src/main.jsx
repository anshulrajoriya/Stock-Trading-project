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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path='about' element={<Aboutpage />} />
      <Route path='signup' element={<Signup />} />
            <Route path='Product' element={<Productpage />} />

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)



