import React from "react";
import { Link } from "react-router-dom";
import Google_Git from "../google/Google_Git";

const Login = () => {
  return (
    <div className="bg-gray-50 ">
      <div className="my-container">
        <div className=" py-3 flex justify-center  ">
          <div className=" w-[400px]">
            <h1 className="text-center text-4xl mb-4">Please Login</h1>
            <form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-xl font-bold mb-2"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-xl font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-6 leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                  type="password"
                  placeholder="password"
                  required
                />
                <p className="text-red-500 text-xl italic"></p>
              </div>
              <div className="flex flex-col-reverse gap-2 lg:flex-row items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Log In
                </button>
                <p
                  className="inline-block align-baseline font-bold text-sm tracking-wide"
                  href="#"
                >
                  Don't have an account ?
                  <Link className="underline text-blue-500 ms-1" to="/register">
                    Register
                  </Link>
                </p>
              </div>
            </form>
            <Google_Git></Google_Git>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
