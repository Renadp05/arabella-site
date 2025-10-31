
import HeroSection from "@/components/HeroSection";
import ImageSwiper from "@/components/ImageSwiper";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white min-h-screen">
        <HeroSection />
        <section className="py-12 px-6 md:px-20">
          <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">
            Discover Our Signature Plates
          </h2>
          <ImageSwiper />
        </section>
      </main>
    </>
  );
}
