import React from 'react';
import { X, Calendar, Sparkles, MapPin, Phone, Mail, Clock, ArrowUpRight, Award, Compass } from 'lucide-react';

export default function MegaMenuModal({
  isOpen,
  onClose,
  onOpenBooking,
  onOpenStory,
  onOpenTreatments,
  onOpenStudio,
  onOpenContact,
  onOpenPhilosophy
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="bg-[#181512] border-2 border-[#382F27] rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl relative overflow-hidden text-[#F4EDE4]">

        {/* Subtle background glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#C99F72]/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[#2C241D] pb-6">
          <div className="flex items-center gap-3">
            <span className="font-bebas text-3xl tracking-widest text-[#F4EDE4]">
              MCHAU MVT
            </span>
            <span className="text-[10px] font-space uppercase tracking-[0.2em] bg-[#2C241D] text-[#C99F72] px-2.5 py-1 rounded-full font-bold">
              MinhTri Chau, RMT
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#241E19] border border-[#382F27] flex items-center justify-center text-[#E8DFC8] hover:text-[#F4EDE4] hover:bg-[#302821] transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-8 items-start">

          {/* Main Navigation Links */}
          <div className="md:col-span-7 space-y-3">
            <span className="text-[11px] font-space uppercase tracking-[0.2em] text-[#C99F72] block mb-2 font-bold">
              EXPLORE THE SANCTUARY
            </span>

            {[
              { label: '01. BOOK A SESSION', action: () => { onClose(); onOpenBooking(); }, highlight: true },
              { label: '02. THE KINETIC STORY', action: () => { onClose(); onOpenStory(); } },
              { label: '03. TREATMENTS & MODALITIES', action: () => { onClose(); onOpenTreatments(); } },
              { label: '04. THE SANCTUARY STUDIO', action: () => { onClose(); onOpenStudio(); } },
              { label: '05. CLINICAL PHILOSOPHY', action: () => { onClose(); onOpenPhilosophy(); } },
              { label: '06. CONTACT CLINICAL DESK', action: () => { onClose(); onOpenContact(); } },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={item.action}
                className={`w-full text-left py-2.5 px-4 rounded-xl flex items-center justify-between group transition-all cursor-pointer ${item.highlight
                  ? 'bg-[#E8DFC8] text-[#1A1714] font-bebas text-2xl hover:bg-[#F4EDE4] shadow-md'
                  : 'hover:bg-[#241E19] text-[#E8DFC8] hover:text-[#F4EDE4] font-bebas text-2xl tracking-wide'
                  }`}
              >
                <span>{item.label}</span>
                <ArrowUpRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${item.highlight ? 'text-[#1A1714]' : 'text-[#C99F72]'
                  }`} />
              </button>
            ))}
          </div>

          {/* Practitioner Info & Quick Contact Card */}
          <div className="md:col-span-5 bg-[#201A15] border border-[#382F27] rounded-2xl p-6 space-y-5">
            <div className="flex items-center gap-3.5">
              <img
                src="/assets/minhtri_hero_therapy.jpg"
                alt="MinhTri Chau, RMT"
                className="w-14 h-14 rounded-full object-cover object-top border-2 border-[#C99F72] shadow-md"
              />
              <div>
                <h4 className="font-bebas text-xl text-[#F4EDE4] tracking-wide">
                  MINHTRI CHAU
                </h4>
                <p className="text-[11px] text-[#C99F72] font-space font-semibold uppercase tracking-wider">
                  Registered Massage Therapist
                </p>
                <p className="text-[10px] text-[#B8ACA0]">
                  Sports Therapy & Neuromuscular
                </p>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-[#B8ACA0] border-t border-[#2E251E] pt-4 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C99F72] shrink-0 mt-0.5" />
                <span>1280 Kinetic Way, Suite 400, Montreal, QC H2B 3T8</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C99F72] shrink-0" />
                <span>Mon – Sat: 8:00 AM – 7:00 PM</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C99F72] shrink-0" />
                <span>(512) 890-2026</span>
              </div>
            </div>

            <button
              onClick={() => { onClose(); onOpenBooking(); }}
              className="w-full btn-pill-cream text-base py-2.5 justify-center shadow-lg"
            >
              <div className="btn-icon-circle w-7 h-7">
                <Calendar className="w-3.5 h-3.5" />
              </div>
              <span>RESERVE APPOINTMENT</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
