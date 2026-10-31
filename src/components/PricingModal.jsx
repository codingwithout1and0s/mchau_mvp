import React, { useState } from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

export default function PricingModal({ isOpen, onClose, onOpenBooking }) {
  const [duration, setDuration] = useState('60');

  if (!isOpen) return null;

  const getPrice = (base60, base90, base120) => {
    if (duration === '90') return base90;
    if (duration === '120') return base120;
    return base60;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0E1610] border border-[#1A291E] rounded-2xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-[#9AA89C] hover:text-[#F0F4F1] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-6">
          
          {/* Header */}
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C89762] block">
              TRANSPARENT CARE TIERS
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-[#F0F4F1]">
              PRICING & PACKAGES
            </h3>
            <p className="text-xs text-[#9AA89C] leading-relaxed">
              Invest in your long-term mobility, pain-free performance, and systemic restoration.
            </p>

            {/* Duration Selector */}
            <div className="pt-2 inline-flex p-1 rounded-lg bg-[#070C09] border border-[#1A291E]">
              {['60', '90', '120'].map((d) => (
                <button 
                  key={d}
                  onClick={() => setDuration(d)}
                  className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                    duration === d
                      ? 'bg-[#C89762] text-[#070C09] shadow-sm'
                      : 'text-[#9AA89C] hover:text-[#F0F4F1]'
                  }`}
                >
                  {d} Min
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            
            {/* Single Session */}
            <div className="bg-[#0F1A13] rounded-xl p-5 border border-[#1A291E] flex flex-col justify-between hover:border-[#C89762]/30 transition-all">
              <div className="space-y-4">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#9AA89C] block">
                    FLEXIBLE CARE
                  </span>
                  <h4 className="font-heading text-base font-bold uppercase text-[#F0F4F1]">
                    SINGLE SESSION
                  </h4>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-3xl font-extrabold text-[#F0F4F1]">
                    ${getPrice(140, 185, 230)}
                  </span>
                  <span className="text-[11px] text-[#9AA89C] uppercase font-mono">
                    / {duration}m
                  </span>
                </div>

                <p className="text-xs text-[#9AA89C] leading-relaxed border-t border-b border-[#1A291E] py-3">
                  Ideal for acute symptom relief and targeted muscular reset.
                </p>

                <ul className="space-y-2 text-xs text-[#F0F4F1]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C89762] shrink-0" />
                    <span>Movement assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C89762] shrink-0" />
                    <span>Targeted manual release</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C89762] shrink-0" />
                    <span>Custom mobility drills</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => { onClose(); onOpenBooking(); }}
                  className="w-full btn-bronze-outline py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg"
                >
                  Book Single
                </button>
              </div>
            </div>

            {/* 4-Session Bundle */}
            <div className="bg-[#121F16] rounded-xl p-5 border border-[#C89762]/50 relative flex flex-col justify-between shadow-xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C89762] text-[#070C09] font-heading text-[9px] font-extrabold uppercase tracking-widest px-3 py-0.5 rounded-full shadow">
                MOST POPULAR
              </div>

              <div className="space-y-4 pt-1">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#C89762] block">
                    SAVE 15% PER SESSION
                  </span>
                  <h4 className="font-heading text-base font-bold uppercase text-[#F0F4F1]">
                    4-SESSION BUNDLE
                  </h4>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-3xl font-extrabold text-[#F0F4F1]">
                    ${getPrice(475, 625, 780)}
                  </span>
                  <span className="text-[11px] text-[#9AA89C] uppercase font-mono">
                    / 4 x {duration}m
                  </span>
                </div>

                <p className="text-xs text-[#9AA89C] leading-relaxed border-t border-b border-[#1A291E] py-3">
                  Multi-week protocol to systematically resolve deep imbalances.
                </p>

                <ul className="space-y-2 text-xs text-[#F0F4F1]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C89762] shrink-0" />
                    <span>4 tailored treatments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C89762] shrink-0" />
                    <span>Priority booking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C89762] shrink-0" />
                    <span>Direct messaging access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C89762] shrink-0" />
                    <span>15% savings bundled</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => { onClose(); onOpenBooking(); }}
                  className="w-full btn-bronze-solid py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg"
                >
                  Select Bundle
                </button>
              </div>
            </div>

            {/* Monthly Membership */}
            <div className="bg-[#0F1A13] rounded-xl p-5 border border-[#1A291E] flex flex-col justify-between hover:border-[#C89762]/30 transition-all">
              <div className="space-y-4">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#9AA89C] block">
                    SUSTAINED EXCELLENCE
                  </span>
                  <h4 className="font-heading text-base font-bold uppercase text-[#F0F4F1]">
                    MONTHLY PLAN
                  </h4>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-3xl font-extrabold text-[#F0F4F1]">
                    ${getPrice(230, 310, 390)}
                  </span>
                  <span className="text-[11px] text-[#9AA89C] uppercase font-mono">
                    / mo (2 sessions)
                  </span>
                </div>

                <p className="text-xs text-[#9AA89C] leading-relaxed border-t border-b border-[#1A291E] py-3">
                  Bi-weekly maintenance tuning for active movers & athletes.
                </p>

                <ul className="space-y-2 text-xs text-[#F0F4F1]">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C89762] shrink-0" />
                    <span>2 sessions per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C89762] shrink-0" />
                    <span>Unused sessions roll over</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#C89762] shrink-0" />
                    <span>20% off extra bookings</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => { onClose(); onOpenBooking(); }}
                  className="w-full btn-bronze-outline py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg"
                >
                  Join Monthly
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
