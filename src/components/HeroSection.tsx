"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full">
      {/* Foto kryesore */}
      <Image
        src="/homescreen_5961.jpg" // vendos këtu foton tënde
        alt="Arabella Restaurant"
         width={1920}
  height={1080}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay që errëson pak foton */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Teksti sipër */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
          Welcome to <span className="text-neon-teal">Arabella</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200 drop-shadow">
          Mediterranean Cuisine | Signature Cocktails | Vibrant Atmosphere
        </p>
      </div>
    </section>
  );
}
