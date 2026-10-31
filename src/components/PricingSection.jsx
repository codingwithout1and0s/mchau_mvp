import React, { useState } from 'react';
import { Check, Calendar, Zap, ShieldCheck } from 'lucide-react';

export default function PricingSection({ onOpenBooking }) {
  const [duration, setDuration] = useState('60'); // 60, 90, 120

  const getPrice = (base60, base90, base120) => {
    if (duration === '90') return base90;
    if (duration === '120') return base120;
    return base60;
  };

  return (
    <section id="pricing" className="py-24 px-6 md:px-12 bg-kinetic-dark border-t border-kinetic-border/60 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-kinetic-light">
            TRANSPARENT PRICING
          </h2>
          <p className="text-kinetic-sage text-sm md:text-base leading-relaxed">
            Invest in your long-term mobility, pain-free performance, and systemic restoration.
          </p>

          {/* Duration Selector Pills */}
          <div className="pt-4 inline-flex p-1.5 rounded-full bg-kinetic-card border border-kinetic-border">
            <button 
              onClick={() => setDuration('60')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                duration === '60'
                  ? 'bg-kinetic-bronze text-kinetic-dark shadow-md'
                  : 'text-kinetic-sage hover:text-kinetic-light'
              }`}
            >
              60 Minutes
            </button>
            <button 
              onClick={() => setDuration('90')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                duration === '90'
                  ? 'bg-kinetic-bronze text-kinetic-dark shadow-md'
                  : 'text-kinetic-sage hover:text-kinetic-light'
              }`}
            >
              90 Minutes
            </button>
            <button 
              onClick={() => setDuration('120')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                duration === '120'
                  ? 'bg-kinetic-bronze text-kinetic-dark shadow-md'
                  : 'text-kinetic-sage hover:text-kinetic-light'
              }`}
            >
              120 Minutes
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Single Session */}
          <div className="bg-kinetic-card rounded-2xl p-8 border border-kinetic-border flex flex-col justify-between hover:border-kinetic-bronze/30 transition-all">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-kinetic-sage block mb-1">
                  FLEXIBLE CARE
                </span>
                <h3 className="font-syne text-xl font-bold uppercase tracking-wider text-kinetic-light">
                  SINGLE SESSION
                </h3>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-syne text-4xl font-extrabold text-kinetic-light">
                  ${getPrice(140, 185, 230)}
                </span>
                <span className="text-xs text-kinetic-sage uppercase font-medium">
                  / {duration} min session
                </span>
              </div>

              <p className="text-xs text-kinetic-sage leading-relaxed border-t border-b border-kinetic-border/60 py-4">
                Ideal for acute symptom relief, targeted muscular tightness, or periodic bodily reset.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-xs text-kinetic-light">
                  <Check className="w-4 h-4 text-kinetic-bronze shrink-0" />
                  <span>Comprehensive movement evaluation</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-kinetic-light">
                  <Check className="w-4 h-4 text-kinetic-bronze shrink-0" />
                  <span>Targeted manual therapy & release</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-kinetic-light">
                  <Check className="w-4 h-4 text-kinetic-bronze shrink-0" />
                  <span>Post-session mobility prescription</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button 
                onClick={onOpenBooking}
                className="w-full btn-outline-bronze py-3 rounded-xl text-xs font-bold uppercase tracking-wider"
              >
                BOOK SINGLE SESSION
              </button>
            </div>
          </div>

          {/* Card 2: 4-Session Package (Featured Glow) */}
          <div className="bg-kinetic-surface rounded-2xl p-8 border border-kinetic-bronze/50 relative shadow-2xl flex flex-col justify-between gold-border-glow">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-kinetic-bronze text-kinetic-dark font-syne text-[10px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
              MOST POPULAR RECOVERY
            </div>

            <div className="space-y-6 pt-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-kinetic-bronze block mb-1">
                  SAVE 15% PER SESSION
                </span>
                <h3 className="font-syne text-xl font-bold uppercase tracking-wider text-kinetic-light">
                  4-SESSION BUNDLE
                </h3>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-syne text-4xl font-extrabold text-kinetic-light">
                  ${getPrice(475, 625, 780)}
                </span>
                <span className="text-xs text-kinetic-sage uppercase font-medium">
                  / 4 x {duration} min
                </span>
              </div>

              <p className="text-xs text-kinetic-sage leading-relaxed border-t border-b border-kinetic-border/60 py-4">
                Structured multi-week protocol to systematically resolve deep imbalances and lock in mobility gains.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-xs text-kinetic-light">
                  <Check className="w-4 h-4 text-kinetic-bronze shrink-0" />
                  <span>4 customized treatment sessions</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-kinetic-light">
                  <Check className="w-4 h-4 text-kinetic-bronze shrink-0" />
                  <span>Priority booking availability</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-kinetic-light">
                  <Check className="w-4 h-4 text-kinetic-bronze shrink-0" />
                  <span>Direct practitioner messaging access</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-kinetic-light">
                  <Check className="w-4 h-4 text-kinetic-bronze shrink-0" />
                  <span>15% savings compared to single rates</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button 
                onClick={onOpenBooking}
                className="w-full btn-bronze py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider"
              >
                SELECT RECOVERY BUNDLE
              </button>
            </div>
          </div>

          {/* Card 3: Monthly Membership */}
          <div className="bg-kinetic-card rounded-2xl p-8 border border-kinetic-border flex flex-col justify-between hover:border-kinetic-bronze/30 transition-all">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-kinetic-sage block mb-1">
                  SUSTAINED EXCELLENCE
                </span>
                <h3 className="font-syne text-xl font-bold uppercase tracking-wider text-kinetic-light">
                  MONTHLY MEMBERSHIP
                </h3>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-syne text-4xl font-extrabold text-kinetic-light">
                  ${getPrice(230, 310, 390)}
                </span>
                <span className="text-xs text-kinetic-sage uppercase font-medium">
                  / month (2 sessions)
                </span>
              </div>

              <p className="text-xs text-kinetic-sage leading-relaxed border-t border-b border-kinetic-border/60 py-4">
                Bi-weekly physical tuning designed for dedicated athletes, executives, and active movers.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-xs text-kinetic-light">
                  <Check className="w-4 h-4 text-kinetic-bronze shrink-0" />
                  <span>2 monthly sessions included</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-kinetic-light">
                  <Check className="w-4 h-4 text-kinetic-bronze shrink-0" />
                  <span>Unused sessions roll over anytime</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-kinetic-light">
                  <Check className="w-4 h-4 text-kinetic-bronze shrink-0" />
                  <span>20% off any additional sessions</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button 
                onClick={onOpenBooking}
                className="w-full btn-outline-bronze py-3 rounded-xl text-xs font-bold uppercase tracking-wider"
              >
                JOIN MEMBERSHIP
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
