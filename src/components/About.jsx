// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-center transition-colors duration-300"
    >
      <div className="overflow-hidden">
        <h3 className="text-2xl md:text-4xl font-extrabold mb-8 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-transform duration-300">
          About Me
        </h3>
      </div>

      <div className="max-w-3xl mx-auto text-left space-y-6 px-6">
        <p className="text-base md:text-lg leading-relaxed text-justify">
          I am a dedicated B.Tech student specializing in Information Technology
          at PSNA College of Engineering and Technology, Dindigul. With a solid
          foundation in programming, I have developed a keen interest in
          crafting efficient solutions using Java, Flutter, and ReactJS.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-justify">
          My journey in technology has been enriched by hands-on experience in
          both mobile and web application development. I thrive on challenges
          and enjoy leveraging modern development tools to deliver impactful
          solutions.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-justify">
          Currently, I am focused on full stack web development, creating
          dynamic and scalable applications that ensure seamless user
          experiences. I am committed to continuous learning and staying updated
          on technological advancements to contribute effectively to innovative
          projects in the tech industry.
        </p>
      </div>
    </section>
  );
};

export default About;
