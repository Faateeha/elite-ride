"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        {/* Background Image */}
        <Image
          src="/images/1.jpeg" // ✅ Replace with your own image inside /Images/
          alt="Luxury car hero"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Text */}
        <div className="relative z-10 px-6">
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            data-aos="fade-up"
          >
            Elite Ride 
            <p className="text-2xl md:text-4xl">Luxury Security & Comfort</p>
          </h1>
          <p
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Elite Ride delivers premium airport and interstate travel with
            security, privacy, and executive-class comfort.
          </p>
          <div data-aos="fade-up" data-aos-delay="400">
            <button className="bg-red-800 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition">
              Book a Ride
            </button>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-20 bg-red-800 text-white text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-6"
          data-aos="fade-up"
        >
          Travel with Confidence and Class
        </h2>
        <p
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Book your next airport or interstate trip with Elite Ride and
          experience the perfect blend of safety, luxury, and comfort.
        </p>
        <button
          className="bg-white text-red-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Get Started
        </button>
      </section>
    </main>
  );
}
