"use client";
import React from "react";
import { MenuSection as SectionType } from "@/data/menu";

type Props = {
  sections: SectionType[];
};

export default function MenuDisplay({ sections }: Props) {
  return (
    <div className="px-6 md:px-16 py-12 bg-black text-white">
      {sections.map((section, idx) => (
        <div key={idx} className="mb-12">
          <h2 className="text-3xl font-bold text-purple-400 drop-shadow mb-2">
            {section.title}
          </h2>

          {section.note && (
            <p className="text-sm text-gray-400 italic mb-4">{section.note}</p>
          )}

          <div className="space-y-4">
            {section.items.map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row justify-between border-b border-white/10 pb-2"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                  {item.description && (
                    <p className="text-sm text-gray-400">{item.description}</p>
                  )}
                </div>
                {item.price && (
                  <div className="text-purple-300 font-semibold mt-2 md:mt-0 md:ml-4">
                    £{item.price}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
