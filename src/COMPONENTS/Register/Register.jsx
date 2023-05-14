import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-gray-50  ">
      <div className=" my-container">
        {/* <h1 className="text-center text-4xl mb-6">Please Register</h1> */}
        <div className="  flex justify-center  ">
          <div className=" w-[400px]">
            <form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-xl font-bold mb-2"
                  htmlFor="text"
                >
                  Your Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-xl font-bold mb-2"
                  htmlFor="email"
                >
                  Photo URL
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="photo"
                  placeholder=""
                />
              </div>
              <div className="mb-4">
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
              <div className="mb-2">
                <label
                  className="block text-gray-700 text-xl font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="password"
                  required
                />
                <p className="text-red-500 text-xs italic"></p>
                <p className="text-red-500 text-xs italic"></p>
              </div>
              <div className="flex flex-col-reverse gap-2 lg:flex-row  items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register
                </button>
                <p
                  className="inline-block align-baseline font-bold text-sm t"
                  href="#"
                >
                  Already have an account ?
                  <Link className="text-blue-500 underline ms-1" to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
