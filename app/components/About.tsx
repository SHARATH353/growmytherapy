import Image from "next/image";

export default function About() {
  return (
    <section
      className="py-16 px-4 md:px-12"
      style={{ backgroundColor: "#e0f7fa" }} // light blue background for About
      id="about"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center text-black">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/dr-serena-blake.png" // update to your local filename
            alt="Dr. Serena Blake"
            width={400}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold mb-4">About Dr. Serena Blake</h2>
          <p className="mb-4">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles,
            with eight years of experience and over 500 client sessions. She blends
            evidence-based approaches—like cognitive-behavioral therapy and mindfulness—
            with compassionate, personalized care to help you overcome anxiety,
            strengthen relationships, and heal from trauma.
          </p>
          <p className="mb-4">
            Whether you meet in her Maplewood Drive office or connect virtually via Zoom,
            Dr. Blake is committed to creating a safe, supportive space for you to thrive.
          </p>
          <p><strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026</p>
          <p><strong>Phone:</strong> (323) 555-0192</p>
          <p><strong>Email:</strong> serena@blakepsychology.com</p>
          <p><strong>Office Hours:</strong> In-person: Tue & Thu, 10 AM–6 PM; Virtual: Mon, Wed & Fri, 1 PM–5 PM</p>
        </div>
      </div>
    </section>
  );
}
