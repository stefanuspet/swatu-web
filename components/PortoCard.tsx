"use client";

import { useState } from "react";
import Image from "next/image";
import { categoryLabels, type PortfolioItem } from "@/lib/porto";

type Props = {
  item: PortfolioItem;
  featured?: boolean;
};

export default function PortoCard({ item, featured }: Props) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden bg-cream cursor-pointer flex flex-col
      ${featured ? "sm:col-span-2 sm:min-h-[320px] lg:col-span-2 lg:min-h-[420px]" : "aspect-[3/4]"}`}
    >
      {/* Image */}
      <div className="relative flex-1 overflow-hidden bg-sage-light/20 border-b border-sage-light/20 transition-colors duration-300 group-hover:bg-sage-light/30">
        {item.images && !imgError ? (
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
