"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black bg-opacity-70 shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <Link href="/" onClick={closeMenu} className="flex items-center space-x-2">
              <img
                src="/logo.webp" // Replace with the path to your logo
                alt="Logo"
                className="h-10 w-10 rounded-full border-2 border-white shadow"
              />
              <h1 className="text-xl md:text-2xl font-bold text-white whitespace-nowrap drop-shadow-lg">
                Downtown Apartment
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-indigo-300 transition duration-300">
              Home
            </Link>
            <Link href="#about" className="text-white hover:text-indigo-300 transition duration-300">
              About
            </Link>
            <Link href="#features" className="text-white hover:text-indigo-300 transition duration-300">
              Features
            </Link>
            <Link href="#gallery" className="text-white hover:text-indigo-300 transition duration-300">
              Gallery
            </Link>
            <Link href="#location" className="text-white hover:text-indigo-300 transition duration-300">
              Location
            </Link>
            <Link href="#contact" className="text-white hover:text-indigo-300 transition duration-300">
              Contact
            </Link>
            <Link 
              href="#availability" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              Reserve Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link 
              href="#availability" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-sm transition duration-300 shadow-lg hover:shadow-xl font-medium"
              onClick={closeMenu}
            >
              Reserve
            </Link>
            <button
              className="text-white hover:text-indigo-300 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 shadow-lg rounded-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              href="/"
              className="block text-white hover:bg-gray-700 hover:text-indigo-300 px-3 py-2 rounded-lg"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block text-white hover:bg-gray-700 hover:text-indigo-300 px-3 py-2 rounded-lg"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="#features"
              className="block text-white hover:bg-gray-700 hover:text-indigo-300 px-3 py-2 rounded-lg"
              onClick={closeMenu}
            >
              Features
            </Link>
            <Link
              href="#gallery"
              className="block text-white hover:bg-gray-700 hover:text-indigo-300 px-3 py-2 rounded-lg"
              onClick={closeMenu}
            >
              Gallery
            </Link>
            <Link
              href="#location"
              className="block text-white hover:bg-gray-700 hover:text-indigo-300 px-3 py-2 rounded-lg"
              onClick={closeMenu}
            >
              Location
            </Link>
            <Link
              href="#contact"
              className="block text-white hover:bg-gray-700 hover:text-indigo-300 px-3 py-2 rounded-lg"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
