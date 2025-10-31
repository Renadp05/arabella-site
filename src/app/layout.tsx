import "./styles/global.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Arabella Lounge",
  description: "Restaurant & Lounge in London",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
