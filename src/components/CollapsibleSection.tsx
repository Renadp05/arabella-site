"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // icon

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function CollapsibleSection({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center bg-black/50 backdrop-blur-md px-6 py-4 text-left text-lg font-semibold text-neon-teal hover:bg-white/5 transition"
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden px-6 py-4 bg-black/20`}
      >
        {children}
      </div>
    </div>
  );
}
