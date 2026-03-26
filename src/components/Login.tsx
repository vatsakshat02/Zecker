import React from "react";
import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen">
      <Header />

      <div className="absolute w-105 h-105 bg-blue-500/20 blur-3xl rounded-full top-20 left-20"></div>
      <div className="flex flex-1 justify-center items-center">
        <form
          className="flex flex-col gap-6 justify-center bg-white/10 backdrop-blur-xl border border-white/10 rounded-lg w-[500px]  my-30 mx-auto text-white p-6 shadow-[0_8px_32px_rgba(0,0,0,0.6)] p-8 "
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-gray-400 text-sm my-2" onClick={handleSignIn}>
              Login to continue
            </p>
          </div>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Name"
              className="border border-white/20 bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 rounded-lg transition"
            />
          )}
          <input
            type="text"
            placeholder="Email"
            className="border border-white/20 bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 rounded-lg transition"
          />
          <input
            type="text"
            placeholder="password"
            className="border border-white/20 bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 p-3 rounded-lg transition"
          />
          <button className="border border-white/20 p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition font-semibold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
