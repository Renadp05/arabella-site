"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Reservations", href: "/reservations" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black/80 text-white fixed top-0 w-full z-50 backdrop-blur-md shadow-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + Emri Arabella */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-[120px] h-[60px] group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo.png"
              alt="Arabella Logo"
              fill
              className="object-contain rounded-md drop-shadow-xl"
              priority
            />
          </div>
          <span className="text-xl md:text-2xl font-extrabold tracking-wider text-white group-hover:text-neon-teal transition-colors">
            Arabella
          </span>
        </Link>

        {/* Nav Links Desktop */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-neon-pink transition duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dropdown Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 px-4 pb-6 space-y-4 text-center">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-lg text-white hover:text-neon-pink transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
