import React, { useState } from 'react';
import EmblemLogo from './EmblemLogo';

export default function Footer({ onOpenContact, onOpenPhilosophy, onOpenStory }) {
  const [legalModal, setLegalModal] = useState(null);

  return (
    <footer className="bg-[#12100E] border-t-2 border-[#2C241D] py-14 px-4 sm:px-8 text-[#B8ACA0] rounded-3xl mt-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Brand Logo Left */}
        <div>
          <EmblemLogo />
        </div>

        {/* Center Links */}
        <nav className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 font-bebas text-lg tracking-widest text-[#E8DFC8]">
          <button
            onClick={() => setLegalModal('privacy')}
            className="hover:text-[#C99F72] transition-colors cursor-pointer"
          >
            PRIVACY POLICY
          </button>
          <button
            onClick={() => setLegalModal('terms')}
            className="hover:text-[#C99F72] transition-colors cursor-pointer"
          >
            TERMS OF SERVICE
          </button>
          <button
            onClick={onOpenPhilosophy}
            className="hover:text-[#C99F72] transition-colors cursor-pointer"
          >
            MY PHILOSOPHY
          </button>
          <button
            onClick={onOpenContact}
            className="hover:text-[#C99F72] transition-colors cursor-pointer"
          >
            CONTACT DESK
          </button>
        </nav>

        {/* Right Info */}
        <div className="text-[11px] font-space uppercase tracking-[0.16em] text-[#7F7367] text-center md:text-right space-y-1">
          <div>© 2026 MCHAU MVT • MINHTRI CHAU, RMT</div>
          <div className="text-[#C99F72]">MONTREAL, QUEBEC • INVIDIVUALIZED RECOVERY</div>
        </div>

      </div>

      {/* Legal Info Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#1C1814] border-2 border-[#382F27] p-6 sm:p-8 rounded-3xl max-w-md w-full space-y-4 text-[#F4EDE4]">
            <div className="flex justify-between items-center border-b border-[#2E251E] pb-3">
              <h3 className="font-bebas text-2xl text-[#F4EDE4]">
                {legalModal === 'privacy' ? 'Client Privacy Policy' : 'Terms of Service'}
              </h3>
              <button onClick={() => setLegalModal(null)} className="text-[#B8ACA0] text-sm hover:text-[#F4EDE4] cursor-pointer">✕</button>
            </div>
            <div className="text-xs text-[#B8ACA0] leading-relaxed space-y-2 font-sans">
              {legalModal === 'privacy' ? (
                <p>Client clinical notes, postural evaluations, and intake details are encrypted under Quebec's Act Respecting Health Information and Massage Therapy Board standards.</p>
              ) : (
                <p>Appointments require a 24-hour rescheduling notice. Packages and session credits remain valid without expiration date.</p>
              )}
            </div>
            <div className="pt-2 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="btn-pill-cream text-xs py-1 px-4"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
