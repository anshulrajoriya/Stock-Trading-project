import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);

  // SIGNUP STATE
  const [signupData, setSignupData] = useState({
    name: "",
    phone: "",
    password: "",
  });

  // SIGNIN STATE
  const [signinData, setSigninData] = useState({
    phone: "",
    password: "",
  });

  // HANDLE CHANGE
  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSigninChange = (e) => {
    setSigninData({
      ...signinData,
      [e.target.name]: e.target.value,
    });
  };

  // SIGNUP API
  const handleSignup = async () => {

    try {

      const res = await axios.post(
        "http://localhost:3002/signup",
        signupData
      );

      alert("Account Created 🚀");

navigate("/dashboard");
    } catch (err) {
      console.log(err);
      alert("Signup Failed");
    }
  };

  // SIGNIN API
// SIGNIN API
const handleSignin = async () => {

  try {

    const res = await axios.post(
      "http://localhost:3002/signin",
      signinData
    );

    localStorage.setItem(
      "token",
      res.data.token
    );

    alert("Login Success 🎉");

    navigate("/dashboard");

  } catch (err) {

    console.log(err);

    alert("Invalid Credentials");

  }

};



  return (

    <div className="flex items-center justify-center overflow-hidden">

      <div className="relative w-[900px] h-[550px] bg-white rounded-[40px] overflow-hidden shadow-2xl flex mt-5 mb-5">

        {/* SIGN IN */}
        <div className="w-1/2 flex items-center justify-center p-10">

          {!isSignup && (
            <div className="w-full max-w-[320px]">

              <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
                Sign In
              </h1>

              <div className="flex flex-col gap-4">

                <input
                  type="number"
                  name="phone"
                  placeholder="Contact Number"
                  onChange={handleSigninChange}
                  className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleSigninChange}
                  className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
                />

                <button
                  onClick={handleSignin}
                  className="bg-indigo-600 text-white py-3 rounded-xl mt-2 hover:bg-indigo-700 transition"
                >
                  Sign In
                </button>

              </div>
            </div>
          )}
        </div>

        {/* SIGN UP */}
        <div className="w-1/2 flex items-center justify-center p-10">

          {isSignup && (
            <div className="w-full max-w-[320px]">

              <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
                Create Account
              </h1>

              <div className="flex flex-col gap-4">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  onChange={handleSignupChange}
                  className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
                />

                <input
                  type="number"
                  name="phone"
                  placeholder="Contact Number"
                  onChange={handleSignupChange}
                  className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleSignupChange}
                  className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
                />

                <button
                  onClick={handleSignup}
                  className="bg-indigo-600 text-white py-3 rounded-xl mt-2 hover:bg-indigo-700 transition"
                >
                  Sign Up
                </button>

              </div>
            </div>
          )}
        </div>

        {/* SLIDING PANEL */}
        <div
          className={`
            absolute
            top-0
            h-full
            w-1/2
            bg-gradient-to-r
            from-blue-500
            to-indigo-600
            text-white
            flex
            flex-col
            items-center
            justify-center
            p-10
            transition-all
            duration-700
            z-10

            ${
              isSignup
                ? "left-0 rounded-r-[120px]"
                : "left-1/2 rounded-l-[120px]"
            }
          `}
        >

          {!isSignup ? (
            <>
              <h1 className="text-5xl font-bold mb-4">
                Hello, Friend!
              </h1>

              <p className="text-center text-gray-200 mb-6">
                Create your account and
                <br />
                start trading today
              </p>

              <button
                onClick={() => setIsSignup(true)}
                className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-indigo-600 transition"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <h1 className="text-5xl font-bold mb-4">
                Welcome Back!
              </h1>

              <p className="text-center text-gray-200 mb-6">
                Already have an account?
                <br />
                Login here
              </p>

              <button
                onClick={() => setIsSignup(false)}
                className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-indigo-600 transition"
              >
                Sign In
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

export default Signup;