"use client"
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    
    <div className="flex items-center justify-between bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 py-4 px-6">
      <Link href="/" legacyBehavior>
        <a className="text-white text-lg font-medium font-mono">Welcome To Mobile Store</a>
      </Link>
      <div className="flex items-center space-x-4 md:hidden">
        <button onClick={handleMenuClick} className="text-white hover:text-gray-200 focus:outline-none">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.929 3.757a1.5 1.5 0 012.122 0L12 8.879l4.95-4.95a1.5 1.5 0 012.122 2.122L14.122 12l4.95 4.95a1.5 1.5 0 01-2.122 2.122L12 14.122l-4.95 4.95a1.5 1.5 0 01-2.122-2.122L9.878 12 4.929 7.05a1.5 1.5 0 010-2.122z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
              />
            )}
          </svg>
        </button>
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-10" onClick={handleMenuClick}></div>
        )}
        <div
          className={`fixed top-0 right-0 h-full bg-blue-700 w-64 transition duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } z-20`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <Link href="/" legacyBehavior>
              <a className="text-white font-medium text-lg py-2 hover:bg-blue-600 w-full text-center">Home</a>
            </Link>
            <Link href="/productlist" legacyBehavior>
              <a className="text-white font-medium text-lg py-2 hover:bg-blue-600 w-full text-center"> Mobile List</a>
            </Link>
            <Link href="/Search" legacyBehavior>
              <a className="text-white font-medium text-lg py-2 hover:bg-blue-600 w-full text-center">Search</a>
            </Link>
          </div>
        </div>
      </div>

      {/* Large Screen Menu */}
      <div className="hidden md:flex space-x-4">
        <Link href="/" legacyBehavior>
          <a className="text-white hover:text-gray-200">Home</a>
        </Link>
        <Link href="/productlist" legacyBehavior>
          <a className="text-white hover:text-gray-200"> Mobile List</a>
        </Link>
        <Link href="/Search" legacyBehavior>
          <a className="text-white hover:text-gray-200">Search</a>
        </Link>
      </div>
    </div>
    {/* End Large Screen Menu */}
    </>
  
  );
 
};

export default Navbar;
