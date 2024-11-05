import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center py-2 px-4 md:px-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 w-full z-50 shadow-base transition-colors duration-300">
      <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
        <a
          href="#home"
          className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition duration-300 transform hover:scale-105"
        >
          Vishwa
        </a>
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center flex-1">
        <div className="flex-1 flex justify-center space-x-6">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`px-3 py-2 font-semibold relative ${
                activeSection === item.toLowerCase()
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
                  : "text-gray-800 dark:text-gray-100"
              } transition-colors duration-300 rounded-lg`}
            >
              {item}
              {activeSection === item.toLowerCase() && (
                <span className="absolute left-0 right-0 -bottom-1 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
              )}
            </a>
          ))}
        </div>
        {/* Desktop Mode Toggle Button */}
        <div>
          <button
            onClick={toggleDarkMode}
            className="ml-6 border border-gray-300 rounded-lg p-2 text-gray-800 dark:text-gray-100 text-2xl bg-gradient-to-r from-blue-400 to-purple-400 hover:scale-105 transition-transform duration-300"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu and Mode Toggle Icons */}
      <div className="md:hidden flex items-center space-x-3">
        <button
          onClick={toggleMenu}
          className="border border-gray-300 rounded-lg p-2 text-gray-800 dark:text-gray-100 text-2xl bg-gradient-to-r from-blue-400 to-purple-400 hover:scale-105 transition-transform duration-300"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <button
          onClick={toggleDarkMode}
          className="border border-gray-300 rounded-lg p-2 text-gray-800 dark:text-gray-100 text-2xl bg-gradient-to-r from-blue-400 to-purple-400 hover:scale-105 transition-transform duration-300"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          ref={menuRef}
          className="absolute top-14 left-0 right-0 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 flex flex-col items-center space-y-2 py-8 shadow-lg rounded-lg md:hidden animate-slide-down"
        >
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              onClick={() => setMenuOpen(false)}
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
