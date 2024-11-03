// src/components/Hero.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center min-h-screen w-full bg-gradient-to-b from-gray-300 to-gray-200 px-4"
    >
      <div className="w-48 h-48 overflow-hidden rounded-full mb-6 shadow-lg border-4 border-blue-400 transform transition-transform duration-300 hover:scale-110">
        <img
          src={profileImg}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-3xl md:text-5xl font-extrabold mb-2 text-gray-800">
        Hello, I'm Vishwaharan M
      </h2>
      <p className="text-xl max-w-md mb-4 text-gray-600 transition duration-300 transform hover:scale-105">
        <span className="text-blue-500 font-bold">Passionate</span>{" "}
        <span className="text-blue-700 font-semibold">Developer</span>
      </p>

      {/* Social Media Links */}
      <div className="flex space-x-6 mb-4">
        <a
          href="https://www.linkedin.com/in/vishwaharan02-m/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition duration-300"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://github.com/Vishwaharan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600 transition duration-300"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="mailto:vishwaharan002@gmail.com"
          className="text-red-600 hover:text-red-800 transition duration-300"
        >
          <FaEnvelope size={28} />
        </a>
      </div>

      <a
        href="https://drive.google.com/file/d/17oq43zh4MH2ksmnEAP4YZbqpuxbDUkkm/view?usp=drive_link"
        className="px-10 py-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mb-4 text-lg font-semibold"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Hero;
