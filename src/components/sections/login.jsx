import React, { useState } from "react";

const HeroWithLogin = () => {
  const [userType, setUserType] = useState("Artisan");
  const [showSignUp, setShowSignUp] = useState(false);

  const roles = ["Artisan", "Tourist", "Guide"];

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white px-4">
      <div className="flex flex-col md:flex-row items-stretch max-w-4xl w-full gap-4">
        {/* Left - Form Section */}
        <div className="z-10 bg-white rounded-tr-none rounded-br-none rounded-tl-xl rounded-bl-xl shadow-lg p-8 w-full max-w-md text-gray-800">
          {/* Role Selection Cards */}
          <div className="flex justify-between gap-2 mb-6">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setUserType(role)}
                className={`flex-1 py-2 rounded-lg border text-sm font-semibold ${
                  userType === role
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700"
                } hover:bg-blue-500 hover:text-white transition duration-200`}
              >
                {role}
              </button>
            ))}
          </div>

          {!showSignUp ? (
            <>
              <h2 className="text-2xl font-bold mb-1 text-center">Sign in as {userType}</h2>
              <p className="text-sm text-center text-gray-500 mb-6">
                {userType === "Tourist"
                  ? "Explore and book local experiences"
                  : userType === "Guide"
                  ? "Connect with tourists and share your expertise"
                  : "Showcase and sell your local crafts"}
              </p>

              {/* Sign in buttons */}
              <div className="space-y-3">
                <button className="flex items-center justify-center w-full border rounded px-4 py-2">
                  <img
                    src="https://img.icons8.com/color/48/000000/google-logo.png"
                    className="h-5 w-5 mr-2"
                    alt="Google"
                  />
                  Sign in with Google
                </button>
                <button className="flex items-center justify-center w-full border rounded px-4 py-2">
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/mac-os.png"
                    className="h-5 w-5 mr-2"
                    alt="Apple"
                  />
                  Sign in with Apple
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-gray-300" />
                <span className="mx-2 text-sm text-gray-400">or</span>
                <div className="flex-grow h-px bg-gray-300" />
              </div>

              {/* Email/Password Login */}
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </label>
                  <span className="text-blue-500 cursor-pointer">Forgot password?</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                  Sign In
                </button>
              </form>

              <div className="text-center mt-4 text-sm text-gray-600">
                Don’t have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setShowSignUp(true)}
                >
                  Sign Up
                </span>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-4 text-center">Sign Up as {userType}</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
                {/* Extra field based on role */}
                {userType === "Artisan" && (
                  <input
                    type="text"
                    placeholder="Type of Craft"
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                  />
                )}
                {userType === "Tourist" && (
                  <input
                    type="text"
                    placeholder="Country of Visit"
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                  />
                )}
                {userType === "Guide" && (
                  <input
                    type="text"
                    placeholder="Area of Expertise"
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                  />
                )}
                <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                  Create Account
                </button>
              </form>
              <div className="text-center mt-4 text-sm text-gray-600">
                Already have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setShowSignUp(false)}
                >
                  Sign In
                </span>
              </div>
            </>
          )}
        </div>

        {/* Right - Image Section */}
        <div className="z-10 bg-white rounded-tr-xl rounded-br-xl rounded-tl-none rounded-bl-none shadow-lg w-full max-w-md ml-[-16px] flex flex-col justify-center items-center overflow-hidden">
          <img 
            src="https://img.freepik.com/premium-vector/register-access-login-password-internet-online-website-concept-flat-illustration_385073-108.jpg"
            alt="Login Visual"
            className="w-80 h-80  "
          />
          <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Connect. Create. Explore.
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Dive into a vibrant community where <span className="text-blue-600 font-medium">Artisans</span> shine,<br />
            <span className="text-blue-600 font-medium">Guides</span> lead unforgettable journeys, and<br />
            <span className="text-blue-600 font-medium">Tourists</span> discover authentic local experiences.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HeroWithLogin;
