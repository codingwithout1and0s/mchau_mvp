import React, { useState } from 'react';
import { Heart, Copy, Gift, Sparkles, Check } from 'lucide-react';
import StarburstBadge from './StarburstBadge';

export default function ReferralSection() {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const referralLink = "https://kineticmastery.com/invite?rmt=MINHTRI-CHAU-2026";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 rounded-3xl my-6 bg-[#161412] border-t border-[#2C241D]">
      <div className="max-w-4xl mx-auto">
        
        {/* Card */}
        <div className="bg-[#201A15] border-2 border-[#382F27] rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-[#C99F72]/15 rounded-full blur-[70px] pointer-events-none"></div>

          {/* Icon Badge */}
          <div className="w-14 h-14 rounded-full bg-[#1C1814] border-2 border-[#C99F72] mx-auto flex items-center justify-center text-[#C99F72] shadow-lg">
            <Gift className="w-6 h-6" />
          </div>

          {/* Title */}
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-[#F4EDE4] tracking-tight leading-none hero-title-shadow">
            SHARE THE RECOVERY WITH YOUR TRAINING PARTNERS
          </h2>

          {/* Subtext */}
          <p className="text-xs sm:text-sm md:text-base text-[#B8ACA0] leading-relaxed max-w-xl mx-auto font-sans">
            Athletic restoration is better shared. Refer a fellow runner, lifter, or friend to MinhTri Chau's practice, and both of you receive a complimentary 30-minute recovery upgrade on your next booking.
          </p>

          {/* CTA */}
          <div className="pt-2">
            <button 
              onClick={() => setShowModal(true)}
              className="btn-pill-cream text-base py-2.5 px-6 shadow-xl"
            >
              <div className="btn-icon-circle">
                <Sparkles className="w-4 h-4" />
              </div>
              <span>GET YOUR INVITATION PASS</span>
            </button>
          </div>

        </div>

      </div>

      {/* Invitation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#1C1814] border-2 border-[#382F27] p-6 sm:p-8 rounded-3xl max-w-md w-full space-y-5 text-[#F4EDE4]">
            <div className="flex justify-between items-center">
              <h3 className="font-bebas text-2xl text-[#F4EDE4]">
                YOUR CLIENT REFERRAL PASS
              </h3>
              <button onClick={() => setShowModal(false)} className="text-[#B8ACA0] hover:text-[#F4EDE4] cursor-pointer">✕</button>
            </div>

            <p className="text-xs text-[#B8ACA0] leading-relaxed">
              Share this personal link with friends to grant them a complimentary 30-minute bonus extension on their first clinical session with MinhTri Chau, RMT.
            </p>

            <div className="flex items-center bg-[#141210] border border-[#382F27] rounded-xl p-2">
              <input 
                type="text" 
                readOnly 
                value={referralLink} 
                className="bg-transparent text-xs text-[#F4EDE4] flex-1 outline-none font-mono px-2 overflow-ellipsis"
              />
              <button 
                onClick={handleCopy}
                className="bg-[#E8DFC8] text-[#1A1714] font-bebas text-base py-1.5 px-3 rounded-lg hover:bg-[#F4EDE4] cursor-pointer font-bold"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            <div className="text-center pt-1">
              <button onClick={() => setShowModal(false)} className="text-xs font-space text-[#B8ACA0] hover:text-[#F4EDE4] underline cursor-pointer">
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
