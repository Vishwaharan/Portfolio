// src/components/Header.js
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center py-3 px-8 bg-gray-200 text-gray-800 w-full z-50 shadow-md">
      <h1 className="text-2xl font-bold">
        <a href="#home" className="hover:text-blue-500 transition duration-300">
          Vishwaharan
        </a>
      </h1>

      <nav className="hidden md:flex space-x-6 items-center">
        <a
          href="#home"
          className="px-2 py-2 font-bold text-gray-800 transition duration-300 hover:bg-gray-300 hover:text-gray-900 rounded-lg"
        >
          Home
        </a>
        <a
          href="#about"
          className="px-2 py-2 font-bold text-gray-800 transition duration-300 hover:bg-gray-300 hover:text-gray-900 rounded-lg"
        >
          About
        </a>
        <a
          href="#skills"
          className="px-2 py-2 font-bold text-gray-800 transition duration-300 hover:bg-gray-300 hover:text-gray-900 rounded-lg"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="px-2 py-2 font-bold text-gray-800 transition duration-300 hover:bg-gray-300 hover:text-gray-900 rounded-lg"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="px-2 py-2 font-bold text-gray-800 transition duration-300 hover:bg-gray-300 hover:text-gray-900 rounded-lg"
        >
          Contact
        </a>
      </nav>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-800 text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <nav className="absolute top-10 left-0 right-0 bg-gray-200 text-gray-800 flex flex-col items-center space-y-4 py-6 shadow-md md:hidden">
          <a
            onClick={toggleMenu}
            href="#home"
            className="font-bold text-gray-800 hover:bg-gray-300 hover:text-gray-900 rounded-lg px-4 py-2"
          >
            Home
          </a>
          <a
            onClick={toggleMenu}
            href="#about"
            className="font-bold text-gray-800 hover:bg-gray-300 hover:text-gray-900 rounded-lg px-4 py-2"
          >
            About
          </a>
          <a
            onClick={toggleMenu}
            href="#skills"
            className="font-bold text-gray-800 hover:bg-gray-300 hover:text-gray-900 rounded-lg px-4 py-2"
          >
            Skills
          </a>
          <a
            onClick={toggleMenu}
            href="#projects"
            className="font-bold text-gray-800 hover:bg-gray-300 hover:text-gray-900 rounded-lg px-4 py-2"
          >
            Projects
          </a>
          <a
            onClick={toggleMenu}
            href="#contact"
            className="font-bold text-gray-800 hover:bg-gray-300 hover:text-gray-900 rounded-lg px-4 py-2"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
