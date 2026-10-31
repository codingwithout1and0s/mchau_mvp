import React from 'react';

export const SERVICES_DATA = [
  {
    id: 'deep-tissue',
    title: 'DEEP TISSUE INTEGRATION',
    subtitle: 'Targeted Manual Release & Realignment',
    image: '/assets/deep_tissue.png',
    description: 'Targeted, mindful manual release to address chronic pain patterns and restore balance in your structural alignment.',
    details: 'Utilizing specialized myofascial release, trigger point therapy, and deep friction techniques, Deep Tissue Integration breaks down dense adhesion knots, eases tight fascia, and releases tension patterns accumulated from high training loads or sedentary strain.',
    benefits: [
      'Relieves chronic back, neck, and shoulder tightness',
      'Restores optimal postural symmetry & joint space',
      'Accelerates muscular recovery post-training',
      'Improves circulation and local tissue oxygenation'
    ],
    duration: '60 min / 90 min / 120 min',
    price: '$140 - $210'
  },
  {
    id: 'mobility-coaching',
    title: 'MOBILITY COACHING',
    subtitle: 'Active Movement & Joint Resilience',
    image: '/assets/mobility_coaching.png',
    description: 'Active, guided movement protocols designed to restore joint health, flexibility, and overall bodily resilience.',
    details: 'Combines Controlled Articular Rotations (CARs), PNF stretching, and active motor control drills to expand active range of motion. Designed for athletes and active individuals seeking pain-free physical freedom.',
    benefits: [
      'Expands active joint range of motion safely',
      'Reinforces kinetic chain coordination & stability',
      'Reduces injury vulnerability during daily activities',
      'Includes personalized movement homework protocols'
    ],
    duration: '60 min / 90 min',
    price: '$130 - $185'
  },
  {
    id: 'nervous-system-reset',
    title: 'NERVOUS SYSTEM RESET',
    subtitle: 'Vagus Nerve & Restorative Rest',
    image: '/assets/nervous_system_reset.png',
    description: 'Gentle, rhythmic techniques focused on down-regulating your nervous system for deep, restorative rest.',
    details: 'Features slow craniosacral rhythms, hot basalt stone therapy, and diaphragmatic breathing integration to transition your body from sympathetic fight-or-flight stress into deep parasympathetic cellular repair.',
    benefits: [
      'Calms hyper-aroused sympathetic nervous system',
      'Promotes deep REM sleep quality and cellular rest',
      'Alleviates tension headaches & stress tightness',
      'Soothes central nervous system fatigue'
    ],
    duration: '60 min / 90 min / 120 min',
    price: '$150 - $220'
  }
];

export default function ServicesSection({ onSelectService }) {
  return (
    <section id="therapy" className="py-24 sm:py-32 px-6 lg:px-12 bg-[#08100B] border-t border-[#162219]">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-14">

        {/* Centered Section Header matching mockup */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#F0F4F1]">
            PROVIDING YOU WITH MY HOLISTIC APPROACH
          </h2>
          <p className="text-[#9AA89C] text-xs sm:text-sm md:text-base leading-relaxed">
            Integrative therapies designed to restore balance to your nervous system and mobility to your everyday movement.
          </p>
        </div>

        {/* 3-Card Grid matching mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="luxury-card p-4 sm:p-5 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-[#070C09]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover filter grayscale contrast-115 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2.5 px-1">
                  <h3 className="font-heading text-sm sm:text-base font-bold tracking-wider text-[#F0F4F1] group-hover:text-[#C89762] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#9AA89C] leading-relaxed">
                    {service.description}
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
