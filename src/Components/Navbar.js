// src/components/Navbar.js

import React from 'react';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-4 flex justify-between items-center">
      <div className="flex-1 text-center">
        {/* <div className="text-2xl font-bold">
          THE NEWSMANIA
        </div> */}
        <div className="welcome_message border-gray-800 text-center bg-slate-800 text-white font-extrabold text-4xl text-pretty rounded-b-full py-3 font-serif">
          THE NEWSMANIA
        </div>
      </div>
      <div className="flex items-center">
        <button 
          className="text-white focus:outline-none md:hidden"
          onClick={toggleSidebar}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <a href="/login" className="text-sm ml-4 hover:underline hidden md:inline">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
