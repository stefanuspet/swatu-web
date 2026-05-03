export default function About() {
  const visions = [
    "Be the foundation of trust in the construction industry by delivering safe, precise, and reliable structural solutions to build a resilient future.",
    "Deliver engineering excellence to realize ambitious architectural visions through cost-effective, safe, and environmentally sound structural solutions.",
    "Build a more resilient and safer world through structural engineering excellence.",
  ];

  const locations = [
    "Yogyakarta",
    "Jakarta",
    "Tangerang",
    "Bali",
    "Semarang",
    "Bogor",
  ];

  return (
    <section
      id="about"
      className="bg-cream py-20 md:py-24"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center max-w-5xl mx-auto px-6 md:px-12">
        {/* Text */}
        <div>
          <p className="text-[11px] tracking-[0.22em] uppercase text-sage-dark mb-4 font-sans">
            Who we are
          </p>

          <h2
            className="font-serif font-light text-charcoal leading-tight mb-6"
            style={{ fontSize: "clamp(30px, 3.5vw, 48px)" }}
          >
            Precision in <em className="italic text-warm">Every</em>
            <br />
            Detail
          </h2>

          <div className="w-14 h-px bg-warm-light mb-8" />

          <blockquote className="font-serif text-base md:text-lg font-light italic text-charcoal border-l-2 border-warm-light pl-6 mb-8 leading-relaxed">
            "Be the foundation of trust in the construction industry."
          </blockquote>

          <div className="space-y-4 mb-8">
            {visions.slice(1).map((v, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-light mt-2 flex-shrink-0" />
                <p className="text-sm leading-[1.85] text-[#6b6b68] font-sans">
                  {v}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {locations.map((loc) => (
              <span
                key={loc}
                className="text-[10px] md:text-[11px] tracking-[0.12em] uppercase text-sage-dark border border-sage-light px-3 md:px-4 py-1.5 font-sans"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div>
          <div className="grid grid-cols-2 gap-0.5">
            {[
              { label: "Structural Engineering", accent: false },
              { label: "30+ Projects", accent: true },
              { label: "5+ Years of Experience", accent: true },
              { label: "PBG Documentation", accent: false },
            ].map(({ label, accent }) => (
              <div
                key={label}
                className={`aspect-square flex items-center justify-center p-4 md:p-6 ${
                  accent ? "bg-sage-dark" : "bg-cream-dark"
                }`}
              >
                <span
                  className={`font-serif text-center text-sm md:text-base leading-snug ${
                    accent ? "text-white/80" : "text-[#6b6b68]"
                  }`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Address */}
          <div className="mt-0.5 bg-[#f0ece4] px-5 md:px-6 py-4 md:py-5 flex gap-6 flex-wrap">
            <div className="flex-1 min-w-[160px]">
              <p className="text-[10px] tracking-[0.18em] uppercase text-sage-dark mb-2 font-sans">
                Yogyakarta Office
              </p>
              <p className="text-sm leading-relaxed text-[#6b6b68] font-sans">
                Bleber Kidul RT 06 RW 17,
                <br />
                Sumberharjo, Prambanan, Sleman,
                <br />
                Daerah Istimewa Yogyakarta 55572
              </p>
            </div>
            <div className="w-px bg-[#d9d4cb] self-stretch" />
            <div className="flex-1 min-w-[160px]">
              <p className="text-[10px] tracking-[0.18em] uppercase text-sage-dark mb-2 font-sans">
                Bali Office
              </p>
              <p className="text-sm leading-relaxed text-[#6b6b68] font-sans">
                Jl. Raya Sukawati No.75,
                <br />
                Sukawati, Kec. Sukawati,
                <br />
                Kabupaten Gianyar, Bali 80582
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
