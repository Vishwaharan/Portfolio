// src/components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 bg-gray-100 text-center">
      <h3 className="text-2xl font-semibold mb-8">Contact Me</h3>
      <form
        className="max-w-md mx-auto space-y-6 bg-white p-6 rounded-lg shadow-lg"
        action="https://formspree.io/f/mnqylwnp"
        method="POST"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
