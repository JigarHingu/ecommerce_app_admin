import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen text-white border-r-2">
      <div className="flex flex-col gap-4 pt-8 pl-6">
        {/* Sidebar Title */}
        <h2 className="hidden text-lg font-semibold mb-6 tracking-wide text-center md:text-left text-gray-100">
          Admin Dashboard
        </h2>

        {/* Sidebar Links */}
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 
            ${isActive ? 'bg-gray-400 text-black' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`
          }
        >
          <img className="w-5 h-5" src={assets.add_icon} alt="Add Items" />
          <span className="hidden md:block">Add Items</span>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 
            ${isActive ? 'bg-gray-400 text-black' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`
          }
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="List Items" />
          <span className="hidden md:block">List Items</span>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 
            ${isActive ? 'bg-gray-400 text-black' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`
          }
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="Orders" />
          <span className="hidden md:block">Orders</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
