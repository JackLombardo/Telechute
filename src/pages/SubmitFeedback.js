import React from 'react';
import { Link } from 'react-router-dom';

function SubmitFeedback() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <header className="bg-gray-950 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">
            <Link to="/">Telechute</Link>
          </div>
          <nav className="space-x-4">
          </nav>
          <Link 
            to="/signin" 
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-4 rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-700 transition duration-300 font-medium"
          >
            Log In
          </Link>
        </div>
      </header>

      <main className="flex-grow flex Sitems-center justify-center py-10">
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="bg-gray-900 p-8 rounded-lg mx-4">
          <h2 className="text-5xl font-bold mb-4">Enter your School/Enterprise ID</h2>
            <textarea
              rows="1"
              placeholder="Type Here..."
              className="w-full p-4 bg-gray-700 text-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            ></textarea>
            <button 
              className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-6 rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-700 transition duration-300 font-medium"
            >
              Submit
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SubmitFeedback;
