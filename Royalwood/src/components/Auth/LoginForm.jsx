import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">
      
      {/* Hotel Name */}
      <h2 className="text-3xl font-bold text-center text-[#38ce92] mb-2">
        Royal Woods
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Welcome back to Wyonda
      </p>

      {/* Form */}
      <form className="space-y-4">
        
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]"
          />
        </div>

        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember me
          </label>
          <Link to="#" className="text-[#2d6a4f] hover:underline">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-[#2d6a4f] text-white py-3 rounded-lg hover:bg-[#1b4332] transition duration-300"
        >
          Login
        </button>
      </form>

      {/* Register Link */}
      <p className="text-center text-sm mt-6">
        Don’t have an account?{" "}
        <Link to="/register" className="text-[#2d6a4f] font-semibold">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;