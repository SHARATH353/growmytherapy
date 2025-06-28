"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are your fees?",
      answer: "My fees vary depending on the service and session length. Please contact me directly for a detailed rate sheet.",
    },
    {
      question: "Do you take insurance?",
      answer: "No, but I can provide a superbill for you to submit to your insurance provider.",
    },
    {
      question: "Do you provide online counseling?",
      answer: "Yes! I offer virtual sessions via Zoom to make therapy accessible and convenient.",
    },
    {
      question: "What are your office hours?",
      answer: "I offer sessions Monday through Friday, 9 AM to 6 PM. Some evening appointments are available upon request.",
    },
    {
      question: "What geographic areas do you serve?",
      answer: "I work with clients throughout California virtually, and in-person sessions are available in Los Angeles.",
    },
    {
      question: "What services do you offer?",
      answer: "I provide individual therapy, couples counseling, stress & anxiety management, trauma recovery, and more personalized care.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 md:px-12 bg-[#c7edf2] text-black" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-500 mb-4">
            <button
              className="w-full text-left py-4 text-lg font-semibold flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="pb-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
