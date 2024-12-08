"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <img
              src="/logo.webp" // Replace with the path to your logo
              alt="Logo"
              className="h-10 w-10 mr-3"
            />
            {/* Shortened Text for Mobile */}
            <h1 className="block sm:hidden text-xl font-bold text-gray-600 whitespace-nowrap">
              Downtown Apartment
            </h1>
            {/* Full Text for Larger Screens */}
            <h1 className="hidden sm:block text-xl md:text-2xl font-bold text-gray-600 whitespace-nowrap">
              Downtown Apartment By the Lindens
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-700 hover:text-indigo-600">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-indigo-600">
              About
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-indigo-600">
              Features
            </Link>
            <Link href="#gallery" className="text-gray-700 hover:text-indigo-600">
              Gallery
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-indigo-600">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
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
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link href="/" className="block text-gray-700 hover:text-indigo-600">
              Home
            </Link>
            <Link href="#about" className="block text-gray-700 hover:text-indigo-600">
              About
            </Link>
            <Link href="#features" className="block text-gray-700 hover:text-indigo-600">
              Features
            </Link>
            <Link href="#gallery" className="block text-gray-700 hover:text-indigo-600">
              Gallery
            </Link>
            <Link href="#contact" className="block text-gray-700 hover:text-indigo-600">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
