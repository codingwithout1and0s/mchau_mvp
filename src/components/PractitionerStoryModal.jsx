import React from 'react';
import { X, Award, CheckCircle2, Sparkles, Calendar, Heart, Compass } from 'lucide-react';
import StarburstBadge from './StarburstBadge';

export default function PractitionerStoryModal({ isOpen, onClose, onOpenBooking }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="bg-[#181512] border-2 border-[#382F27] rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[92vh] overflow-y-auto text-[#F4EDE4]">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#241E19] border border-[#382F27] flex items-center justify-center text-[#B8ACA0] hover:text-[#F4EDE4] hover:bg-[#302821] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-8">

          {/* Header Profile with Starburst Badge */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-[#2C241D] pb-8">
            <div className="flex items-center gap-5">
              <img
                src="/assets/minhtri_hero_therapy.jpg"
                alt="MinhTri Chau, RMT"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover object-top border-3 border-[#C99F72] shadow-xl"
              />
              <div>
                <span className="text-[10px] font-space font-bold uppercase tracking-[0.25em] text-[#C99F72] block mb-1">
                  PRACTITIONER
                </span>
                <h3 className="font-bebas text-3xl sm:text-4xl text-[#F4EDE4] tracking-wide leading-none">
                  MINHTRI CHAU, RMT
                </h3>
                <p className="text-xs text-[#B8ACA0] font-space mt-1">
                  12+ Years Sports Massage, Neuromuscular & Fascia Therapy
                </p>
              </div>
            </div>

            <div className="hidden sm:block">
              <StarburstBadge text="MINHTRI CHAU • REGISTERED MASSAGE THERAPIST • " centerText="RMT\nMONREAL" />
            </div>
          </div>

          {/* Narrative Story */}
          <div className="space-y-4 text-xs sm:text-sm text-[#B8ACA0] leading-relaxed font-sans">
            <p>
              "My dedication to manual sports therapy and physical agency began out in the gym and in high-intensity athletics. Frustrated by superficial 50-minute spa rubs that merely smoothed over symptoms without addressing neuromuscular root causes, I spent over a decade immersing myself in myofascial anatomy, developmental kinesiology, and nervous system regulation."
            </p>
            <p>
              "At MCHAU MVT, there are no conveyor-belt treatments. Every session with me is completely 1-on-1, personalized, and grounded in anatomical science. We break down chronic compensatory tension, restore postural joint space, and equip you with the movement tools to stay out of pain permanently."
            </p>
          </div>

          {/* Clinical Accreditations */}
          <div className="bg-[#201A15] border border-[#382F27] p-5 sm:p-6 rounded-2xl space-y-4">
            <h4 className="font-bebas text-2xl text-[#F4EDE4] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#C99F72]" />
              <span>CLINICAL ACCREDITATIONS & METHODOLOGIES</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#E8DFC8] font-sans">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C99F72] shrink-0" />
                <span>Licensed & Registered Massage Therapist (RMT)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C99F72] shrink-0" />
                <span>Certified Functional Range Release (FRR)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C99F72] shrink-0" />
                <span>DNS (Dynamic Neuromuscular Stabilization)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C99F72] shrink-0" />
                <span>Myofascial Cupping & Instrument-Assisted Soft Tissue</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C99F72] shrink-0" />
                <span>Vagus Nerve & Parasympathetic Down-Regulation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C99F72] shrink-0" />
                <span>Active Release Technique (ART) & PNF Protocols</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-end">
            <button
              onClick={onClose}
              className="btn-pill-dark text-xs py-2 px-6 justify-center"
            >
              <span>CLOSE BIOGRAPHY</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="btn-pill-cream text-base py-2.5 px-7 justify-center shadow-lg"
            >
              <div className="btn-icon-circle w-7 h-7">
                <Calendar className="w-3.5 h-3.5" />
              </div>
              <span>RESERVE SESSION WITH MINHTRI</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
