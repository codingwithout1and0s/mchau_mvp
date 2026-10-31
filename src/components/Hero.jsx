import React from 'react';
import { Calendar, Sparkles, Activity, Award, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenBooking, onOpenTreatments }) {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-8 sm:pt-14 pb-16 px-4 sm:px-8 overflow-hidden rounded-3xl bg-[#161412]">

      {/* High-res Ambient Background Studio Photo */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80"
          alt="Studio"
          className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.15] saturate-[0.85]"
        />
        {/* Warm Ambient Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-[#141210]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#141210]/90 via-transparent to-[#141210]/90"></div>
      </div>

      {/* Floating Ambient Warm Glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#C99F72]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">

        {/* Left Column: Big Condensed Typography & Sticker Photo */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">

          {/* Main Huge Condensed Headline matching mockup */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="font-bebas text-6xl sm:text-8xl md:text-9xl lg:text-[108px] text-[#F4EDE4] tracking-tight leading-[0.88] hero-title-shadow select-none">
              YOUR NEW...<br />
              <span className="text-[#F4EDE4] relative inline-block">
                FAVORITE
                {/* Decorative Linework */}
                <svg className="absolute -top-3 -right-6 w-8 h-8 text-[#C99F72] animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </span><br />
              <span className="text-[#E8DFC8]">RECOVERY SPOT!</span>
            </h1>
          </div>

          {/* Subtitle & Mini Sticker Photo Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">

            {/* Embedded Polaroid / Sticker Photo matching mockup */}
            <div
              className="vintage-photo-sticker w-28 h-28 sm:w-32 sm:h-32 shrink-0 bg-[#221E19] overflow-hidden group cursor-pointer"
              onClick={onOpenTreatments}
              title="Explore Restorative Oils & Manual Techniques"
            >
              <img
                src="/assets/daily_flow_1.png"
                alt="Therapeutic Oils and Manual Release"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
            </div>

            {/* Paragraph & Practitioner Tag */}
            <div className="space-y-2 max-w-md">
              <div className="inline-flex items-center gap-2 bg-[#26201A]/90 border border-[#44382D] px-3 py-1 rounded-full text-[11px] font-space text-[#C99F72] uppercase tracking-wider font-semibold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#C99F72] animate-ping"></span>
                <span>MinhTri Chau • Licensed RMT</span>
              </div>
              <p className="text-xs sm:text-sm text-[#B8ACA0] leading-relaxed font-sans">
                Evidence-based sports therapy, deep neuromuscular release, and movement coaching tailored for peak bodily freedom.
              </p>
            </div>

          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="btn-pill-cream"
            >
              <div className="btn-icon-circle">
                <Calendar className="w-4 h-4" />
              </div>
              <span>BOOK AN INTAKE SESSION</span>
            </button>

            <button
              onClick={onOpenTreatments}
              className="btn-pill-dark"
            >
              <div className="btn-icon-circle">
                <Activity className="w-4 h-4" />
              </div>
              <span>VIEW TREATMENT MODALITIES</span>
            </button>
          </div>

        </div>

        {/* Right Column: Featured Treatment Showcase Card matching the coffee bag card in mockup */}
        <div className="lg:col-span-5 relative">

          {/* Card Container with smooth hover lift */}
          <div className="bg-[#1C1814]/95 backdrop-blur-xl border-2 border-[#382F27] hover:border-[#C99F72]/50 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-2xl relative overflow-hidden group">

            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C99F72]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#C99F72]/15 transition-colors"></div>

            {/* Top Badge */}
            <div className="flex items-center justify-end relative z-10">
              <span className="text-[10px] font-space uppercase bg-[#2C241D] text-[#E8DFC8] px-2.5 py-0.5 rounded-full font-medium">
                1-on-1 Bespoke Care
              </span>
            </div>

            {/* Photo of MinhTri Chau Treatment Session (Wider Aspect Ratio in Black & White) */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-[#141210] border-2 border-[#2E261F] group/img">
              <img
                src="/assets/minhtri_hero_therapy.jpg"
                alt="MinhTri Chau, RMT Sports Therapy & Neuromuscular Session"
                className="w-full h-full object-cover object-[center_20%] filter grayscale contrast-[1.15] brightness-[0.97] group-hover/img:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/90 via-[#141210]/15 to-transparent pointer-events-none"></div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#F4EDE4] font-space font-medium z-10">
                <span className="bg-[#1C1814]/90 backdrop-blur-md px-3 py-1 rounded-lg border border-[#382F27]">
                  MinhTri Chau
                </span>
                <span className="text-[#C99F72] font-bold font-bebas text-base">
                  60 / 90 / 120 MINS
                </span>
              </div>
            </div>

            {/* Description matching mockup style */}
            <div className="space-y-2 text-center sm:text-left relative z-10">
              <h3 className="font-bebas text-2xl text-[#F4EDE4] tracking-wide group-hover:text-[#C99F72] transition-colors">
                TARGETED FASCIAL RELEASE & RECOVERY
              </h3>
              <p className="text-xs text-[#B8ACA0] leading-relaxed font-sans">
                Combining myofascial decompression, trigger point release, and active motor control drills to eliminate chronic pain patterns.
              </p>
            </div>

            {/* Pill CTA matching mockup */}
            <div className="pt-2 relative z-10">
              <button
                onClick={onOpenBooking}
                className="w-full btn-pill-dark justify-center shadow-lg hover:border-[#C99F72] text-center"
              >
                <div className="btn-icon-circle">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span>RESERVE THIS TREATMENT</span>
              </button>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}

