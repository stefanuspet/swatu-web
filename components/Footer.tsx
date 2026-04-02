"use client";

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1c] px-6 md:px-12 lg:px-16 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left">
        {/* Company */}
        <div className="font-serif text-sm md:text-base tracking-widest text-white/40">
          CV. SWATU ENGINEERING
        </div>

        {/* Copyright */}
        <div className="text-xs text-white/20 tracking-wide font-sans">
          © 2026 CV. Swatu Engineering. All rights reserved.
        </div>

        {/* Credit */}
        <div className="text-xs text-white/25 font-sans tracking-wide">
          Website by{" "}
          <a
            href="https://stefra.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sage-light/60 hover:text-sage-light transition-colors duration-200"
          >
            Stefra.id
          </a>
        </div>
      </div>
    </footer>
  );
}
