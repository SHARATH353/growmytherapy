import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description:
        "Learn to manage overwhelming thoughts and find calm. Dr. Blake uses proven techniques to help you build resilience, improve focus, and feel more grounded in daily life.",
      image: "/anxiety.jpg", // update if needed
    },
    {
      title: "Relationship Counseling",
      description:
        "Strengthen communication and deepen your connections. Whether you're navigating conflicts or seeking more intimacy, Dr. Blake supports you in building healthier, more fulfilling relationships.",
      image: "/relationship.png", // update if needed
    },
    {
      title: "Trauma Recovery",
      description:
        "Heal from past wounds in a compassionate environment. Dr. Blake guides you to process difficult experiences and move forward with strength and self-compassion.",
      image: "/trauma.png", // update if needed
    },
  ];

  return (
    <section className="py-16 px-4 md:px-12 bg-[#aad8e6]" id="services">
      <h2 className="text-3xl font-bold text-center mb-10 text-black">Services</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-6 text-black">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
