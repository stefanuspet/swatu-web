// "use client";

// import { useEffect, useRef } from "react";

// const MERMAID_CHART = `
// graph TD
//   A[Director] --- B[Engineer]
//   A --- C[Finance]
//   A --- D[Estimator]
//   A --- E[Project Manager]
//   B --- F[Drafter]
//   E --- G[Supervisor]
// `;

// export default function Team() {
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     let cancelled = false;

//     async function render() {
//       if (!ref.current) return;
//       try {
//         const mermaid = (await import("mermaid")).default;

//         mermaid.initialize({
//           startOnLoad: false,
//           theme: "base",
//           themeVariables: {
//             primaryColor: "#f5f0e8",
//             primaryBorderColor: "#8a9e8c",
//             primaryTextColor: "#2c2c2a",
//             lineColor: "#8a9e8c",
//             fontFamily: "'DM Sans', sans-serif",
//             fontSize: "13px",
//             edgeLabelBackground: "#faf8f4",
//             nodeBorder: "#8a9e8c",
//           },
//           flowchart: {
//             curve: "linear",
//             nodeSpacing: 40,
//             rankSpacing: 50,
//             padding: 24,
//             htmlLabels: true,
//             wrappingWidth: 120,
//           },
//         });

//         const id = "swatu-org-chart";
//         const { svg } = await mermaid.render(id, MERMAID_CHART);

//         if (!cancelled && ref.current) {
//           ref.current.innerHTML = svg;

//           // Style tweaks after render
//           const svgEl = ref.current.querySelector("svg");
//           if (svgEl) {
//             svgEl.style.maxWidth = "100%";
//             svgEl.style.height = "auto";

//             // Make node rects slightly rounded
//             svgEl.querySelectorAll(".node rect").forEach((rect) => {
//               rect.setAttribute("rx", "4");
//               rect.setAttribute("ry", "4");
//             });
//           }
//         }
//       } catch (e) {
//         console.error("Mermaid render error:", e);
//       }
//     }

//     render();
//     return () => {
//       cancelled = true;
//     };
//   }, []);

//   return (
//     <section
//       id="team"
//       className="bg-[#faf8f4] py-24"
//       style={{ scrollMarginTop: "80px" }}
//     >
//       <div className="text-center mb-12">
//         <p className="text-[11px] tracking-[0.22em] uppercase text-sage-dark mb-4 font-sans">
//           Our people
//         </p>
//         <h2
//           className="font-serif font-light text-charcoal leading-tight"
//           style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
//         >
//           Company <em className="italic text-warm">Structure</em>
//         </h2>
//         <div className="w-14 h-px bg-warm-light mx-auto mt-6" />
//       </div>

//       <p className="text-center text-sm leading-relaxed text-[#6b6b68] max-w-xl mx-auto mb-14 px-8 font-sans">
//         A multidisciplinary team of structural engineers, project managers,
//         drafters, and field supervisors — united by a shared commitment to safe
//         and precise structural solutions.
//       </p>

//       {/* Mermaid chart */}
//       <div className="max-w-2xl mx-auto px-8">
//         <div
//           ref={ref}
//           className="mermaid-container flex justify-center [&_svg]:max-w-full [&_svg]:h-auto
// [&_svg_.node_rect]:min-w-[160px]
// [&_svg_.node_rect]:fill-cream [&_svg_.node_rect]:stroke-sage [&_svg_.node_rect]:stroke-[1px]
// [&_edgePath_.path]:stroke-sage [&_edgePath_.path]:stroke-[1.5px]
// [&_label]:font-sans [&_label]:text-charcoal
// [&_nodeLabel]:text-charcoal [&_nodeLabel]:font-sans [&_nodeLabel]:text-sm"
//         >
//           {/* Loading state */}
//           <div className="text-center py-12 text-[#6b6b68] font-serif italic text-lg">
//             Loading structure...
//           </div>
//         </div>
//       </div>

//       {/* Role descriptions */}
//       <div className="grid grid-cols-4 gap-px bg-sage-light/20 max-w-4xl mx-auto mt-16 px-8">
//         {[
//           {
//             role: "Director",
//             desc: "Leads overall strategy, client relations, and quality assurance",
//           },
//           {
//             role: "Engineer",
//             desc: "Structural analysis, load calculations, and technical oversight",
//           },
//           {
//             role: "Estimator & Finance",
//             desc: "Cost estimation, budgeting, and financial management",
//           },
//           {
//             role: "Project Manager",
//             desc: "Site coordination, scheduling, and delivery management",
//           },
//         ].map(({ role, desc }) => (
//           <div key={role} className="bg-[#faf8f4] px-6 py-7">
//             <p className="text-[10px] tracking-[0.18em] uppercase text-sage-dark mb-2 font-sans">
//               {role}
//             </p>
//             <p className="text-xs leading-relaxed text-[#6b6b68] font-sans">
//               {desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef } from "react";

const MERMAID_CHART = `
graph TD
  A[Director] --- B[Engineer]
  A --- C[Finance]
  A --- D[Estimator]
  A --- E[Project Manager]
  B --- F[Drafter]
  E --- G[Supervisor]
`;

export default function Team() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      if (!ref.current) return;

      try {
        const mermaid = (await import("mermaid")).default;

        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          themeVariables: {
            primaryColor: "#f5f0e8",
            primaryBorderColor: "#8a9e8c",
            primaryTextColor: "#2c2c2a",
            lineColor: "#8a9e8c",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            edgeLabelBackground: "#faf8f4",
            nodeBorder: "#8a9e8c",
          },
          flowchart: {
            curve: "linear",
            nodeSpacing: 40,
            rankSpacing: 50,
            padding: 24,
            htmlLabels: true,
            wrappingWidth: 120,
          },
        });

        const { svg } = await mermaid.render("swatu-org-chart", MERMAID_CHART);

        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg;

          const svgEl = ref.current.querySelector("svg");

          if (svgEl) {
            svgEl.style.maxWidth = "100%";
            svgEl.style.height = "auto";

            svgEl.querySelectorAll(".node rect").forEach((rect) => {
              rect.setAttribute("rx", "4");
              rect.setAttribute("ry", "4");
            });
          }
        }
      } catch (e) {
        console.error("Mermaid render error:", e);
      }
    }

    render();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="team"
      className="bg-[#faf8f4] py-20 md:py-24"
      style={{ scrollMarginTop: "80px" }}
    >
      {/* Header */}
      <div className="text-center mb-12 px-6">
        <p className="text-[11px] tracking-[0.22em] uppercase text-sage-dark mb-4 font-sans">
          Our people
        </p>

        <h2
          className="font-serif font-light text-charcoal leading-tight"
          style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
        >
          Company <em className="italic text-warm">Structure</em>
        </h2>

        <div className="w-14 h-px bg-warm-light mx-auto mt-6" />
      </div>

      {/* Description */}
      <p className="text-center text-sm leading-relaxed text-[#6b6b68] max-w-xl mx-auto mb-12 md:mb-14 px-6 font-sans">
        A multidisciplinary team of structural engineers, project managers,
        drafters, and field supervisors — united by a shared commitment to safe
        and precise structural solutions.
      </p>

      {/* Mermaid chart */}
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div
          ref={ref}
          className="flex justify-center overflow-x-auto
          [&_svg]:max-w-full
          [&_svg]:h-auto
          [&_.node_rect]:min-w-[160px]
          [&_.node_rect]:fill-cream
          [&_.node_rect]:stroke-sage
          [&_.node_rect]:stroke-[1px]
          [&_.edgePath_.path]:stroke-sage
          [&_.edgePath_.path]:stroke-[1.5px]
          [&_.label]:font-sans
          [&_.label]:text-charcoal
          [&_.nodeLabel]:text-charcoal
          [&_.nodeLabel]:font-sans
          [&_.nodeLabel]:text-sm"
        >
          <div className="text-center py-12 text-[#6b6b68] font-serif italic text-lg">
            Loading structure...
          </div>
        </div>
      </div>

      {/* Role cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-sage-light/20 max-w-5xl mx-auto mt-14 px-6 md:px-10">
        {[
          {
            role: "Director",
            desc: "Leads overall strategy, client relations, and quality assurance",
          },
          {
            role: "Engineer",
            desc: "Structural analysis, load calculations, and technical oversight",
          },
          {
            role: "Estimator & Finance",
            desc: "Cost estimation, budgeting, and financial management",
          },
          {
            role: "Project Manager",
            desc: "Site coordination, scheduling, and delivery management",
          },
        ].map(({ role, desc }) => (
          <div key={role} className="bg-[#faf8f4] px-5 md:px-6 py-6 md:py-7">
            <p className="text-[10px] tracking-[0.18em] uppercase text-sage-dark mb-2 font-sans">
              {role}
            </p>

            <p className="text-xs leading-relaxed text-[#6b6b68] font-sans">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
