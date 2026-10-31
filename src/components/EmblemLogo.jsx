import React from 'react';

export default function EmblemLogo({ className = "w-8 h-8" }) {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      {/* Custom Wing / Leaf Kinetic Emblem */}
      <div className="relative">
        <svg
          viewBox="0 0 100 100"
          className={`${className} text-[#C99F72] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Ring */}
          <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.6" />

          {/* Stylized Kinetic Wing / Leaf Anatomy */}
          <path
            d="M30 65C30 65 35 40 50 32C65 24 78 28 78 28C78 28 70 45 55 52C40 59 30 65 30 65Z"
            fill="currentColor"
            opacity="0.9"
          />
          <path
            d="M26 52C26 52 38 35 52 38C66 41 68 55 68 55C68 55 54 58 44 54C34 50 26 52 26 52Z"
            fill="#E8DFC8"
          />
          <path
            d="M36 72C36 72 45 58 58 59C71 60 74 70 74 70C74 70 60 74 50 71C40 68 36 72 36 72Z"
            fill="#C99F72"
            opacity="0.75"
          />
          <circle cx="50" cy="50" r="4" fill="#F4EDE4" />
        </svg>
      </div>

      {/* Brand Title */}
      <div className="flex flex-col">
        <span className="font-bebas text-xl sm:text-2xl tracking-[0.12em] text-[#F4EDE4] leading-none group-hover:text-[#C99F72] transition-colors">
          MCHAU MVT
        </span>
        <span className="text-[9px] font-space uppercase tracking-[0.25em] text-[#C99F72] font-semibold leading-tight">
          MinhTri Chau, RMT
        </span>
      </div>
    </div>
  );
}
