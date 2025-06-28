"use client";

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-md text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Guiding You to Calm and Clarity</h1>
        <h2 className="text-xl md:text-2xl mb-6">Therapy to support your healing and growth with Dr. Serena Blake</h2>
        <a
          href="#contact"
          className="bg-teal-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-teal-600 transition"
        >
          Book a Free Consult
        </a>
      </div>
    </section>
  );
}