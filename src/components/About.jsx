// src/components/About.js
import React from "react";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-20 px-8 ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-900"
      } text-center`}
    >
      <h3 className="text-3xl font-semibold mb-8">About Me</h3>
      <div className="max-w-2xl mx-auto text-left">
        <p className="mb-4">
          I am a dedicated IT student with a passion for technology and
          innovation. Currently pursuing my B.Tech in Information Technology at
          PSNA College of Engineering and Technology, I have gained hands-on
          experience in developing applications using various technologies. I
          thrive on challenges and love to solve problems using code.
        </p>
        <p className="mb-4">
          I have worked on several projects, including a Bluetooth Attendance
          System and a Blogging Website, where I have applied my skills in
          real-world scenarios. My internship as a Full Stack Developer at
          Phoenix Softech allowed me to further enhance my knowledge of both
          frontend and backend technologies.
        </p>
        <p>
          Looking forward, I aim to contribute to innovative projects that make
          a positive impact on society while continuing to learn and grow as a
          developer.
        </p>
      </div>
    </section>
  );
};

export default About;
