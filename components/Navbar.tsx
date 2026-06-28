"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#080c16]/80 backdrop-blur-md border-b border-[#0f1629] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <Link
          href="/"
          className="text-slate-300 text-sm font-medium tracking-tight hover:text-white transition-colors"
        >
          AR
        </Link>
        <div className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.2em] uppercase font-medium">
          <Link href="#about" className="link-reveal">About</Link>
          <Link href="#work" className="link-reveal">Work</Link>
          <Link href="#experience" className="link-reveal">Experience</Link>
          <Link href="#contact" className="link-reveal">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
