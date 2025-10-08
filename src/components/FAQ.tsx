"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is EliteRide?",
      answer:
        "EliteRide is a premium transport service offering luxury, safety, and professionalism for airport, interstate, and executive travels.",
    },
    {
      question: "How do I book a ride?",
      answer:
        "You can book directly from our website or mobile app by choosing your preferred car, package, and travel route.",
    },
    {
      question: "Are your drivers professionally trained?",
      answer:
        "Yes, our drivers include certified police chauffeurs and trained professionals to ensure safety and discretion.",
    },
    {
      question: "Do you offer corporate or government contracts?",
      answer:
        "Yes, we provide corporate and government travel solutions, including tailored security and escort services.",
    },
  ];

  return (
    <section className="py-4 px-2 md:px-4 bg-white">
      <h2 className="text-3xl font-bold text-center text-red-800 mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm overflow-hidden"
          >
            <button
              className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 transition"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-800">
                  {faq.question}
                </span>
                <span className="text-red-800 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
            </button>

            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 py-4 text-gray-600 bg-white"
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
