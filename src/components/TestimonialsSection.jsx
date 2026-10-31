import React from 'react';
import { Quote, Star } from 'lucide-react';
import StarburstBadge from './StarburstBadge';

export default function TestimonialsSection() {
  const TESTIMONIALS = [
    {
      quote: "MinhTri's blend of targeted deep tissue massage and active movement homework completely transformed how my body recovers between marathons. I've been living pain-free after 4 years of chronic hip and lumbar stiffness. He is the only therapist in Montreal I trust.",
      name: "SARA JENKINS",
      role: "Marathon Runner & IronMan Athlete",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      treatment: "Sports Neuromuscular Therapy (90 min)"
    },
    {
      quote: "An exceptionally thoughtful and anatomical approach to therapy. MinhTri doesn't just treat the symptom; he uncovers the root fascial compensation across your entire kinetic chain. My shoulder mobility is better now at 42 than it was in college.",
      name: "MARCUS THORNE",
      role: "Architect & Crossfit Coach",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      treatment: "Deep Tissue & Fascial Decompression (90 min)"
    }
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 rounded-3xl my-6 bg-[#161412] border-t border-[#2C241D]">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2C241D] pb-8">
          <div>
            <span className="text-[11px] font-space uppercase tracking-[0.2em] text-[#C99F72] font-bold block mb-1">
              ATHLETE & CLIENT EXPERIENCES
            </span>
            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-[#F4EDE4] tracking-tight leading-none hero-title-shadow">
              STORIES OF HEALING & POWER
            </h2>
          </div>

          <div className="flex items-center gap-1 text-[#C99F72]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="text-xs font-space font-bold text-[#E8DFC8] ml-2">
              5.0 / 5.0 (180+ Google Reviews)
            </span>
          </div>
        </div>

        {/* 2 Big Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#1F1914] border-2 border-[#362C23] rounded-3xl p-8 sm:p-10 relative flex flex-col justify-between space-y-6 shadow-xl"
            >
              {/* Quote mark decoration */}
              <Quote className="w-10 h-10 text-[#C99F72]/30 absolute top-6 right-6" />

              <div className="space-y-4 pt-2">
                <span className="text-[10px] font-space uppercase tracking-widest text-[#C99F72] bg-[#2A221B] px-3 py-1 rounded-full inline-block font-semibold">
                  {t.treatment}
                </span>

                <blockquote className="text-sm sm:text-base text-[#E8DFC8] leading-relaxed italic font-serif">
                  "{t.quote}"
                </blockquote>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#2D241D]">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-13 h-13 rounded-full object-cover border-2 border-[#C99F72] shadow-md"
                />
                <div>
                  <h4 className="font-bebas text-xl text-[#F4EDE4] tracking-wider">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#B8ACA0] font-space">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
