import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoPersonCircleOutline, IoPersonCircleSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between mx-6">
        <div className="font-bold text-2xl">
          <NavLink to="/">MoBay</NavLink>
        </div>

        <div className="flex gap-10">
          <NavLink
            to="/"
            className="font-semibold hover:border-b-2 hover:border-gray-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className="font-semibold hover:border-b-2 hover:border-gray-300"
          >
            {" "}
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className="font-semibold hover:border-b-2 hover:border-gray-300"
          >
            {" "}
            About
          </NavLink>
          <NavLink
            to="/signup"
            className="font-semibold hover:border-b-2 hover:border-gray-300"
          >
            Sign Up
          </NavLink>
        </div>

        <div className="flex gap-5 items-center">
          <div className="relative flex items-center ">
            <input
              type="text"
              className="shadow rounded-full my-3 p-2 transition-transform duration-300 focus:scale-105 focus:outline-none  "
              placeholder="  Search..."
            />

            <button className="absolute left-[10.5rem] ">
              <FaSearch className="text-[#c0392f] transform transition-transform duration-250 hover:scale-75 ease-out " />
            </button>
          </div>
          <NavLink to="/profile">
            <IoPersonCircleOutline className="size-6 transform transition-transform duration-200 hover:scale-110 ease-in-out" />
          </NavLink>

          <NavLink to="/cart">
            <FiShoppingCart className="size-6 transform transition-transform duration-200 hover:scale-110 ease-in-out" />
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
