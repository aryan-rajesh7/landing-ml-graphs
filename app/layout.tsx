import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "Aryan Rajesh | Software & AI Engineering",
  description: "Advanced machine learning architectures, real-time optimization pipelines, and local AI suites by Aryan Rajesh.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-zinc-50 antialiased selection:bg-zinc-800 selection:text-white relative`}>
        <div className="bg-noise" aria-hidden="true" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}