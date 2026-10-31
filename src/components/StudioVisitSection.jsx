import React from 'react';
import { MapPin, Sparkles, Calendar, Clock, ArrowRight } from 'lucide-react';
import StarburstBadge from './StarburstBadge';

export default function StudioVisitSection({ onOpenBooking, onOpenContact }) {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-8 overflow-hidden rounded-3xl my-6 bg-[#161412]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

        {/* Left Stitched Card matching Screenshots 4 & 5 */}
        <div className="lg:col-span-5 stitched-card p-6 sm:p-10 flex flex-col justify-between space-y-8 bg-[#201A15] border-2 border-dashed border-[#44382D] rounded-3xl relative">

          {/* Floating Scalloped Starburst Badge on Border matching mockup */}
          <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 z-20">
            <StarburstBadge
              text="MINHTRI CHAU RMT • 1-ON-1 PERSONALIZED CARE • "
              centerText="MINHTRI\nCHAU\nRMT"
            />
          </div>

          <div className="space-y-6 pt-2">

            {/* Big Condensed Title matching mockup */}
            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-[#F4EDE4] tracking-tight leading-[0.92] hero-title-shadow">
              STEP INTO MCHAU MVT FOR BOLD RELIEF AND A WARM WELCOME.
            </h2>

            {/* Subtext matching mockup */}
            <p className="text-xs sm:text-sm text-[#B8ACA0] leading-relaxed font-sans">
              From First Evaluation To Final Release, MinhTri Brings Clinical Mastery Close: Targeted Neuromuscular Therapy, Fascial Decompression, And Protocols Tailored To Your Body.
            </p>

            {/* Studio Highlights */}
            <div className="space-y-2.5 text-xs text-[#E8DFC8] border-t border-[#382E26] pt-4 font-space">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C99F72]" />
                <span>1280 Kinetic Way, Suite 400, Montreal, QC</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C99F72]" />
                <span>Private 1-on-1 Sessions • By Appointment Only</span>
              </div>
            </div>

          </div>

          {/* Pill Button matching mockup ("COME VISIT US") */}
          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="btn-pill-cream w-full sm:w-auto justify-center"
            >
              <div className="btn-icon-circle">
                <Sparkles className="w-4 h-4" />
              </div>
              <span>COME VISIT THE STUDIO</span>
            </button>
          </div>

        </div>

        {/* Right Photo Gallery of the Studio matching mockup */}
        <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] rounded-3xl overflow-hidden border-2 border-[#382F27] group shadow-2xl bg-[#1C1814]">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
            alt=" Studio Lounge"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/90 via-[#141210]/20 to-transparent"></div>

          {/* Floating Studio Info Tag */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#1A1613]/90 backdrop-blur-md border border-[#382F27] p-4 sm:p-5 rounded-2xl">
            <div>
              <span className="text-[10px] font-space uppercase tracking-[0.2em] text-[#C99F72] font-bold block mb-0.5">
                SANCTUARY ENVIRONMENT
              </span>
              <h4 className="font-bebas text-xl text-[#F4EDE4] tracking-wide">
                MONTREAL RECOVERY LAB & PRIVATE CLINIC
              </h4>
              <p className="text-[11px] text-[#B8ACA0] font-sans">
                A tranquil, distraction-free space optimized for deep somatic rest and athletic rehabilitation.
              </p>
            </div>

            <button
              onClick={onOpenContact}
              className="btn-pill-dark text-xs py-2 px-4 shrink-0"
            >
              <div className="btn-icon-circle w-6 h-6">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
              <span>GET DIRECTIONS</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
