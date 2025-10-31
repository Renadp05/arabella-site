"use client";
import { FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true); // thjesht për test
  };

  return (
    <section id="contact" className="bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-neon-teal mb-6 drop-shadow-neonTeal">
          Contact Us
        </h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          📍{" "}
          <a
            href="https://www.google.com/maps/search/?api=1&query=241+Barking+Rd,+London+E6+1LB,+United+Kingdom"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neon-pink underline transition"
          >
            241 Barking Rd, London E6 1LB, United Kingdom
          </a>
          <br />
          📞 +447377717155
          <br />
          📧 contact@arabellarestaurant.com
          <br />
          📸{" "}
          <a
            href="https://www.instagram.com/arabella_restaurant_lounge/?igsh=djZ6N3hscGFlbTZy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neon-pink underline transition"
          >
            @arabella_restaurant_lounge
          </a>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {/* Google Maps */}
          <iframe
            className="w-full h-64 rounded-md shadow-md"
            src="https://maps.google.com/maps?q=241%20Barking%20Rd,%20London%20E6%201LB&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          ></iframe>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 p-6 rounded-xl shadow-xl grid gap-4 text-left"
          >
            <input
              placeholder="Your email"
              className="bg-black/50 border border-white/20 p-3 rounded-md text-white"
              required
            />
            <textarea
              placeholder="Your message"
              rows={4}
              className="bg-black/50 border border-white/20 p-3 rounded-md text-white"
              required
            />
            <button
              type="submit"
              className="relative overflow-hidden rounded-md px-6 py-3 font-bold text-white shadow-lg w-full"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-neon-teal via-purple-500 to-neon-pink animate-gradient-x"></span>
              <span className="absolute inset-0 bg-white/10 backdrop-blur-sm"></span>
              <span className="relative z-10">
                {sent ? "Message Sent!" : "Send Message"}
              </span>
            </button>
          </form>
        </div>

        {/* Buttons for social + maps */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://www.instagram.com/arabella_restaurant_lounge/?igsh=djZ6N3hscGFlbTZy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-white rounded-full hover:bg-white/10 transition"
          >
            <FaInstagram className="text-pink-500" />
            <span>Follow us on Instagram</span>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=241+Barking+Rd,+London+E6+1LB,+United+Kingdom"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-white rounded-full hover:bg-white/10 transition"
          >
            <FaMapMarkerAlt className="text-green-400" />
            <span>Get Directions</span>
          </a>
        </div>
      </div>
    </section>
  );
}
