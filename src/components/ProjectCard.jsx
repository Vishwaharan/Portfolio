// src/components/ProjectCard.js
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg w-64 overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h4 className="font-semibold text-lg mb-2">{project.name}</h4>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <a href={project.link} className="text-blue-500 hover:underline">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
