// src/components/Header.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center py-2 px-4 md:px-8 bg-gray-50 text-gray-800 w-full z-50 shadow-base transition-colors duration-300">
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
        <a
          href="#home"
          className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition duration-300 transform hover:scale-105"
        >
          Vishwa
        </a>
      </h1>

      <nav className="hidden md:flex space-x-6 items-center">
        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-3 py-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-colors duration-300 hover:bg-opacity-10 rounded-lg"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="border border-gray-300 rounded-lg p-2 flex items-center justify-center text-gray-800 text-2xl bg-gradient-to-r from-blue-400 to-purple-400 hover:scale-105 hover:bg-blue-400 transition-transform duration-300"
        >
          {menuOpen ? (
            <FaTimes className="text-white" />
          ) : (
            <FaBars className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-14 left-0 right-0 bg-white text-gray-800 flex flex-col items-center space-y-2 py-8 shadow-lg rounded-lg md:hidden animate-slide-down">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              onClick={toggleMenu}
              href={`#${item.toLowerCase()}`}
              className="w-full text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 rounded-lg px-4 py-3 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
