import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";
// import logo from "../assets/Logo.png"; // Corrected import path

const Navbar = ({ activeLink, setActiveLink }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // State to manage mobile navbar visibility
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for managing dropdown visibility
  const [scrollPosition, setScrollPosition] = useState(0); // State for scroll position

  // Fixed Header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen); // Toggle the navbar state
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen); // Toggle dropdown
  };

  return (
    <div className={`navbar-section sticky top-0 z-[1000] ${scrollPosition > 100 ? "bg-white shadow-lg" : ""}`}>
      <div className="header flex items-center justify-between py-2 lg:py-0">
        {/* Logo */}
        <div className="logodiv lg:static lg:mr-4 lg:w-auto w-32">
          {/* <Link to="/">
            <img src={logo} alt="Logo" className="h-20 w-auto object-contain" />
          </Link> */}
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger text-3xl lg:hidden">
          <button
            className="bars transition-transform duration-300 hover:rotate-90 text-black"
            onClick={toggleNavbar}
          >
            <FaBars />
          </button>
        </div>

        {/* Navbar content */}
        <div
          className={`${
            isNavbarOpen ? "navbar activeNavbar" : "navbar hidden"
          } bg-slate-800 lg:bg-transparent w-full p-4 text-center absolute top-0 left-0 z-[3000] lg:flex lg:items-center lg:justify-end transition-transform duration-300`}
        >
          {/* Close Button for Mobile */}
          <div
            className="absolute top-3 right-3 text-3xl cursor-pointer lg:hidden"
            onClick={toggleNavbar}
          >
            <IoCloseCircle />
          </div>

          {/* Search Component */}
          <section className="search py-2 px-0 bg-transparent transition-all duration-300 lg:w-1/2">
            <div className="container m-auto flex justify-between items-center">
              <div className="search-box w-full border-2 border-gray-300 rounded-full flex items-center shadow-md transition-shadow duration-300 hover:shadow-lg">
                <i className="fa fa-search w-[5%] text-center text-gray-400 opacity-75 py-2 px-4"></i>
                <input
                  className="w-full p-3 placeholder:text-gray-400 border-0 rounded-full focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  type="text"
                  placeholder="Search and hit enter..."
                />
                <span
                  className="w-[20%] text-gray-600 opacity-75 border-l-2 border-gray-300 p-2 cursor-pointer hover:text-blue-500 relative"
                  onClick={toggleDropdown} // Toggle dropdown on click
                >
                  All Categories <i className="fa fa-chevron-down ml-2"></i>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute left-0 w-full bg-white border border-gray-300 shadow-lg mt-1 rounded-md z-10">
                      <ul className="py-2">
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Category 1</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Category 2</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Category 3</li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Category 4</li>
                      </ul>
                    </div>
                  )}
                </span>
              </div>
            </div>
          </section>

          {/* Nav List */}
          <div className="navList lg:flex lg:items-center lg:ml-4 flex-wrap">
            <li className="navItem list-none mt-2 lg:mt-0 lg:mr-4">
              <Link
                to="/"
                className={`navLink text-lg lg:text-xl font-medium text-white lg:text-black hover:text-[#4668DF] focus:ring focus:ring-offset-2 focus:ring-[#4668DF] py-2 px-4 leading-snug transition-all duration-200 ${
                  activeLink === "Home" ? "text-[#775BE5]" : ""
                }`}
                onClick={() => {
                  setActiveLink("Home");
                  setIsNavbarOpen(false); // Close navbar on link click
                }}
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
                onClick={() => {
                  setActiveLink("About");
                  setIsNavbarOpen(false); // Close navbar on link click
                }}
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
                onClick={() => {
                  setActiveLink("Track My Order");
                  setIsNavbarOpen(false); // Close navbar on link click
                }}
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
                onClick={() => {
                  setActiveLink("Contact");
                  setIsNavbarOpen(false); // Close navbar on link click
                }}
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
                  onClick={() => {
                    setActiveLink("Login");
                    setIsNavbarOpen(false); // Close navbar on link click
                  }}
                >
                  <GoPerson className="mr-2" />
                  Login
                </Link>
              </li>

              {/* Profile Section Icon */}
              <div className="profile relative ml-4">
                <Link to="/profile">
                  <i className="fa fa-user w-[50px] h-[50px] bg-[#f3f5f9] text-center rounded-full text-2xl text-gray-700 hover:text-blue-500 transition duration-300 flex items-center justify-center"></i>
                </Link>
              </div>

              {/* Cart Section */}
              <div className="cart relative ml-4">
                <Link to="/cart">
                  <div className="relative inline-block">
                    <div className="absolute top-[-10px] right-0 w-[20px] h-[20px] rounded-full bg-red-600 text-white text-[12px] flex items-center justify-center">
                      3 {/* Replace with actual cart item count */}
                    </div>

                    <i className="fa fa-shopping-bag w-[50px] h-[50px] bg-[#f3f5f9] text-center rounded-full text-2xl text-gray-700 hover:text-blue-500 transition duration-300 flex items-center justify-center"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
