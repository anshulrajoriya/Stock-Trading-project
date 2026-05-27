import React from 'react'
import Navbar from './Navbar'
import Footer from './landing_page/Footer'
import { Outlet } from 'react-router-dom'
function Root() {
    return (
 <div style={{ display: "flex", flexDirection: "column", minHeight: "130vh" }}>
  
  <Navbar />

  <div style={{ flex: 1, marginTop: "100px" }}>
    <Outlet />
  </div>

  <Footer />

</div>
    )
}

export default Root
