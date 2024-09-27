import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ CartItem }) => {
  // State for managing dropdown visibility
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className="search py-5 px-0 bg-white shadow-lg transition-all duration-300">
      <div className="container m-auto flex justify-between items-center">
        <div className="search-box w-4/5 border-2 border-gray-300 rounded-full flex items-center shadow-md transition-shadow duration-300 hover:shadow-lg">
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

        <div className="icon">
          <div className="cart relative">
            <Link to="/cart">
              <div className="relative inline-block">
                <div className="absolute top-[-10px] right-0 w-[20px] h-[20px] rounded-full bg-red-600 text-white text-[12px] flex items-center justify-center">
                  3
                </div>

                <i className="fa fa-shopping-bag w-[50px] h-[50px] bg-[#f3f5f9] ml-[20px] text-center rounded-full text-2xl text-gray-700 hover:text-blue-500 transition duration-300 flex items-center justify-center"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
