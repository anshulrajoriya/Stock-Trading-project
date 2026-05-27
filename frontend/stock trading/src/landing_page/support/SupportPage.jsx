import React from 'react'
import Hero from './Hero'
import CreateTicket from './CreateTicket'
import { Outlet, useLocation } from 'react-router-dom'

function SupportPage() {

  const location = useLocation();
  const isMain = location.pathname === "/Support";

  return (
    <div>
      <Hero />

      <div className="container mt-4 ">
        <div className="row">

          {/* LEFT SIDE */}
          
          <div className={isMain ? "col-12" : "col-lg-6" }>
            <CreateTicket />
          </div>
          

          {/* RIGHT SIDE */}
          {!isMain && (
            <div className="col-lg-6">
              <Outlet />
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default SupportPage;