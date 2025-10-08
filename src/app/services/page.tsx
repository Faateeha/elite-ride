"use client";

import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: "airport-transportation",
      title: "Airport Transportation",
      desc: "Experience seamless and luxurious airport transfers. Our professional chauffeurs ensure timely pickups, comfortable rides, and smooth drop-offs.",
      img: "/images/airport.jpeg",
    },
    {
      id: "concierge-services",
      title: "Concierge Services",
      desc: "Enjoy exclusive concierge services — from handling bookings and errands to providing personal assistance for your travel convenience.",
      img: "/images/concierge.jpeg",
    },
    {
      id: "security-services",
      title: "Security Services",
      desc: "Your safety is our priority. We offer armed escorts and trained security drivers, ensuring peace of mind throughout your journey.",
      img: "/images/security.jpeg",
    },
    {
      id: "intra-inter-state-travel",
      title: "Intra & Inter State Travel",
      desc: "Travel in comfort and luxury within your city. Ideal for meetings, events, or personal errands where class and convenience matter.",
      img: "/images/state.jpeg",
    },
    
  ];

  return (
    <section className="py-[8rem] px-6 md:px-16 bg-white text-gray-800">
      <div data-aos="fade-down" className="text-center mb-12">
        <h2 className="text-4xl font-bold text-red-800 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At EliteRide, we redefine travel with luxury, security, and professionalism.
          Explore our range of premium services tailored to your lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <Link key={index} href={`/services/${service.id}`} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 cursor-pointer">
              <div className="relative h-52 w-full">
                <Image src={service.img} alt={service.title} fill className="object-cover" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-red-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
