"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message sent:", form);
    setForm({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    <section className="py-30 px-6 md:px-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Info */}
        <div data-aos="fade-right">
          <h2 className="text-4xl font-bold text-red-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            We’d love to hear from you. Whether you’re looking to book a luxury ride,
            partner with us, or simply have a question — reach out and our team will
            get back to you promptly.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-800 text-xl" />
              <p>support@eliteride.com</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-red-800 text-xl" />
              <p>+234 800 123 4567</p>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-800 text-xl" />
              <p>Lagos, Nigeria</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex gap-5 mt-6">
            <a href="#" className="text-red-800 hover:text-gray-600 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-red-800 hover:text-gray-600 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-red-800 hover:text-gray-600 text-2xl">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Right Section - Form */}
        <form
          onSubmit={handleSubmit}
          data-aos="fade-left"
          className="bg-gray-50 shadow-md rounded-2xl p-8"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-800"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-800"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
              rows={5}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-800"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-800 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
