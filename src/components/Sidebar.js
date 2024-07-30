// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-800 text-white w-64 flex flex-col">
      <div className="p-4 text-center font-bold text-xl border-b border-gray-700">
        MyApp
      </div>
      <nav className="flex flex-col p-4">
        <Link to="/dashboard" className="mb-2 p-2 rounded hover:bg-gray-700 transition duration-300">
          Dashboard
        </Link>
        <Link to="/profile" className="mb-2 p-2 rounded hover:bg-gray-700 transition duration-300">
          Profile
        </Link>
        <Link to="/settings" className="mb-2 p-2 rounded hover:bg-gray-700 transition duration-300">
          Settings
        </Link>
        <button
          onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/signin';
          }}
          className="mt-auto p-2 rounded bg-red-600 hover:bg-red-700 transition duration-300"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
