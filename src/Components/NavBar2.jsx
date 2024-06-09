import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar2() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-5 py-3 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/Entertainment"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-5 py-3 rounded-md text-base font-medium"
                >
                  Entertainment
                </Link>
                <Link
                  to="/Technology"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-5 py-3 rounded-md text-base font-medium"
                >
                  Technology
                </Link>
                <Link
                  to="/Sports"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-5 py-3 rounded-md text-base font-medium"
                >
                  Sports
                </Link>
                <Link
                  to="/Business"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-5 py-3 rounded-md text-base font-medium"
                >
                  Business
                </Link>
                <Link
                  to="/Health"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-5 py-3 rounded-md text-base font-medium"
                >
                  Health
                </Link>
                <Link
                  to="/Science"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-5 py-3 rounded-md text-base font-medium"
                >
                  Science
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <Link to="/" className="text-white font-bold text-2xl">
            NewsWave
            </Link>
            <div className="sm:hidden ml-3">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/Entertainment"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Entertainment
          </Link>
          <Link
            to="/Technology"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Technology
          </Link>
          <Link
            to="/Sports"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Sports
          </Link>
          <Link
            to="/Business"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Business
          </Link>
          <Link
            to="/Health"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Health
          </Link>
          <Link
            to="/Science"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Science
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar2;
