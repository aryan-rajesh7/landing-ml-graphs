"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-950/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-zinc-100 font-semibold tracking-tight text-sm hover:text-zinc-300 transition-colors"
        >
          Aryan Rajesh.
        </Link>
        <div className="hidden md:flex items-center gap-10 text-xs tracking-widest uppercase font-medium">
          <Link href="#about" className="link-editorial">
            About
          </Link>
          <Link href="#experience" className="link-editorial">
            Experience
          </Link>
          <Link href="#projects" className="link-editorial">
            Work
          </Link>
          <Link href="#education" className="link-editorial">
            Toolkit
          </Link>
        </div>
      </div>
    </nav>
  );
}
