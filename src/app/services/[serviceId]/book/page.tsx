"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

export default function BookServicePage() {
  const { serviceId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    pickup: "",
    destination: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking details:", formData);
    alert("Your booking request has been submitted!");
  };

  return (
    <section className="py-[8rem] px-6 md:px-20 bg-white min-h-screen text-gray-800">
      <div
        data-aos="fade-up"
        className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-3xl font-bold text-red-800 mb-6 capitalize">
          Book {serviceId?.toString().replace(/-/g, " ")}
        </h1>
        <p className="text-gray-600 mb-8">
          Please fill out the form below to schedule your service. Our team will
          confirm your booking shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-800 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-800 outline-none"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-800 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-800 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Pickup Location</label>
            <input
              type="text"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-800 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Destination</label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-800 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Additional Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Add any special requests..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 focus:ring-2 focus:ring-red-800 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-800 hover:bg-red-700 text-white py-3 rounded-lg text-lg font-medium transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
}
