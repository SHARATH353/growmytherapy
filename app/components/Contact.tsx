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
  const target = e.target as HTMLInputElement; // 👈 fix here

  const { name, value, type, checked } = target;
  setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";
    if (!formData.time) newErrors.time = "Preferred time is required";
    if (!formData.agree) newErrors.agree = "You must agree to be contacted";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
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
    <section className="py-16 px-4 md:px-12 bg-teal-50" id="contact">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
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
    </section>
  );
}
