"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FAQ from "@/components/FAQ"

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <Image
          src="/images/about1.jpeg" // 🔁 Replace with your actual image path
          alt="Elite Ride Luxury Travel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-6xl font-bold text-white text-center"
          >
            About EliteRide
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-6 md:px-16 text-center md:text-left">
        <div data-aos="fade-up" className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-red-800 mb-6">Who We Are</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Elite Ride redefines airport and interstate travel by combining
            <span className="font-semibold text-red-800">
              {" "}luxury, security, and comfort
            </span>.
            We cater to executives, government officials, tourists, and
            individuals seeking safe, private, and premium transportation.
            Our fleet of luxury vehicles, professional drivers, and certified
            security escorts ensure every trip delivers peace of mind and a
            touch of class.
          </p>
        </div>
      </section>

      {/* Vision, Mission, Core Values */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          {/* Vision */}
          <div
            data-aos="fade-up"
            className="p-6 border-t-4 border-red-800 shadow-md rounded-lg bg-white"
          >
            <h3 className="text-2xl font-semibold text-red-800 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become Africa’s most trusted provider of premium, secure, and
              comfortable executive travel experiences.
            </p>
          </div>

          {/* Mission */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="p-6 border-t-4 border-red-800 shadow-md rounded-lg bg-white"
          >
            <h3 className="text-2xl font-semibold text-red-800 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver exceptional, safe, and luxurious transportation through
              innovation, professionalism, and attention to client needs.
            </p>
          </div>

          {/* Core Values */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="p-6 border-t-4 border-red-800 shadow-md rounded-lg bg-white"
          >
            <h3 className="text-2xl font-semibold text-red-800 mb-4">Our Core Values</h3>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>🚘 Excellence in service</li>
              <li>🛡️ Safety and security</li>
              <li>🤝 Professionalism and discretion</li>
              <li>💎 Customer satisfaction</li>
              <li>🌍 Innovation and sustainability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Extra Image Section */}
      <section className="py-16 px-6 md:px-16 text-center">
        <FAQ />
      </section>
    </div>
  );
}
