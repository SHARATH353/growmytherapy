"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: "What are your fees?", answer: "My fees vary depending on the service. Individual sessions are $200, and couples sessions are $240." },
    { question: "Do you accept insurance?", answer: "No, but a superbill is provided for self-submission to your insurance provider." },
    { question: "Do you provide online counseling?", answer: "Yes! I offer secure virtual sessions via Zoom for your convenience." },
    { question: "What are your office hours?", answer: "In-person: Tue & Thu, 10 AM–6 PM. Virtual: Mon, Wed & Fri, 1 PM–5 PM." },
    { question: "What geographic areas do you serve?", answer: "I work with clients throughout California virtually and offer in-person sessions in Los Angeles." },
    { question: "What services do you offer?", answer: "I provide individual therapy, couples counseling, anxiety & stress management, and trauma recovery." },
    { question: "How long are sessions?", answer: "Most sessions are 50 minutes, but extended sessions can be arranged as needed." },
    { question: "What is your cancellation policy?", answer: "24-hour notice is required to cancel or reschedule a session to avoid fees." },
    { question: "Can I have a free consultation?", answer: "Yes, I offer a brief initial consultation to discuss your needs and answer questions." },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-16 px-4 md:px-12"
      style={{ backgroundColor: "#c7edf2" }}
      id="faq"
    >
      <div className="max-w-4xl mx-auto text-black">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-500 mb-4">
            <button
              className="w-full text-left py-4 text-lg font-semibold focus:outline-none flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="pb-4 text-gray-800">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
