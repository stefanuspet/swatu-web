// export default function Services() {
//   const services = [
//     {
//       num: "01",
//       name: "Structural Engineering",
//       desc: "Our structural engineering team collaborates closely with clients on structural safety, load calculations, foundation strength, and engineering systems.",
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
//           <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5"/>
//           <line x1="12" y1="22" x2="12" y2="15.5"/>
//           <polyline points="22,8.5 12,15.5 2,8.5"/>
//         </svg>
//       ),
//     },
//     {
//       num: "02",
//       name: "PBG Document Preparation",
//       desc: "We provide complete documentation required for Persetujuan Bangunan Gedung (PBG), ensuring your project meets all regulatory requirements.",
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
//           <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
//           <polyline points="14,2 14,8 20,8"/>
//           <line x1="16" y1="13" x2="8" y2="13"/>
//           <line x1="16" y1="17" x2="8" y2="17"/>
//           <polyline points="10,9 9,9 8,9"/>
//         </svg>
//       ),
//       docs: [
//         "Structural drawings",
//         "Structural calculation reports",
//         "Technical specifications",
//         "SKK",
//       ],
//     },
//     {
//       num: "03",
//       name: "Engineering Consultation",
//       desc: "Build a more resilient and safer world through structural engineering excellence — from initial concept review to final sign-off.",
//       icon: (
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
//           <circle cx="12" cy="12" r="10"/>
//           <line x1="12" y1="8" x2="12" y2="12"/>
//           <line x1="12" y1="16" x2="12.01" y2="16"/>
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <section id="services" className="bg-charcoal py-24" style={{ scrollMarginTop: "80px" }}>
//       <div className="text-center mb-16">
//         <p className="text-[11px] tracking-[0.22em] uppercase text-sage-light mb-4 font-sans">
//           What we do
//         </p>
//         <h2 className="font-serif font-light text-white leading-tight"
//           style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
//           Our <em className="italic" style={{ color: "#c9a882" }}>Services</em>
//         </h2>
//         <div className="w-14 h-px bg-warm-light mx-auto mt-6" />
//       </div>

//       <div className="grid grid-cols-3 gap-px bg-white/8 max-w-5xl mx-auto px-12">
//         {services.map((s) => (
//           <div
//             key={s.num}
//             className="bg-charcoal px-9 py-12 relative overflow-hidden group cursor-default
//                        hover:bg-[#3a3a38] transition-colors duration-300
//                        before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5
//                        before:bg-warm-light before:scale-x-0 before:origin-left
//                        before:transition-transform before:duration-400 hover:before:scale-x-100"
//           >
//             <div className="font-serif text-6xl font-light text-white/5 leading-none mb-6 select-none">
//               {s.num}
//             </div>
//             <div className="w-10 h-10 border border-warm-light flex items-center justify-center mb-5 text-warm-light">
//               {s.icon}
//             </div>
//             <h3 className="font-serif text-2xl font-light text-white mb-3">{s.name}</h3>
//             <p className="text-sm leading-[1.8] text-white/50 font-sans">{s.desc}</p>

//             {s.docs && (
//               <ul className="mt-5 space-y-1.5">
//                 {s.docs.map((doc) => (
//                   <li key={doc} className="flex items-center gap-2 text-xs text-white/40 font-sans">
//                     <span className="w-1 h-1 rounded-full bg-warm-light/60 flex-shrink-0" />
//                     {doc}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

export default function Services() {
  const services = [
    {
      num: "01",
      name: "Structural Engineering",
      desc: "Our structural engineering team collaborates closely with clients on structural safety, load calculations, foundation strength, and engineering systems.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
          <line x1="12" y1="22" x2="12" y2="15.5" />
          <polyline points="22,8.5 12,15.5 2,8.5" />
        </svg>
      ),
    },
    {
      num: "02",
      name: "PBG Document Preparation",
      desc: "We provide complete documentation required for Persetujuan Bangunan Gedung (PBG), ensuring your project meets all regulatory requirements.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14,2 14,8 20,8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10,9 9,9 8,9" />
        </svg>
      ),
      docs: [
        "Structural drawings",
        "Structural calculation reports",
        "Technical specifications",
        "SKK",
      ],
    },
    {
      num: "03",
      name: "Engineering Consultation",
      desc: "Build a more resilient and safer world through structural engineering excellence — from initial concept review to final sign-off.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="services"
      className="bg-charcoal py-20 md:py-24"
      style={{ scrollMarginTop: "80px" }}
    >
      {/* Header */}
      <div className="text-center mb-14 md:mb-16 px-6">
        <p className="text-[11px] tracking-[0.22em] uppercase text-sage-light mb-4 font-sans">
          What we do
        </p>

        <h2
          className="font-serif font-light text-white leading-tight"
          style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
        >
          Our <em className="italic text-warm">Services</em>
        </h2>

        <div className="w-14 h-px bg-warm-light mx-auto mt-6" />
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 max-w-5xl mx-auto px-6 md:px-12">
        {services.map((s) => (
          <div
            key={s.num}
            className="bg-charcoal px-7 md:px-9 py-10 md:py-12 relative overflow-hidden group cursor-default
                       hover:bg-[#3a3a38] transition-colors duration-300
                       before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5
                       before:bg-warm-light before:scale-x-0 before:origin-left
                       before:transition-transform before:duration-300 hover:before:scale-x-100"
          >
            {/* Big number */}
            <div className="font-serif text-[56px] md:text-6xl font-light text-white/5 leading-none mb-6 select-none">
              {s.num}
            </div>

            {/* Icon */}
            <div className="w-10 h-10 border border-warm-light flex items-center justify-center mb-5 text-warm-light">
              {s.icon}
            </div>

            {/* Title */}
            <h3 className="font-serif text-xl md:text-2xl font-light text-white mb-3">
              {s.name}
            </h3>

            {/* Description */}
            <p className="text-sm leading-[1.8] text-white/50 font-sans">
              {s.desc}
            </p>

            {/* Docs */}
            {s.docs && (
              <ul className="mt-5 space-y-1.5">
                {s.docs.map((doc) => (
                  <li
                    key={doc}
                    className="flex items-center gap-2 text-xs text-white/40 font-sans"
                  >
                    <span className="w-1 h-1 rounded-full bg-warm-light/60 flex-shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
