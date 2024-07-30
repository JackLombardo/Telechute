import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <header className="bg-gray-950 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">
            <Link to="/">Telechute</Link>
          </div>
          <nav className="space-x-4">
            <Link to="/features" className="hover:text-indigo-400 transition-colors duration-300">Features</Link>
            <Link to="/pricing" className="hover:text-indigo-400 transition-colors duration-300">Pricing</Link>
            <Link to="/contact" className="hover:text-indigo-400 transition-colors duration-300">Contact</Link>
          </nav>
          <Link 
            to="/signin" 
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-4 rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-700 transition duration-300 font-medium"
          >
            Log In
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        <div className="text-center max-w-4xl mx-auto px-4 py-10">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight animate-text">
            Feedback <br /> Safe, Secure and Completely Anonymous...
          </h1>
          <p className="text-xl mb-8 leading-relaxed animate-text">
            Our platform provides a safe and anonymous space for students and employees to give and receive feedback that drives personal and professional growth.
          </p>
          <Link 
            to="/submitfeedback" 
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-8 rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-700 transition duration-300 text-lg font-medium"
          >
            Start Now
          </Link>
        </div>

        <div className="border-t border-gray-700"> {/* Black line */}
          <section className="bg-black-800 py-16">
            <div className="container mx-auto text-center px-4">
              <h2 className="text-4xl font-bold mb-8 text-gray-100">Our Pricing Plans</h2>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-100">Our Plan</h3>
                  <p className="text-xl mb-4 text-gray-300">$29.99 / month</p>
                  <ul className="text-gray-300 mb-6">
                    <li className="mb-2">Unlimited feedback submissions</li>
                    <li className="mb-2">Unlimited Admin feedback customization</li>
                    <li className="mb-2">Priority support</li>
                  </ul>
                  <Link 
                    to="/signup" 
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-6 rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-700 transition duration-300 font-medium"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-950 text-gray-400 py-4">
        <div className="container mx-auto text-center">
          <p className="mb-2">© 2024 Telechute. All rights reserved.</p>
          <nav className="space-x-4">
            <Link to="/privacy" className="hover:text-indigo-400 transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-indigo-400 transition-colors duration-300">Terms of Service</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Home;
