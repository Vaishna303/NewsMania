// src/components/Sidebar.js

import React from 'react';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`bg-gray-800 text-white w-64 h-full fixed top-0 left-0 py-4 px-2 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}>
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul>
        <li className="mb-2">
          <a href="/login" className="text-sm hover:underline">
            Login
          </a>
        </li>
        <li className="mb-2">
          <a href="/more" className="text-sm hover:underline">
            More Options
          </a>
        </li>
        {/* Add more options here */}
      </ul>
    </div>
  );
};

export default Sidebar;
