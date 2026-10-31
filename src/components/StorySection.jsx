import React from 'react';
import { Award, Compass, ArrowRight, Sparkles } from 'lucide-react';

export default function StorySection({ onOpenStory, onOpenBooking }) {
  return (
    <section id="story" className="relative py-24 sm:py-32 px-4 sm:px-8 overflow-hidden rounded-3xl my-6 bg-[#161412] border-t border-b border-[#2C241D]">

      {/* Misty Forest Background with subtle parallax filter */}
      <div className="absolute inset-0 pointer-events-none opacity-35">
        <img
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=80"
          alt="Misty Forest Nature"
          className="w-full h-full object-cover filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#161412] via-[#161412]/85 to-[#161412]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#161412] via-transparent to-[#161412]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">

        {/* Left: Vintage Linocut Illustration of Botanical Healing & Hands matching mockup! */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm group">

            {/* SVG Linocut Art */}
            <svg
              viewBox="0 0 400 450"
              className="w-full h-auto text-[#E8DFC8] filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Silhouette Body & Hands */}
              <circle cx="160" cy="120" r="32" stroke="currentColor" strokeWidth="3" fill="#1C1814" />
              <path
                d="M130 180 C130 150 190 150 190 180 L200 300 C200 320 120 320 120 300 Z"
                stroke="currentColor"
                strokeWidth="3.5"
                fill="#1C1814"
              />
              {/* Kinetic Lines / Fascial Ribbons */}
              <path d="M140 200 Q 160 250 140 300" stroke="#C99F72" strokeWidth="2.5" strokeDasharray="4 3" />
              <path d="M160 190 Q 180 240 160 300" stroke="#C99F72" strokeWidth="2.5" strokeDasharray="4 3" />
              <path d="M180 200 Q 200 250 180 300" stroke="#C99F72" strokeWidth="2.5" strokeDasharray="4 3" />

              {/* Extended Hand reaching for Botanicals */}
              <path
                d="M185 180 C210 160 260 110 290 80 C295 75 305 78 300 85 C275 120 230 195 210 215"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Botanical Branch / Recovery Leaves */}
              <path
                d="M270 95 Q 330 60 370 70 M300 80 Q 320 50 340 55 M320 75 Q 350 40 375 45 M330 70 Q 360 85 385 75"
                stroke="#C99F72"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Therapeutic Stone / Mortar Bowl held in hands */}
              <ellipse cx="170" cy="330" rx="45" ry="20" stroke="currentColor" strokeWidth="3.5" fill="#241E19" />
              <path d="M125 330 C125 365 215 365 215 330" stroke="currentColor" strokeWidth="3.5" fill="#241E19" />

              {/* Cross-hatch shading texture */}
              <line x1="140" y1="340" x2="160" y2="355" stroke="currentColor" strokeWidth="1.5" />
              <line x1="155" y1="340" x2="175" y2="355" stroke="currentColor" strokeWidth="1.5" />
              <line x1="170" y1="340" x2="190" y2="355" stroke="currentColor" strokeWidth="1.5" />
              <line x1="185" y1="340" x2="200" y2="352" stroke="currentColor" strokeWidth="1.5" />
            </svg>

            {/* Subtle glow under illustration */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-12 bg-[#C99F72]/20 rounded-full blur-xl pointer-events-none"></div>
          </div>
        </div>

        {/* Right: Narrative Story Text matching Screenshot 3 */}
        <div className="lg:col-span-7 space-y-6">

          {/* Floating Angled Badge matching mockup ("Coffee From Its Origin") */}
          <div className="inline-block transform -rotate-2">
            <span className="bg-[#E8DFC8] text-[#1A1714] font-bebas text-sm sm:text-base tracking-widest px-4 py-1.5 rounded-full shadow-lg font-bold">
              THERAPY FROM THE SOURCE
            </span>
          </div>

          {/* Large Condensed Title */}
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F4EDE4] tracking-tight leading-[0.92] hero-title-shadow">
            THE MCHAU MVT STORY
          </h2>

          {/* Narrative Paragraphs */}
          <div className="space-y-4 text-xs sm:text-sm md:text-[15px] text-[#B8ACA0] leading-relaxed font-sans max-w-2xl">
            <p>
              Recovery was born in motion, not behind a desk. The body heals fastest when precise clinical knowledge meets empathetic, intuitive care.
            </p>
            <p>
              MCHAU MVT was founded by <strong className="text-[#F4EDE4] font-semibold">MinhTri Chau</strong>, carrying that standard forward. We practice every technique with intention — integrating deep myofascial release, DNS neuromuscular restoration, and athletic mobility coaching so your body moves freely without fear.
            </p>
            <p>
              Every session is strictly 1-on-1, customized to your unique training load, postural imbalances, and recovery goals.
            </p>
          </div>

          {/* Badges / Accreditations snapshot */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="bg-[#201A15] border border-[#382F27] p-3 rounded-xl">
              <span className="font-bebas text-lg text-[#C99F72] block">100+ satsified clients</span>
              <span className="text-[10px] text-[#B8ACA0] font-space uppercase">Clinical Experience</span>
            </div>
            <div className="bg-[#201A15] border border-[#382F27] p-3 rounded-xl">
              <span className="font-bebas text-lg text-[#C99F72] block">LICENSED RMT</span>
              <span className="text-[10px] text-[#B8ACA0] font-space uppercase">Sports Registered</span>
            </div>
            <div className="bg-[#201A15] border border-[#382F27] p-3 rounded-xl col-span-2 sm:col-span-1">
              <span className="font-bebas text-lg text-[#C99F72] block">100% Personalized</span>
              <span className="text-[10px] text-[#B8ACA0] font-space uppercase">Individual Care</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-3 flex flex-wrap gap-4">
            <button
              onClick={onOpenStory}
              className="btn-pill-cream"
            >
              <div className="btn-icon-circle">
                <Compass className="w-4 h-4" />
              </div>
              <span>READ MINHTRI'S FULL BIOGRAPHY</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="btn-pill-dark"
            >
              <div className="btn-icon-circle">
                <Sparkles className="w-4 h-4" />
              </div>
              <span>RESERVE APPOINTMENT</span>
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
