import React, { useState } from 'react';
import { Calendar, Check, Sparkles, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

export const CLINICAL_TREATMENTS = [
  {
    id: 'sports-neuromuscular',
    title: 'SPORTS NEUROMUSCULAR THERAPY',
    subtitle: 'Athletic Recovery & Performance Reset',
    image: '/assets/deep_tissue.png',
    description: 'Targeted sports massage designed for athletes and active individuals to address acute strain, improve muscular elasticity, and accelerate tissue recovery.',
    details: 'MinhTri Chau applies specialized trigger point therapy, active pin-and-stretch techniques, and myofascial decompression to unlock stubborn adhesions and restore peak power output.',
    benefits: [
      'Relieves intense tendon and muscle tightness',
      'Accelerates muscular recovery between hard training blocks',
      'Breaks down deep cross-fiber scar tissue knots',
      'Enhances power output and joint mobility'
    ],
    price60: '$145',
    price90: '$195',
    price120: '$240'
  },
  {
    id: 'deep-tissue-integration',
    title: 'DEEP TISSUE INTEGRATION',
    subtitle: 'Structural Alignment & Chronic Pain Release',
    image: '/assets/mobility_coaching.png',
    description: 'Mindful, high-pressure manual therapy targeting deep postural muscle layers to resolve chronic neck, lower back, and shoulder pain patterns.',
    details: 'Focuses on the deeper layers of fascia and muscle tissue. Slower strokes and sustained deep pressure alleviate chronic tension patterns accumulated from sedentary desk posture or repetitive strain.',
    benefits: [
      'Eliminates chronic lower back and thoracic tightness',
      'Restores optimal postural symmetry and spinal decompression',
      'Increases local tissue oxygenation and blood circulation',
      'Decreases resting tension in upper traps and neck'
    ],
    price60: '$140',
    price90: '$190',
    price120: '$235'
  },
  {
    id: 'mobility-dns',
    title: 'ACTIVE MOBILITY & DNS DRILLS',
    subtitle: 'Joint Longevity & Motor Control Homework',
    image: '/assets/daily_flow_2.png',
    description: 'Guided Dynamic Neuromuscular Stabilization (DNS) and Controlled Articular Rotations (CARs) to lock in passive therapy gains with active control.',
    details: 'Bridges the critical gap between passive table treatment and athletic movement. MinhTri guides you through developmental kinesiology drills to retrain your brain and nervous system for pain-free motion.',
    benefits: [
      'Expands active joint range of motion safely',
      'Reinforces kinetic chain coordination & diaphragm stability',
      'Includes custom takeaway video homework protocols',
      'Dramatically reduces reinjury risk during sport'
    ],
    price60: '$135',
    price90: '$180',
    price120: '$225'
  },
  {
    id: 'nervous-system-reset',
    title: 'NERVOUS SYSTEM & VAGUS RESET',
    subtitle: 'Hot Basalt Stones & Craniosacral Rest',
    image: '/assets/nervous_system_reset.png',
    description: 'Slow, rhythmic myofascial work paired with heated basalt stones and diaphragmatic pacing to down-regulate your sympathetic nervous system.',
    details: 'Transitions your body from chronic fight-or-flight stress into deep parasympathetic cellular healing. Relieves tension headaches, nervous exhaustion, and central nervous fatigue.',
    benefits: [
      'Soothes hyper-aroused sympathetic fight-or-flight state',
      'Promotes deep restorative REM sleep quality',
      'Alleviates stress-induced jaw clenching & tension headaches',
      'Restores cellular recovery and systemic balance'
    ],
    price60: '$150',
    price90: '$200',
    price120: '$250'
  }
];

export default function TreatmentsSection({ onSelectTreatment, onOpenBooking }) {
  const [selectedDuration, setSelectedDuration] = useState('90');

  return (
    <section id="treatments" className="py-20 sm:py-28 px-4 sm:px-8 rounded-3xl my-6 bg-[#161412] border-t border-[#2C241D]">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">

        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2C241D] pb-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-[11px] font-space uppercase tracking-[0.2em] text-[#C99F72] font-bold block">
              CLINICAL TREATMENT MODALITIES
            </span>
            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-[#F4EDE4] tracking-tight leading-none hero-title-shadow">
              TREATMENTS & RECOVERY MENU
            </h2>
            <p className="text-xs sm:text-sm text-[#B8ACA0] leading-relaxed">
              Every appointment is completely personalized. Choose your preferred modality or let me tailor a session for you.
            </p>
          </div>

          {/* Interactive Duration Selector */}
          <div className="bg-[#201A15] border border-[#382F27] p-1.5 rounded-full inline-flex items-center gap-1 self-start md:self-auto">
            {['60', '90', '120'].map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDuration(d)}
                className={`px-4 sm:px-5 py-2 rounded-full font-bebas text-base sm:text-lg tracking-wider transition-all cursor-pointer ${selectedDuration === d
                  ? 'bg-[#E8DFC8] text-[#1A1714] shadow-md'
                  : 'text-[#B8ACA0] hover:text-[#F4EDE4]'
                  }`}
              >
                {d} MINUTES
              </button>
            ))}
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CLINICAL_TREATMENTS.map((treatment) => {
            const currentPrice =
              selectedDuration === '60' ? treatment.price60 :
                selectedDuration === '90' ? treatment.price90 : treatment.price120;

            return (
              <div
                key={treatment.id}
                className="bg-[#1F1914] border-2 border-[#362C23] hover:border-[#C99F72]/50 rounded-3xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 shadow-xl hover:-translate-y-1"
              >
                <div className="space-y-5">

                  {/* Photo & Pricing Banner */}
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#141210] border border-[#2D241D]">
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/85 via-transparent to-transparent"></div>

                    {/* Price Pill */}
                    <div className="absolute top-3 right-3 bg-[#1C1814]/90 backdrop-blur-md border border-[#C99F72]/40 px-3 py-1 rounded-full text-xs font-bebas text-[#C99F72] text-base tracking-wider">
                      {currentPrice} <span className="text-[10px] text-[#B8ACA0] font-space font-normal">/ {selectedDuration}m</span>
                    </div>

                    <div className="absolute bottom-3 left-3 text-xs font-space text-[#E8DFC8] font-medium">
                      MinhTri Chau • Montreal Clinical Studio
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-space uppercase tracking-[0.2em] text-[#C99F72] font-semibold block">
                      {treatment.subtitle}
                    </span>
                    <h3 className="font-bebas text-2xl sm:text-3xl text-[#F4EDE4] tracking-wide group-hover:text-[#C99F72] transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B8ACA0] leading-relaxed">
                      {treatment.description}
                    </p>
                  </div>

                  {/* Key Benefits Checklist */}
                  <div className="bg-[#181410] border border-[#2D241D] p-3.5 rounded-xl space-y-2 text-xs text-[#E8DFC8] font-sans">
                    {treatment.benefits.slice(0, 3).map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#C99F72] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Actions */}
                <div className="pt-6 flex items-center justify-between gap-3 border-t border-[#2C241D] mt-6">
                  <button
                    onClick={() => onSelectTreatment(treatment)}
                    className="text-xs font-bebas text-[#C99F72] hover:text-[#F4EDE4] uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                  >
                    <span>CLINICAL DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(treatment.title)}
                    className="btn-pill-cream text-sm py-1.5 px-4 shadow"
                  >
                    <div className="btn-icon-circle w-6 h-6">
                      <Calendar className="w-3 h-3" />
                    </div>
                    <span>BOOK {selectedDuration}M</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
