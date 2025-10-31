"use client";
export default function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/IMG_5947.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-neon-teal">Arabella</span>
        </h1>
        <p className="text-lg md:text-xl">
          Mediterranean Cuisine | Signature Cocktails | Vibrant Atmosphere
        </p>
        <a
          href="#menu"
          className="mt-6 inline-block bg-neon-teal hover:bg-neon-pink text-black font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          Discover Our Signature Plates
        </a>
      </div>
    </div>
  );
}
