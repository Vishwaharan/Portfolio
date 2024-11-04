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
  {
    name: "Java",
    icon: <FaJava className="text-red-600 w-10 h-10 md:w-12 md:h-12" />,
  },
  {
    name: "Python",
    icon: <SiPython className="text-yellow-500 w-10 h-10 md:w-12 md:h-12" />,
  },
  {
    name: "HTML",
    icon: <SiHtml5 className="text-orange-600 w-10 h-10 md:w-12 md:h-12" />,
  },
  {
    name: "CSS",
    icon: <SiCss3 className="text-blue-500 w-10 h-10 md:w-12 md:h-12" />,
  },
  {
    name: "JavaScript",
    icon: (
      <SiJavascript className="text-yellow-300 w-10 h-10 md:w-12 md:h-12" />
    ),
  },
  {
    name: "ReactJS",
    icon: <FaReact className="text-blue-400 w-10 h-10 md:w-12 md:h-12" />,
  },
  {
    name: "Flutter",
    icon: <SiFlutter className="text-blue-500 w-10 h-10 md:w-12 md:h-12" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500 w-10 h-10 md:w-12 md:h-12" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-600 w-10 h-10 md:w-12 md:h-12" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-600 w-10 h-10 md:w-12 md:h-12" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500 w-10 h-10 md:w-12 md:h-12" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-400 w-10 h-10 md:w-12 md:h-12" />,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-8 bg-gray-100 text-gray-900 text-center"
    >
      <h3 className="text-2xl md:text-4xl font-extrabold mb-8 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-transform duration-300">
        Skills
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="shadow-md rounded-lg p-3 md:p-5 flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg bg-white"
          >
            {skill.icon}
            <span className="mt-2 text-sm md:text-lg font-medium">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
