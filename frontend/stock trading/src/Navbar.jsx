import React from 'react';
import { Link,NavLink } from 'react-router-dom';
function Navbar() {
  return (
<nav className="navbar-custom bg-white border-bottom fixed-top" style={{ height: "100px", zIndex: 1000 }}>
<div className="container d-flex align-items-center justify-content-between h-100">

        {/* Logo */}
        <a href="/" className="navbar-brand mr-5">
          <img
            src="https://zerodha.com/static/images/logo.svg"
            alt="Zerodha"
            style={{ width: "190px" }}
          />
        </a>

        {/* Menu */}
        <ul className="d-flex align-items-center list-unstyled m-0" style={{ gap: "40px" }}>
          
<li>
          <NavLink 
  to="/signup" 
  className={({ isActive }) => 
    `nav-link custom-link ${isActive ? "active text-dark fw-bold" : ""}`
  }
>
  Signup
</NavLink>
</li>
<li>
          <NavLink 
  to="/About" 
  className={({ isActive }) => 
    `nav-link custom-link ${isActive ? "active text-dark fw-bold" : ""}`
  }
>
  About
</NavLink>
</li>
<li>
          <NavLink 
  to="/Product" 
  className={({ isActive }) => 
    `nav-link custom-link ${isActive ? "active text-dark fw-bold" : ""}`
  }
>
  Product
</NavLink>
</li>
<li>
          <NavLink 
  to="/Pricing" 
  className={({ isActive }) => 
    `nav-link custom-link ${isActive ? "active text-dark fw-bold" : ""}`
  }
>
  Pricing
</NavLink>
</li>
<li>

          <NavLink 
  to="/Support" 
  className={({ isActive }) => 
    `nav-link custom-link ${isActive ? "active text-dark fw-bold" : ""}`
  }
>
  Support
</NavLink>
</li>
          {/* <li><a href="#" className="nav-link custom-link">About</a></li>
          <li><a href="#" className="nav-link custom-link">Products</a></li>
          <li><a href="#" className="nav-link custom-link">Pricing</a></li>
          <li><a href="#" className="nav-link custom-link">Support</a></li> */}

          <li>
            <a href="#" className="nav-link custom-link">
              <i className="fa-solid fa-bars"></i>
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;