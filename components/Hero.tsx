"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-20"
      style={{ scrollMarginTop: "80px" }}
    >
      {/* Left */}
      <div className="flex flex-col justify-center px-6 md:px-16 py-16 md:py-20 relative">
        {/* Decorative vertical line (desktop only) */}
        <div className="hidden md:block absolute left-14 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sage-light to-transparent" />

        <p className="text-[11px] tracking-[0.22em] uppercase text-sage-dark mb-6 font-sans">
          Structural Design Consultant
        </p>

        <h1
          className="font-serif font-light leading-[1.05] text-charcoal mb-4"
          style={{ fontSize: "clamp(42px, 8vw, 80px)" }}
        >
          Be the{" "}
          <em
            className="italic text-warm not-italic"
            style={{ fontStyle: "italic" }}
          >
            Foundation
          </em>
          <br />
          of Trust
        </h1>

        <p
          className="font-serif font-light italic text-[#6b6b68] mb-8 leading-relaxed"
          style={{ fontSize: "clamp(15px, 2.5vw, 22px)" }}
        >
          Safe. Precise. Reliable.
        </p>

        <p className="text-sm leading-[1.85] text-[#6b6b68] max-w-md mb-10 font-sans">
          CV. Swatu Engineering delivers engineering excellence to realize
          ambitious architectural visions — through cost-effective, safe, and
          environmentally sound structural solutions across Indonesia.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="#portfolio"
            className="bg-sage-dark text-white px-7 py-3 text-[11px] tracking-[0.16em] uppercase border border-sage-dark hover:bg-warm hover:border-warm transition-all duration-250 font-sans"
          >
            View Portfolio
          </a>

          <a
            href="#contact"
            className="text-charcoal px-7 py-3 text-[11px] tracking-[0.16em] uppercase border border-charcoal hover:bg-charcoal hover:text-white transition-all duration-250 font-sans"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="bg-cream relative overflow-hidden flex flex-col justify-end min-h-[420px] md:min-h-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-dark to-sage-light/30" />

        {/* Structural grid */}
        {/* <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#4a5e4c"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg> */}

        <Image
          src="/images/ruko_kebon_bawang_edit.png"
          alt="Ruko Kebon Bawang"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover opacity-50 blur-sm"
          priority
        />

        {/* Center label */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
          <div className="border border-sage-light/50 px-8 py-6 text-center backdrop-blur-sm bg-white/20">
            <p className="font-serif text-base md:text-lg italic text-[#6b6b68]">
              Structural Design Portfolio
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="relative z-10">
          <div className="grid grid-cols-2 gap-px bg-sage-light/30">
            {[
              { num: "30+", label: "Projects completed" },
              { num: "5+", label: "Years of experience on structural design" },
              { num: "10k+", label: "m² designed" },
              { num: "2022", label: "Established" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-[rgba(250,248,244,0.75)] backdrop-blur-sm px-5 py-6 md:px-6 md:py-7"
              >
                <div
                  className="font-serif font-light text-charcoal leading-none mb-2"
                  style={{ fontSize: "clamp(28px, 6vw, 48px)" }}
                >
                  {s.num}
                </div>

                <div className="text-[10px] tracking-[0.16em] uppercase text-[#6b6b68] font-sans">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
