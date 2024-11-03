// src/components/Projects.jsx
import React from "react";
import { FaGithub } from "react-icons/fa";
import bluetoothProj from "../assets/bluetooth.png";
import blogProj from "../assets/blog.png";

const projects = [
  {
    name: "Bluetooth Attendance System",
    description:
      "An application to track attendance using Bluetooth technology.",
    image: bluetoothProj,
    link: "https://github.com/Vishwaharan/Bluetooth-Attendance-System-Teacher-App",
  },
  {
    name: "Blogging Website",
    description: "A platform to share and read blogs.",
    image: blogProj,
    link: "https://github.com/Vishwaharan/mern-blog",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-8 bg-white text-gray-900 text-center"
    >
      <h3 className="text-4xl font-extrabold mb-10 tracking-wide">Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 border border-gray-300 bg-gray-100 relative"
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-56 w-full object-cover transition-opacity duration-300 hover:opacity-90"
            />
            <div className="flex flex-col justify-between p-6 h-full">
              <div>
                <h4 className="font-bold text-xl mb-2 text-gray-800">
                  {project.name}
                </h4>
                <p className="mb-6 text-base text-gray-700">
                  {project.description}
                </p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 text-3xl text-gray-800 hover:text-blue-700 transition duration-300"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
