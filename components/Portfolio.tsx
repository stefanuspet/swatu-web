"use client";

import { useState } from "react";
import Image from "next/image";
import { categoryLabels, type PortfolioItem } from "@/lib/porto";
import PortoCard from "./PortoCard";

type Filter = "all" | PortfolioItem["category"];

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "residential", label: "Residential" },
  { key: "commercial", label: "Commercial" },
  { key: "hospitality", label: "Hospitality" },
  { key: "industrial", label: "Industrial" },
  { key: "religious", label: "Religious" },
  { key: "mixed", label: "Mixed Use" },
];

export default function Portfolio({ data = [] }: { data: PortfolioItem[] }) {
  const [active, setActive] = useState<Filter>("all");

  const filtered =
    active === "all" ? data : data.filter((p) => p.category === active);

  return (
    <section
      id="portfolio"
      className="bg-[#faf8f4] py-20 md:py-24"
      style={{ scrollMarginTop: "80px" }}
    >
      {/* Header */}
      <div className="text-center mb-12 md:mb-14 px-6">
        <p className="text-[11px] tracking-[0.22em] uppercase text-sage-dark mb-4 font-sans">
          Selected works
        </p>

        <h2
          className="font-serif font-light text-charcoal leading-tight"
          style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
        >
          Our <em className="italic text-warm">Portfolio</em>
        </h2>

        <div className="w-14 h-px bg-warm-light mx-auto mt-6" />
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-2 mb-12 md:mb-14 flex-wrap px-6 md:px-12">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`text-[10px] md:text-[11px] tracking-[0.14em] uppercase px-4 md:px-5 py-2 border transition-all duration-200 font-sans
            ${
              active === f.key
                ? "bg-sage-dark text-white border-sage-dark"
                : "bg-transparent text-[#6b6b68] border-sage-light/50 hover:bg-sage-dark hover:text-white hover:border-sage-dark"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 max-w-6xl mx-auto px-6 md:px-12">
        {filtered.map((item, i) => (
          <PortoCard
            key={item.id}
            item={item}
            featured={i === 0 && active === "all"}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="font-serif text-xl italic text-[#6b6b68]">
            No projects in this category yet.
          </p>
        </div>
      )}
    </section>
  );
}
