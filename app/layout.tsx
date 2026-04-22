import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import TreeIntro from "@/components/TreeIntro";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Areguá Forest — Naturaleza. Exclusividad. Comunidad.",
  description:
    "39 hectáreas de vida exclusiva en el corazón de Areguá. 560 lotes rodeados de naturaleza exuberante, amenities de primer nivel y una comunidad vibrante.",
  keywords: ["Areguá Forest", "lotes Areguá", "real estate Paraguay", "barrio privado Areguá"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-stone overflow-x-hidden">
        <TreeIntro />
        {children}
      </body>
    </html>
  );
}
