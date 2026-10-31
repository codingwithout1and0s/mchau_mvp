import React, { useState } from 'react';
import { X, MapPin, Clock, Phone, Send, CheckCircle2, Calendar } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, onOpenBooking }) {
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

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

        {sent ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#C99F72]/20 text-[#C99F72] mx-auto flex items-center justify-center border-2 border-[#C99F72]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-bebas text-3xl text-[#F4EDE4]">
              MESSAGE RECEIVED!
            </h3>
            <p className="text-xs text-[#B8ACA0] max-w-xs mx-auto leading-relaxed">
              MinhTri's clinical desk will review your inquiry and follow up within 2 hours.
            </p>
            <button
              onClick={() => { setSent(false); onClose(); }}
              className="btn-pill-cream text-sm py-2 px-6"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-space font-bold uppercase tracking-[0.25em] text-[#C99F72] block mb-1">
                GET IN TOUCH WITH MINHTRI
              </span>
              <h3 className="font-bebas text-3xl sm:text-4xl text-[#F4EDE4] tracking-wide leading-none">
                CONTACT CLINICAL DESK
              </h3>
            </div>

            {/* Studio Info List */}
            <div className="bg-[#201A15] border border-[#382F27] p-4 rounded-2xl space-y-2.5 text-xs text-[#B8ACA0] font-sans">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#C99F72] shrink-0" />
                <span>1280 Kinetic Way, Suite 400, Montreal, QC H2B 3T8</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#C99F72] shrink-0" />
                <span>Mon – Sat: 8:00 AM – 7:00 PM (By Appointment)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C99F72] shrink-0" />
                <span>Direct Desk: (512) 890-2026</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="text-[10px] font-space font-bold uppercase tracking-widest text-[#B8ACA0] block mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  className="w-full bg-[#141210] border border-[#382F27] rounded-xl p-3 text-xs text-[#F4EDE4] outline-none focus:border-[#C99F72]"
                />
              </div>

              <div>
                <label className="text-[10px] font-space font-bold uppercase tracking-widest text-[#B8ACA0] block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  className="w-full bg-[#141210] border border-[#382F27] rounded-xl p-3 text-xs text-[#F4EDE4] outline-none focus:border-[#C99F72]"
                />
              </div>

              <div>
                <label className="text-[10px] font-space font-bold uppercase tracking-widest text-[#B8ACA0] block mb-1">
                  Inquiry / Injury Focus
                </label>
                <textarea
                  rows="3"
                  required
                  placeholder="Tell MinhTri about your athletic goals or chronic pain areas..."
                  className="w-full bg-[#141210] border border-[#382F27] rounded-xl p-3 text-xs text-[#F4EDE4] outline-none focus:border-[#C99F72]"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-pill-cream text-base py-3 justify-center shadow-lg cursor-pointer"
                >
                  <div className="btn-icon-circle w-7 h-7">
                    <Send className="w-3.5 h-3.5" />
                  </div>
                  <span>TRANSMIT MESSAGE</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
