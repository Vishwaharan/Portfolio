// src/components/Projects.js
import React from "react";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons

const projects = [
  {
    name: "Bluetooth Attendance System",
    description:
      "An application to track attendance using Bluetooth technology.",
    image: "path/to/image1.png", // Update with actual image path
    link: "https://github.com/your-username/project1", // Replace with actual GitHub link
  },
  {
    name: "Blogging Website",
    description: "A platform to share and read blogs.",
    image: "path/to/image2.png", // Update with actual image path
    link: "https://github.com/your-username/project2", // Replace with actual GitHub link
  },
];

const Projects = ({ darkMode }) => {
  return (
    <section
      id="projects"
      className={`py-20 px-8 ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-900"
      } text-center`}
    >
      <h3 className="text-3xl font-semibold mb-8">Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 ${
              darkMode ? "bg-gray-800" : "bg-gray-200"
            } relative`} // Background based on dark mode
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-40 w-full object-cover transition-opacity duration-300 hover:opacity-80"
            />
            <div className="flex flex-col justify-between p-6 h-full">
              <div>
                <h4 className="font-semibold text-lg mb-2">{project.name}</h4>
                <p
                  className={`mb-4 ${
                    darkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer" // Add security attributes
                className="absolute bottom-4 right-4" // Position the icon at the bottom right
              >
                <FaGithub
                  className={`text-3xl transition duration-300 ${
                    darkMode
                      ? "text-white hover:text-blue-500"
                      : "text-black hover:text-blue-700"
                  }`}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
