// src/components/Projects.js
import React from "react";

const projects = [
  {
    name: "Bluetooth Attendance System",
    description:
      "An application to track attendance using Bluetooth technology.",
    image: "path/to/image1.png",
    link: "#",
  },
  {
    name: "Blogging Website",
    description: "A platform to share and read blogs.",
    image: "path/to/image2.png",
    link: "#",
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
      <h3 className="text-2xl font-semibold mb-4">Projects</h3>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden shadow-lg ${
              darkMode ? "bg-gray-800" : "bg-gray-200"
            } w-64`}
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-32 w-full object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold">{project.name}</h4>
              <p className="text-gray-600">{project.description}</p>
              <a href={project.link} className="text-blue-500">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
