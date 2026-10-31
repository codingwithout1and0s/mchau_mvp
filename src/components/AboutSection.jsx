import React from 'react';
import { Heart, Compass, ArrowRight } from 'lucide-react';

export default function AboutSection({ onOpenStory }) {
  return (
    <section id="recovery" className="py-24 sm:py-32 px-6 lg:px-12 bg-[#070C09] border-t border-[#162219]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        {/* Left Photo with floating badge matching mockup */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-[#1A291E] bg-[#0E1610] shadow-2xl">
            <img 
              src="/assets/therapist_portrait.png" 
              alt="Therapist Practitioner"
              className="w-full h-[460px] sm:h-[500px] object-cover object-top"
            />
            
            {/* Floating Badge on Photo matching mockup */}
            <div className="absolute bottom-5 left-5 right-5 bg-[#08110B]/90 backdrop-blur-md border border-[#233526] p-4 rounded-xl shadow-2xl">
              <span className="font-heading text-[11px] uppercase tracking-[0.14em] text-[#C89762] font-bold block mb-1">
                PERSONALIZED CARE
              </span>
              <p className="text-xs text-[#9AA89C] leading-normal font-sans">
                Tailored clinical session to your unique lifestyle and goals.
              </p>
            </div>
          </div>
        </div>

        {/* Right Narrative matching mockup */}
        <div className="lg:col-span-7 space-y-7 lg:pl-2">
          
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#F0F4F1] mb-3">
              WELCOME TO YOUR RECOVERY
            </h2>
            <p className="text-[#9AA89C] text-xs sm:text-sm md:text-base leading-relaxed">
              My practice is built on a simple premise: your body is meant to move freely and without pain. I invite you to discover what's possible when expert clinical knowledge meets compassionate, intuitive care.
            </p>
          </div>

          {/* Pillars List matching mockup icons */}
          <div className="space-y-6 pt-1">
            
            {/* Pillar 1: Understanding */}
            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 rounded-full bg-[#101B13] border border-[#1A291E] flex items-center justify-center shrink-0">
                <Heart className="w-4 h-4 text-[#C89762]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F0F4F1]">
                  UNDERSTANDING
                </h3>
                <p className="text-xs sm:text-sm text-[#9AA89C] leading-relaxed">
                  Every journey begins with listening. We take the time to understand your unique history, challenges, and aspirations before crafting your personalized treatment plan.
                </p>
              </div>
            </div>

            {/* Pillar 2: Guidance */}
            <div className="flex gap-4 items-start">
              <div className="w-11 h-11 rounded-full bg-[#101B13] border border-[#1A291E] flex items-center justify-center shrink-0">
                <Compass className="w-4 h-4 text-[#C89762]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F0F4F1]">
                  GUIDANCE
                </h3>
                <p className="text-xs sm:text-sm text-[#9AA89C] leading-relaxed">
                  My approach bridges the gap between traditional rehabilitation and optimal wellness, supporting you every step of the way as you regain your strength and confidence.
                </p>
              </div>
            </div>

          </div>

          {/* Read My Story Button matching mockup */}
          <div className="pt-2">
            <button 
              onClick={onOpenStory}
              className="btn-bronze-outline group cursor-pointer"
            >
              <span>READ MY STORY</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
