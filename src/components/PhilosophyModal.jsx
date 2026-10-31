import React from 'react';
import { X, ShieldCheck, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

export default function PhilosophyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="bg-[#181512] border-2 border-[#382F27] rounded-3xl max-w-lg w-full p-6 sm:p-9 shadow-2xl relative overflow-hidden text-[#F4EDE4]">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#241E19] border border-[#382F27] flex items-center justify-center text-[#B8ACA0] hover:text-[#F4EDE4] hover:bg-[#302821] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div>
            <span className="text-[10px] font-space font-bold uppercase tracking-[0.25em] text-[#C99F72] block mb-1">
              MINHTRI CHAU'S CLINICAL STANDARD
            </span>
            <h3 className="font-bebas text-3xl sm:text-4xl text-[#F4EDE4] tracking-wide leading-none">
              MY PHILOSOPHY & PRACTICE
            </h3>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#B8ACA0] leading-relaxed font-sans">
            <p>
              At MCHAU MVT, I reject short-term passive fixes. Your body is a deeply intelligent, interconnected kinetic chain capable of extraordinary restoration when given the right manual input and neuromuscular feedback.
            </p>
            <p>
              My three foundational pillars — <strong className="text-[#F4EDE4] font-semibold">Understanding, Neuromuscular Integration, and Autonomy</strong> — ensure every athlete and client walks out with both immediate tissue relief and the physical agency to sustain long-term resilience.
            </p>
          </div>

          <div className="bg-[#201A15] border border-[#382F27] p-4 rounded-2xl space-y-2 text-xs text-[#E8DFC8]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C99F72]" />
              <span>No conveyor-belt routines or generic rubdowns</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C99F72]" />
              <span>Personalized 60, 90, and 120-minute focused attention</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C99F72]" />
              <span>Integration of table therapy with active movement</span>
            </div>
          </div>

          <div className="pt-2 text-right">
            <button
              onClick={onClose}
              className="btn-pill-cream text-xs py-2 px-6 cursor-pointer"
            >
              UNDERSTOOD
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
