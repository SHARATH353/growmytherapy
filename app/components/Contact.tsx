"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
    agree: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.match(/^[A-Za-z\s]+$/)) newErrors.name = "Name should contain only letters.";
    if (!formData.email.match(/@gmail\.com$|@email\.com$/)) newErrors.email = "Email should include @gmail.com or @email.com.";
    if (!formData.phone.match(/^[0-9]+$/)) newErrors.phone = "Phone should contain only numbers.";
    if (!formData.message) newErrors.message = "Message is required.";
    if (!formData.time) newErrors.time = "Preferred time is required.";
    if (!formData.agree) newErrors.agree = "You must agree to be contacted.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        time: "",
        agree: false,
      });
    }
  };

  return (
    <section className="py-16 px-4 md:px-12 bg-[#0f766e]" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left side info */}
        <div className="md:w-1/2 text-white">
          <h3 className="text-2xl font-bold mb-4 text-black">Our Office</h3>
          <p>1287 Maplewood Drive<br />Los Angeles, CA 90026</p>

          <h4 className="text-xl font-bold mt-6 text-black">Hours</h4>
          <p>In-person: Tue & Thu, 10 AM – 6 PM<br />Virtual via Zoom: Mon, Wed & Fri, 1 PM – 5 PM</p>

          <h4 className="text-xl font-bold mt-6 text-black">Contact</h4>
          <p>📞 (323) 555-0192<br />✉️ serena@blakepsychology.com</p>
        </div>

        {/* Right side form */}
        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2 text-center">Get In Touch</h2>
          <p className="mb-6 text-center text-gray-700">
            Simply fill out the brief fields below and Dr. Serena Blake will be in touch with you soon, usually within one business day. This form is safe, private, and completely free.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="What brings you here?"
                value={formData.message}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <div>
              <input
                type="text"
                name="time"
                placeholder="Preferred time to reach you"
                value={formData.time}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mr-2"
              />
              <label>I agree to be contacted</label>
            </div>
            {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
