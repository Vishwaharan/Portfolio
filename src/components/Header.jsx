// src/components/Header.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center py-3 px-4 md:px-8 bg-gray-200 text-gray-800 w-full z-50 shadow-md">
      <h1 className="text-xl md:text-2xl font-bold">
        <a href="#home" className="hover:text-blue-500 transition duration-300">
          Vishwaharan
        </a>
      </h1>

      <nav className="hidden md:flex space-x-6 items-center">
        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-2 py-2 font-bold text-gray-800 transition duration-300 hover:bg-gray-300 hover:text-gray-900 rounded-lg"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="border border-gray-300 rounded-lg p-2 flex items-center justify-center text-gray-800 text-2xl hover:bg-gray-300 transition duration-300"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <nav className="absolute top-14 left-0 right-0 bg-gray-200 text-gray-800 flex flex-col items-center space-y-4 py-6 shadow-md md:hidden rounded-lg">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              onClick={toggleMenu}
              href={`#${item.toLowerCase()}`}
              className="font-bold text-gray-800 hover:bg-gray-300 hover:text-gray-900 rounded-lg px-4 py-2"
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
