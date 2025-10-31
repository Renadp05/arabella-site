"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/IMG_5929.jpeg",
  "/IMG_5930.jpeg",
  "/IMG_5931.jpeg",
  "/IMG_5932.jpeg",
  "/IMG_5933.jpeg",
  "/IMG_5934.jpeg",
  "/IMG_5935.jpeg",
  "/IMG_5936.jpeg",
];

export default function ImageGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-extrabold text-center text-neon-pink drop-shadow-neonPink mb-10">
        Discover Our Signature Plates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg border border-white/10"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <Image
              src={src}
              alt={`Arabella dish ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="hover:brightness-110 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
