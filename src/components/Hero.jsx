// src/components/Hero.js
import React from "react";
import profileImg from "../assets/profile.png";

const Hero = ({ darkMode }) => {
  return (
    <section
      className={`flex flex-col items-center justify-center text-center min-h-screen w-full ${
        darkMode
          ? "bg-gradient-to-b from-gray-800 to-gray-900"
          : "bg-gradient-to-b from-gray-200 to-gray-300"
      } px-4`}
    >
      <div className="w-40 h-40 overflow-hidden rounded-full mb-6 shadow-lg border-4 border-blue-500">
        <img
          src={profileImg}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-4xl font-bold mb-2">
        {darkMode ? (
          <span className="text-white">Hello, I'm Vishwaharan M</span>
        ) : (
          <span className="text-gray-800">Hello, I'm Vishwaharan M</span>
        )}
      </h2>
      <p
        className={`text-lg max-w-md mb-4 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Dedicated IT student with experience in Java, Flutter, and ReactJS.
        Skilled in developing mobile and web applications with a collaborative
        approach and a passion for problem-solving.
      </p>
      <a
        href="../assets/Resume.pdf"
        download="Vishwaharan_M_Resume"
        className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mb-4"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Hero;
