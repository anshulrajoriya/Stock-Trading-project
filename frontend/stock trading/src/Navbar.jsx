import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white border-bottom fixed-top" style={{ height: "100px", zIndex: 1000 }}>
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
          
          <li><a href="#" className="nav-link custom-link">Signup</a></li>
          <li><a href="#" className="nav-link custom-link">About</a></li>
          <li><a href="#" className="nav-link custom-link">Products</a></li>
          <li><a href="#" className="nav-link custom-link">Pricing</a></li>
          <li><a href="#" className="nav-link custom-link">Support</a></li>

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