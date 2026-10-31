import React from 'react';

export default function StarburstBadge({ 
  text = "MINHTRI CHAU RMT • BESPOKE SPORTS THERAPY • ", 
  centerText = "MINHTRI\nCHAU\nRMT",
  className = "" 
}) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Scalloped / Starburst Sunburst SVG */}
      <svg 
        viewBox="0 0 200 200" 
        className="w-24 h-24 sm:w-28 sm:h-28 text-[#C99F72] animate-spin-slow drop-shadow-xl"
        fill="currentColor"
      >
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -68, 0 a 68,68 0 1,1 136,0 a 68,68 0 1,1 -136,0"
          />
        </defs>

        {/* 24-point Scallop Starburst polygon */}
        <path
          d="M100 0 L112 18 L133 13 L138 34 L158 37 L154 58 L172 69 L160 87 L174 103 L157 116 L165 136 L145 144 L146 165 L126 166 L120 186 L101 180 L90 198 L76 186 L60 198 L53 178 L33 183 L33 162 L15 158 L22 138 L6 127 L20 110 L8 92 L26 82 L20 62 L40 59 L41 38 L61 40 L69 20 L87 28 Z"
          fill="#C99F72"
        />

        {/* Inner Dark Disk */}
        <circle cx="100" cy="100" r="76" fill="#1C1814" />
        <circle cx="100" cy="100" r="73" stroke="#C99F72" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />

        {/* Circular Text */}
        <text fill="#E8DFC8" fontSize="11" fontWeight="700" letterSpacing="0.14em" className="font-bebas">
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center Static Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
        <span className="font-bebas text-[11px] sm:text-xs tracking-wider text-[#F4EDE4] leading-tight font-bold whitespace-pre-line">
          {centerText}
        </span>
      </div>
    </div>
  );
}
