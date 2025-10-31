"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Reservations() {
  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    name: "",
    date: today,
    time: "00:00",
    guests: "",
    phone: "+44 ",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hi! I want to make a reservation:\n\n👤 Name: ${form.name}\n📅 Data: ${form.date}\n🕒 Time: ${form.time}\n👥 Guests: ${form.guests}\n📞 Tel: ${form.phone}`;

    const whatsappURL = `https://wa.me/447377717155?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="reservations"
      className="relative min-h-screen w-full flex items-end justify-center text-white"
    >
      <img
        src="/Reservation.PNG"
        alt="Reservations background"
        className="absolute inset-9 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-xl bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl mb-10"
      >
        <h2 className="text-3xl font-bold text-neon-pink mb-8 text-center">
          Book a Table
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="bg-black/50 border border-white/20 p-3 rounded-md text-white"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              min={today}
              required
              className="bg-black/50 border border-white/20 p-3 rounded-md text-white"
            />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
              className="bg-black/50 border border-white/20 p-3 rounded-md text-white"
            />
          </div>

          <input
            type="number"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            min={1}
            placeholder="Number of guests"
            required
            className="bg-black/50 border border-white/20 p-3 rounded-md text-white"
          />

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+44 7123 456789"
            required
            className="bg-black/50 border border-white/20 p-3 rounded-md text-white"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-md px-6 py-3 font-bold text-white shadow-lg w-full"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-neon-teal via-purple-500 to-neon-pink animate-gradient-x"></span>
            <span className="absolute inset-0 bg-white/10 backdrop-blur-sm"></span>
            <span className="relative z-10">Book Table</span>
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
