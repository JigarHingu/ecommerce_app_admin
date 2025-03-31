import React from 'react';
import { assets } from '../assets/assets';

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-4 px-[4%] justify-between text-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img
          className="w-[max(10%,100px)] transition-transform duration-200 transform hover:scale-105"
          src={assets.logo}
          alt="Logo"
        />
        <h1 className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 text-lg font-semibold tracking-wide text-gray-900">King's Collection : Admin Panel</h1>
      </div>

      {/* Logout Button */}
      <div className="relative flex items-center">
        <button
          onClick={() => setToken('')}
          className="bg-gray-700 text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full text-sm sm:text-base font-medium
                     hover:bg-gray-800 focus:outline-none transition-all duration-200 shadow-lg
                     hover:shadow-xl hover:scale-105"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;