// src/components/Contact.js
import React from "react";

const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className={`py-20 px-8 ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-900"
      } text-center`} // Conditional styling based on dark mode
    >
      <h3 className="text-2xl font-semibold mb-8">Contact Me</h3>
      <form
        className={`max-w-md mx-auto space-y-6 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } p-6 rounded-lg shadow-lg`} // Form background based on dark mode
        action="https://formspree.io/f/mnqylwnp"
        method="POST"
      >
        <div>
          <label
            htmlFor="name"
            className={`block text-sm font-medium mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`} // Label color based on dark mode
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              darkMode
                ? "bg-gray-700 text-gray-300 border-gray-600"
                : "bg-white text-gray-900 border-gray-300"
            }`} // Input styles based on dark mode
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className={`block text-sm font-medium mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              darkMode
                ? "bg-gray-700 text-gray-300 border-gray-600"
                : "bg-white text-gray-900 border-gray-300"
            }`}
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className={`block text-sm font-medium mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              darkMode
                ? "bg-gray-700 text-gray-300 border-gray-600"
                : "bg-white text-gray-900 border-gray-300"
            }`}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className={`w-full py-3 font-semibold rounded-lg transition duration-300 ${
            darkMode
              ? "bg-blue-500 text-white hover:bg-blue-400"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`} // Button styles based on dark mode
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
