import React from 'react';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Navbar from '../../Navbar';
import HeroSection from './HeroSection';
import Award from './Award';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';

import Signup from '../signup/Signup';

function HomePage() {

  const location = useLocation();

  const [message, setMessage] = useState("");
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {

    const params = new URLSearchParams(window.location.search);
    const error = params.get("error");

    if (error === "notfound") {
      setMessage("Page not found!");
    }

  }, [location]);

  return (
    <div className="relative">

      {/* NAVBAR */}
      <Navbar />

      {/* ALERT */}
      {message && (
        <div className="alert alert-danger text-center m-0 rounded-0">
          ⚠️ {message}
        </div>
      )}

      {/* LOGIN BUTTON */}
      <button
        onClick={() => setShowAuth(true)}
        className="
          fixed
          top-5
          right-8
          z-40
          bg-indigo-600
          text-white
          px-6
          py-3
          rounded-xl
          hover:bg-indigo-700
          transition
          shadow-lg
        "
      >
        Login / Signup
      </button>

      {/* MAIN CONTENT */}
      <div style={{ marginTop: "80px" }}>
        <HeroSection />
        <Award />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        <Footer />
      </div>

      {/* POPUP */}
      {showAuth && (

        <div
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/60
            backdrop-blur-sm
          "
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setShowAuth(false)}
            className="
              absolute
              top-6
              right-8
              text-white
              text-5xl
              hover:scale-110
              transition
            "
          >
            ×
          </button>

          {/* SIGNUP COMPONENT */}
          <Signup />

        </div>
      )}

    </div>
  );
}

export default HomePage;