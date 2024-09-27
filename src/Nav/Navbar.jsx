import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";
// import logo from "../assets/Logo.png"; // Corrected import path

const Navbar = ({ activeLink, setActiveLink }) => {
  const [active, setActive] = useState("navbar");

  const showBar = (event) => {
    event.preventDefault();
    setActive("navbar activeNavbar");
  };

  const closeBar = (event) => {
    event.preventDefault();
    setActive("navbar");
  };

  return (
    <div className="navbar-section sticky top-0 lg:bg-white/20 z-[1000] ">
      <div className="header flex items-center justify-between py-2 lg:py-0">
        {/* Logo */}
        <div className="logodiv lg:static lg:mr-4 lg:w-auto w-32">
          {/* <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-auto object-contain"
            />
          </Link> */}
        </div>

        {/* Navbar content */}
        <div
          className={`${active} bg-slate-800 lg:bg-transparent w-full p-4 text-center absolute top-0 left-[-500%] z-[3000] lg:left-0 lg:flex lg:items-center md:justify-between lg:justify-end transition-transform duration-300 lg:static`}
        >
          {/* Nav List */}
          <div className="navList lg:flex lg:items-center">
            <li className="navItem list-none mt-2 lg:mt-0 lg:mr-4">
              <Link
                to="/"
                className={`navLink text-lg lg:text-xl font-medium text-white lg:text-black hover:text-[#4668DF] focus:ring focus:ring-offset-2 focus:ring-[#4668DF] py-2 px-4 leading-snug transition-all duration-200 ${
                  activeLink === "Home" ? "text-[#775BE5]" : ""
                }`}
                onClick={() => setActiveLink("Home")}
              >
                Home
              </Link>
            </li>
            {/* About Link */}
            <li className="navItem list-none mt-2 lg:mt-0 lg:mr-4">
              <Link
                to="/about"
                className={`navLink text-lg lg:text-xl font-medium text-white lg:text-black hover:text-[#4668DF] focus:ring focus:ring-offset-2 focus:ring-[#4668DF] py-2 px-4 leading-snug transition-all duration-200 ${
                  activeLink === "About" ? "text-[#775BE5]" : ""
                }`}
                onClick={() => setActiveLink("About")}
              >
                About
              </Link>
            </li>
            <li className="navItem list-none mt-2 lg:mt-0 lg:mr-4">
              <Link
                to="/track-order"
                className={`navLink text-lg lg:text-xl font-medium text-white lg:text-black hover:text-[#4668DF] focus:ring focus:ring-offset-2 focus:ring-[#4668DF] py-2 px-4 leading-snug transition-all duration-200 ${
                  activeLink === "Track My Order" ? "text-[#775BE5]" : ""
                }`}
                onClick={() => setActiveLink("Track My Order")}
              >
                Track My Order
              </Link>
            </li>
            {/* Contact Link */}
            <li className="navItem list-none mt-2 lg:mt-0 lg:mr-4">
              <Link
                to="/contact"
                className={`navLink text-lg lg:text-xl font-medium text-white lg:text-black hover:text-[#4668DF] focus:ring focus:ring-offset-2 focus:ring-[#4668DF] py-2 px-4 leading-snug transition-all duration-200 ${
                  activeLink === "Contact" ? "text-[#775BE5]" : ""
                }`}
                onClick={() => setActiveLink("Contact")}
              >
                Contact
              </Link>
            </li>

            {/* Sign Up and Login Buttons */}
            <div className="btn flex flex-col lg:flex-row justify-center items-center mt-4 lg:mt-0">
              <li className="navItem list-none">
                <Link
                  to="/login"
                  className={`navLink text-lg lg:text-xl font-medium hover:cursor-pointer flex items-center justify-center text-white lg:text-black hover:text-white py-1 px-6 ml-1 rounded-full hover:bg-[#4668DF] whitespace-nowrap transition-all duration-200 ${
                    activeLink === "Login" ? "bg-[#4668DF] text-white" : ""
                  }`}
                  onClick={() => setActiveLink("Login")}
                >
                  <GoPerson className="mr-2" />
                  Login
                </Link>
              </li>
            </div>

            {/* Close Button for Mobile */}
            <div
              className="absolute top-3 right-3 text-3xl cursor-pointer lg:hidden transition-transform duration-300 hover:rotate-90"
              onClick={closeBar}
            >
              <IoCloseCircle />
            </div>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger text-3xl lg:hidden">
          <button
            className="bars transition-transform duration-300 hover:rotate-90 text-black"
            onClick={showBar}
          >
            <FaBars />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
