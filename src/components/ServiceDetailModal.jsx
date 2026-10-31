import React from 'react';
import { X, Check, Clock, Sparkles, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ServiceDetailModal({ service, onClose, onOpenBooking }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="bg-[#181512] border-2 border-[#382F27] rounded-3xl max-w-2xl w-full p-6 sm:p-9 shadow-2xl relative max-h-[92vh] overflow-y-auto text-[#F4EDE4]">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#241E19] border border-[#382F27] flex items-center justify-center text-[#B8ACA0] hover:text-[#F4EDE4] hover:bg-[#302821] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">

          {/* Header */}
          <div>
            <span className="text-[10px] font-space font-bold uppercase tracking-[0.25em] text-[#C99F72] block mb-1">
              CLINICAL THERAPY SPECIFICATION
            </span>
            <h3 className="font-bebas text-3xl sm:text-4xl text-[#F4EDE4] tracking-wide leading-none">
              {service.title}
            </h3>
            <p className="text-xs text-[#B8ACA0] font-space mt-1">
              {service.subtitle}
            </p>
          </div>

          {/* Image */}
          <div className="h-52 sm:h-60 rounded-2xl overflow-hidden border-2 border-[#2D241D] bg-[#141210] relative">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover filter contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/75 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-xs font-space text-[#E8DFC8]">
              Practiced by MinhTri Chau, RMT • Montreal Sanctuary Lab
            </div>
          </div>

          {/* Details */}
          <p className="text-xs sm:text-sm text-[#B8ACA0] leading-relaxed font-sans">
            {service.details}
          </p>

          {/* Benefits */}
          <div className="bg-[#201A15] border border-[#382F27] p-5 rounded-2xl space-y-3">
            <h4 className="font-bebas text-xl text-[#F4EDE4] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C99F72]" />
              <span>KEY PHYSIOLOGICAL BENEFITS</span>
            </h4>
            <div className="space-y-2 text-xs text-[#E8DFC8] font-sans">
              {service.benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C99F72] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Tiers */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-[#141210] border border-[#2D241D] p-3 rounded-xl">
              <span className="text-[10px] font-space text-[#B8ACA0] uppercase block">60 MIN</span>
              <span className="font-bebas text-2xl text-[#C99F72]">{service.price60 || '$145'}</span>
            </div>
            <div className="bg-[#141210] border border-[#C99F72]/50 p-3 rounded-xl bg-[#221B15]">
              <span className="text-[10px] font-space text-[#C99F72] uppercase block font-bold">90 MIN (POPULAR)</span>
              <span className="font-bebas text-2xl text-[#F4EDE4]">{service.price90 || '$195'}</span>
            </div>
            <div className="bg-[#141210] border border-[#2D241D] p-3 rounded-xl">
              <span className="text-[10px] font-space text-[#B8ACA0] uppercase block">120 MIN</span>
              <span className="font-bebas text-2xl text-[#C99F72]">{service.price120 || '$240'}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-end">
            <button
              onClick={onClose}
              className="btn-pill-dark text-xs py-2 px-6 justify-center"
            >
              <span>BACK TO MENU</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking(service.title);
              }}
              className="btn-pill-cream text-base py-2.5 px-6 justify-center shadow-lg"
            >
              <div className="btn-icon-circle w-7 h-7">
                <Calendar className="w-3.5 h-3.5" />
              </div>
              <span>BOOK THIS THERAPY</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
