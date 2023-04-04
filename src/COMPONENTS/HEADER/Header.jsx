import React, { useState } from "react";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-100  header-container ">
      {/* logo section */}
      <nav className="flex justify-between items-center ">
        <Link to="/" className="inline-flex items-center ">
          <BoltIcon className="h-6 w-6 text-blue-500" />
          <span className="ms-2  tracking-wide text-2xl font-bold text-gray-950 ">
            nextpage
          </span>
        </Link>

        <ul className="items-center">
          <section className="md:hidden  ">
            <div onClick={() => setOpen(!open)}>
              <span>
                {open === true ? (
                  <XMarkIcon
                    className="h-6 w-6 text-blue-500"
                    title="Close Menu"
                  />
                ) : (
                  <Bars3BottomRightIcon
                    className="h-6 w-6 text-blue-500"
                    title="Opne Menu"
                  />
                )}
              </span>
            </div>
          </section>
          <section
            className={`md:flex md:space-x-8 duration-500 absolute md:static  ${
              open ? "-ml-44" : "-top-36"
            }`}
          >
            <li className="mt-6 md:mt-0">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/book"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                About Us
              </NavLink>
            </li>
          </section>
        </ul>
      </nav>
      {/* nav section */}
    </div>
  );
};

export default Header;
