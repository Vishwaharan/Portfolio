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
        "service_x6cbo5o",
        "template_hvmq0lc",
        formData,
        "OrlO5k_t7MvvmDYJ2"
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
      className="py-20 px-8 md:px-8 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-center transition-colors duration-300"
    >
      <div className="overflow-hidden">
        <h3 className="text-2xl md:text-4xl font-extrabold mb-8 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-transform duration-300">
          Contact Me
        </h3>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto space-y-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl transition duration-300 border border-gray-300 dark:border-gray-600"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-base md:text-lg font-semibold mb-1 text-gray-700 dark:text-gray-300 text-left"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 md:px-4 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-base md:text-lg font-semibold mb-1 text-gray-700 dark:text-gray-300 text-left"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-base md:text-lg font-semibold mb-1 text-gray-700 dark:text-gray-300 text-left"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 font-semibold rounded-lg mb-8 tracking-wide text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-transform duration-300"
        >
          Send Message
        </button>

        {statusMessage && <p className="mt-4 text-center">{statusMessage}</p>}
      </form>
    </section>
  );
};

export default Contact;
