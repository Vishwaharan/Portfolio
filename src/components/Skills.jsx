// src/components/Skills.jsx
import React from "react";
import { FaJava, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiFlutter,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava className="text-red-600 w-12 h-12" /> },
  { name: "Python", icon: <SiPython className="text-yellow-500 w-12 h-12" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-600 w-12 h-12" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500 w-12 h-12" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-300 w-12 h-12" />,
  },
  { name: "ReactJS", icon: <FaReact className="text-blue-400 w-12 h-12" /> },
  { name: "Flutter", icon: <SiFlutter className="text-blue-500 w-12 h-12" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-12 h-12" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-600 w-12 h-12" />,
  },
  { name: "MySQL", icon: <SiMysql className="text-blue-600 w-12 h-12" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 w-12 h-12" /> },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-400 w-12 h-12" />,
  },
];

const Skills = ({ darkMode }) => {
  return (
    <section
      id="skills"
      className={`py-20 px-4 md:px-8 ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-900"
      } text-center`}
    >
      <h3 className="text-2xl md:text-4xl font-extrabold mb-10 tracking-wide">
        Skills
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`shadow-lg rounded-lg p-4 md:p-6 flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-xl ${
              darkMode ? "bg-gray-800 text-gray-300" : "bg-white"
            }`}
          >
            {skill.icon}
            <span className="mt-2 text-base md:text-lg font-medium">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
