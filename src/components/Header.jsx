// src/components/Header.js
import React from "react";

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header
      className={`fixed top-0 left-0 w-full flex justify-between items-center py-4 px-8 ${
        darkMode ? "bg-gray-800" : "bg-gray-200"
      } text-white`}
    >
      <h1 className="text-xl font-bold">Vishwaharan</h1>
      <nav className="space-x-6">
        <a href="#about" className="hover:text-gray-400">
          About
        </a>
        <a href="#skills" className="hover:text-gray-400">
          Skills
        </a>
        <a href="#projects" className="hover:text-gray-400">
          Projects
        </a>
        <a href="#contact" className="hover:text-gray-400">
          Contact
        </a>
        <button onClick={toggleDarkMode} className="p-2">
          {darkMode ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
