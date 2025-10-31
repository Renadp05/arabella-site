import {
  mainMenu,
  breakfastMenu,
  romanianSpecial,
  MenuSection as MenuSectionType,
} from "@/data/menu";
import MenuSection from "@/components/MenuSection";
import React from "react";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-black text-white pb-20">
      {/* Mobile Header */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-md shadow-md py-4 px-6 md:hidden border-b border-white/10">
        <h1 className="text-2xl font-bold text-center text-neon-teal tracking-wide">
          Arabella Menu
        </h1>
      </div>

      {/* ========== ALL DAY MENU ========== */}
      <section id="all-day" className="pt-24 scroll-mt-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto pb-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-neon-teal drop-shadow-neonTeal">
            All Day Menu
          </h2>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            V = Vegetarian • GF = Gluten Free
          </p>
        </div>

        {mainMenu.map((section, index) => (
          <div key={`main-${index}`} className="mb-12">
            <MenuSection section={section as MenuSectionType} />
          </div>
        ))}
      </section>

      {/* ========== BREAKFAST MENU ========== */}
      <section id="breakfast" className="pt-20 scroll-mt-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto pb-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-neon-teal drop-shadow-neonTeal">
            Breakfast Menu
          </h2>
        </div>

        {breakfastMenu.map((section, index) => (
          <div key={`breakfast-${index}`} className="mb-12">
            <MenuSection section={section as MenuSectionType} />
          </div>
        ))}
      </section>

      {/* ========== ROMANIAN SPECIALS ========== */}
      <section id="romanian" className="pt-20 scroll-mt-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto pb-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-neon-teal drop-shadow-neonTeal">
            Romanian Specials
          </h2>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Discover the flavors of Romania.
          </p>
        </div>

        {romanianSpecial.map((section, index) => (
          <div key={`romanian-${index}`} className="mb-12">
            <MenuSection section={section as MenuSectionType} />
          </div>
        ))}
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-black/80 text-center text-gray-400 py-8 mt-20 border-t border-white/10 text-sm px-4">
        © 2024 Arabella Restaurant & Lounge. All rights reserved.
      </footer>
    </main>
  );
}
