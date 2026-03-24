"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((s) => {
        const el = s as HTMLElement;
        if (window.scrollY >= el.offsetTop - 120) {
          current = el.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf8f4]/95 backdrop-blur-md border-b border-sage-light/30 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-5">
        {/* Logo */}
        <a
          href="#home"
          className="font-serif text-xl font-semibold tracking-widest text-charcoal"
        >
          CV. SWATU<span className="text-sage-dark"> ENGINEERING</span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-9 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-[11px] tracking-[0.14em] uppercase transition-colors duration-200 ${
                  active === link.href.slice(1)
                    ? "text-sage-dark font-medium"
                    : "text-[#6b6b68] hover:text-sage-dark"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-[1.5px] bg-charcoal"></span>
          <span className="w-6 h-[1.5px] bg-charcoal"></span>
          <span className="w-6 h-[1.5px] bg-charcoal"></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#faf8f4] border-b border-sage-light/30 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-6 gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-[12px] tracking-[0.16em] uppercase transition-colors duration-200 ${
                  active === link.href.slice(1)
                    ? "text-sage-dark font-medium"
                    : "text-[#6b6b68] hover:text-sage-dark"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
