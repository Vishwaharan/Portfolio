// src/components/Contact.js
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_x6cbo5o", // Replace with your EmailJS service ID
        "template_hvmq0lc", // Replace with your EmailJS template ID
        formData,
        "OrlO5k_t7MvvmDYJ2" // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatusMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setStatusMessage("Failed to send your message. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="py-20 px-8 bg-gray-100 text-gray-900 text-center"
    >
      <h3 className="text-4xl font-extrabold mb-10 tracking-wide">
        Contact Me
      </h3>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto space-y-6 bg-white p-8 rounded-lg shadow-lg transition duration-300"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-semibold mb-1 text-gray-700 text-left" // Increased font size and changed margin
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 text-gray-900 border-gray-300"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-semibold mb-1 text-gray-700 text-left" // Increased font size and changed margin
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 text-gray-900 border-gray-300"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-lg font-semibold mb-1 text-gray-700 text-left" // Increased font size and changed margin
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 text-gray-900 border-gray-300"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 font-semibold rounded-lg transition duration-300 bg-blue-600 text-white hover:bg-blue-700"
        >
          Send Message
        </button>
        {statusMessage && <p className="mt-4 text-center">{statusMessage}</p>}
      </form>
    </section>
  );
};

export default Contact;
