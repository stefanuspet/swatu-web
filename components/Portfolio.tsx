"use client";

import { useState } from "react";
import Image from "next/image";
import {
  portfolioData,
  categoryLabels,
  type PortfolioItem,
} from "@/lib/portfolio-data";

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

function PortoCard({
  item,
  featured,
}: {
  item: PortfolioItem;
  featured?: boolean;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden bg-cream cursor-pointer flex flex-col
      ${featured ? "lg:col-span-2 lg:min-h-[420px]" : "aspect-[3/4]"}`}
    >
      {/* Image */}
      <div className="relative flex-1 overflow-hidden bg-sage-light/20 border-b border-sage-light/20 transition-colors duration-300 group-hover:bg-sage-light/30">
        {item.images.length > 0 && !imgError ? (
          <Image
            src={item.images}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <svg
              viewBox="0 0 120 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-16 md:w-24 md:h-20 opacity-30"
            >
              <rect
                x="10"
                y="20"
                width="100"
                height="60"
                stroke="#4a5e4c"
                strokeWidth="1.5"
              />
              <line
                x1="10"
                y1="20"
                x2="35"
                y2="5"
                stroke="#4a5e4c"
                strokeWidth="1.5"
              />
              <line
                x1="110"
                y1="20"
                x2="85"
                y2="5"
                stroke="#4a5e4c"
                strokeWidth="1.5"
              />
              <line
                x1="35"
                y1="5"
                x2="85"
                y2="5"
                stroke="#4a5e4c"
                strokeWidth="1.5"
              />
              <line
                x1="35"
                y1="5"
                x2="35"
                y2="80"
                stroke="#4a5e4c"
                strokeWidth="1"
              />
              <line
                x1="60"
                y1="5"
                x2="60"
                y2="80"
                stroke="#4a5e4c"
                strokeWidth="1"
              />
              <line
                x1="85"
                y1="5"
                x2="85"
                y2="80"
                stroke="#4a5e4c"
                strokeWidth="1"
              />
              <line
                x1="10"
                y1="45"
                x2="110"
                y2="45"
                stroke="#4a5e4c"
                strokeWidth="1"
              />
              <line
                x1="10"
                y1="62"
                x2="110"
                y2="62"
                stroke="#4a5e4c"
                strokeWidth="1"
              />
            </svg>

            <span className="font-serif text-xs md:text-sm italic text-[#6b6b68]">
              {item.type}
            </span>
          </div>
        )}

        <span className="absolute top-3 right-3 bg-warm text-white text-[9px] tracking-[0.18em] uppercase px-2.5 py-1 font-sans">
          {categoryLabels[item.category]}
        </span>
      </div>

      {/* Info */}
      <div className="px-5 md:px-6 py-4 md:py-5">
        <p className="text-[10px] tracking-[0.18em] uppercase text-sage-dark mb-1.5 font-sans">
          {item.type} · {item.location}
        </p>

        <h3 className="font-serif text-lg md:text-xl text-charcoal mb-1">
          {item.name}
        </h3>

        <p className="text-xs text-[#6b6b68] font-sans">
          {item.area} · {item.stories}
        </p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("all");

  const filtered =
    active === "all"
      ? portfolioData
      : portfolioData.filter((p) => p.category === active);

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
