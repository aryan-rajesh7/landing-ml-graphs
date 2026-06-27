"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <Link href="/" className="nav-brand">Aryan Rajesh</Link>
      <div className="nav-links">
        <Link href="/experience" className={`nav-link ${pathname === "/experience" ? "active" : ""}`}>Experience</Link>
        <Link href="/projects" className={`nav-link ${pathname === "/projects" ? "active" : ""}`}>Projects</Link>
        <Link href="/education" className={`nav-link ${pathname === "/education" ? "active" : ""}`}>Education & Certs</Link>
        <Link href="/skills" className={`nav-link ${pathname === "/skills" ? "active" : ""}`}>Skills</Link>
      </div>
    </nav>
  );
}
