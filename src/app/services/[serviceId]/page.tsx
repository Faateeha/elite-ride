"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const serviceDetails = {
  "airport-transportation": {
    title: "Airport Transportation",
    desc: "Our airport transportation service ensures you travel in style and comfort. From prompt pickups to smooth drop-offs, we redefine convenience with trained chauffeurs, refreshments, and Wi-Fi-equipped vehicles.",
    features: [
      "Executive vehicles with Wi-Fi",
      "Professional chauffeurs",
      "Real-time flight tracking",
      "24/7 availability",
    ],
    img: "/images/airport.jpeg",
  },
  "concierge-services": {
    title: "Concierge Services",
    desc: "Experience the luxury of convenience. From booking reservations to personal assistance, our concierge team ensures your every need is met efficiently and elegantly.",
    features: [
      "Personalized assistance",
      "Travel coordination",
      "Errand management",
      "Priority access services",
    ],
    img: "/images/concierge.jpeg",
  },
  "security-services": {
    title: "Security Services",
    desc: "Safety meets sophistication. Our certified security drivers and armed escorts provide discreet and dependable protection, ensuring peace of mind throughout your journey.",
    features: [
      "Armed escorts (optional)",
      "Trained security drivers",
      "Confidential and discreet",
      "24/7 surveillance and support",
    ],
    img: "/images/3.jpeg",
  },
  "intra-state-travel": {
    title: "Intra-State Travel",
    desc: "Move freely within your city in absolute comfort. Perfect for executives, personal appointments, and events that require punctuality and style.",
    features: [
      "Luxury vehicles",
      "Flexible schedules",
      "Wi-Fi and refreshments",
      "Professional drivers",
    ],
    img: "/images/3.jpeg",
  },
  "inter-state-travel": {
    title: "Inter-State Travel",
    desc: "Travel between states with our long-distance luxury rides, equipped with comfort, privacy, and security features for executives and families alike.",
    features: [
      "Air-conditioned luxury cars",
      "Security escorts (optional)",
      "Refreshments and entertainment",
      "Safe and reliable drivers",
    ],
    img: "/images/3.jpeg",
  },
};

export default function ServiceDetails({ params }: { params: { serviceId: string } }) {
  const service = serviceDetails[params.serviceId as keyof typeof serviceDetails];

  if (!service) {
    notFound();
  }

  return (
    <section className="py-[10rem] px-6 md:px-16 bg-white text-gray-800">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div
          data-aos="fade-right"
          className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-md"
        >
          <Image src={service.img} alt={service.title} fill className="object-cover" />
        </div>

        {/* Content */}
        <div data-aos="fade-left">
          <h1 className="text-4xl font-bold text-red-800 mb-4">{service.title}</h1>
          <p className="text-gray-600 mb-6">{service.desc}</p>

          <ul className="space-y-3 mb-8">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-red-800 font-bold">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Book Now Button */}
          <Link
            href={`/services/${params.serviceId}/book`}
            className="bg-red-800 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-red-700 transition inline-block"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
