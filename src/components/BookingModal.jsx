import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Sparkles, ChevronRight, ArrowLeft, Plus } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialService }) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(initialService || 'Sports Neuromuscular Therapy');
  const [duration, setDuration] = useState('90 min');
  const [addons, setAddons] = useState([]);
  const [date, setDate] = useState('2026-09-03');
  const [time, setTime] = useState('10:00 AM');
  const [clientInfo, setClientInfo] = useState({ name: '', email: '', phone: '', focusArea: '' });
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const toggleAddon = (addon) => {
    if (addons.includes(addon)) {
      setAddons(addons.filter((a) => a !== addon));
    } else {
      setAddons([...addons, addon]);
    }
  };

  const handleCompleteBooking = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    setStep(1);
    setAddons([]);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="bg-[#181512] border-2 border-[#382F27] rounded-3xl max-w-xl w-full p-6 sm:p-9 shadow-2xl relative overflow-hidden text-[#F4EDE4]">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#241E19] border border-[#382F27] flex items-center justify-center text-[#B8ACA0] hover:text-[#F4EDE4] hover:bg-[#302821] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          /* Confirmation Screen */
          <div className="py-6 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#C99F72]/20 text-[#C99F72] mx-auto flex items-center justify-center border-2 border-[#C99F72]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-bebas text-3xl sm:text-4xl text-[#F4EDE4]">
              APPOINTMENT RESERVED WITH MINHTRI!
            </h3>

            <p className="text-xs sm:text-sm text-[#B8ACA0] max-w-md mx-auto leading-relaxed font-sans">
              Thank you <span className="text-[#F4EDE4] font-semibold">{clientInfo.name || 'valued client'}</span>. Your personalized session for <span className="text-[#C99F72] font-semibold">{service}</span> ({duration}) is requested for <span className="text-[#F4EDE4] font-semibold">{date} at {time}</span>.
            </p>

            <div className="bg-[#141210] border border-[#2D241D] p-4 rounded-2xl text-left text-xs space-y-2 font-space">
              <div className="flex justify-between">
                <span className="text-[#B8ACA0]">Practitioner:</span>
                <span className="text-[#F4EDE4] font-bold">MinhTri Chau, RMT</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#B8ACA0]">Location:</span>
                <span className="text-[#F4EDE4]">Montreal Sanctuary Studio A</span>
              </div>
              {addons.length > 0 && (
                <div className="flex justify-between">
                  <span className="text-[#B8ACA0]">Add-ons:</span>
                  <span className="text-[#C99F72]">{addons.join(', ')}</span>
                </div>
              )}
              <div className="flex justify-between pt-2 border-t border-[#2D241D]">
                <span className="text-[#B8ACA0]">Intake Confirmation ID:</span>
                <span className="text-[#C99F72] font-bold">KM-MTC-9942</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleReset}
                className="btn-pill-cream text-sm py-2 px-8"
              >
                DONE & RETURN TO SITE
              </button>
            </div>
          </div>
        ) : (
          /* Multi-step Flow */
          <div className="space-y-6">

            {/* Header & Step Indicator */}
            <div>
              <span className="text-[10px] font-space font-bold uppercase tracking-[0.25em] text-[#C99F72] block mb-1">
                ONLINE CLINICAL SCHEDULER • MINHTRI CHAU, RMT
              </span>
              <h3 className="font-bebas text-2xl sm:text-3xl text-[#F4EDE4] leading-none">
                {step === 1 && '1. SELECT TREATMENT & DURATION'}
                {step === 2 && '2. CHOOSE DATE & CLINICAL ADD-ONS'}
                {step === 3 && '3. CLIENT INTAKE DETAILS'}
              </h3>

              {/* Progress Bar */}
              <div className="flex gap-2 mt-3">
                <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-[#C99F72]' : 'bg-[#2D241D]'}`}></div>
                <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-[#C99F72]' : 'bg-[#2D241D]'}`}></div>
                <div className={`h-1.5 flex-1 rounded-full ${step >= 3 ? 'bg-[#C99F72]' : 'bg-[#2D241D]'}`}></div>
              </div>
            </div>

            {/* STEP 1: Select Service & Duration */}
            {step === 1 && (
              <div className="space-y-4">
                <label className="text-xs font-space font-bold uppercase text-[#B8ACA0] block">
                  Select Therapy Modality:
                </label>
                <div className="space-y-2">
                  {[
                    'Sports Neuromuscular Therapy',
                    'Deep Tissue Integration',
                    'Active Mobility & DNS Drills',
                    'Nervous System & Vagus Reset'
                  ].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setService(s)}
                      className={`w-full p-3.5 rounded-2xl border-2 text-left text-xs sm:text-sm font-bebas tracking-wide flex items-center justify-between transition-all cursor-pointer ${service === s
                        ? 'border-[#C99F72] bg-[#221B15] text-[#F4EDE4] shadow-md'
                        : 'border-[#2D241D] bg-[#141210] text-[#B8ACA0] hover:border-[#C99F72]/40'
                        }`}
                    >
                      <span className="text-base sm:text-lg">{s}</span>
                      {service === s && <CheckCircle2 className="w-5 h-5 text-[#C99F72]" />}
                    </button>
                  ))}
                </div>

                <label className="text-xs font-space font-bold uppercase text-[#B8ACA0] block pt-1">
                  Select Session Duration:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['60 min', '90 min', '120 min'].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDuration(d)}
                      className={`py-2.5 rounded-xl border-2 font-bebas text-lg tracking-wider transition-all cursor-pointer ${duration === d
                        ? 'border-[#C99F72] bg-[#E8DFC8] text-[#1A1714] font-bold'
                        : 'border-[#2D241D] bg-[#141210] text-[#B8ACA0] hover:text-[#F4EDE4]'
                        }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setStep(2)}
                    className="w-full btn-pill-cream text-base py-3 justify-center shadow-lg"
                  >
                    <span>CONTINUE TO DATE & ADD-ONS</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Select Date & Addons */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-space font-bold uppercase text-[#B8ACA0] block mb-1">
                      Preferred Date:
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#141210] border-2 border-[#2D241D] rounded-xl p-2.5 text-xs text-[#F4EDE4] outline-none focus:border-[#C99F72]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-space font-bold uppercase text-[#B8ACA0] block mb-1">
                      Available Slot:
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-[#141210] border-2 border-[#2D241D] rounded-xl p-2.5 text-xs text-[#F4EDE4] outline-none focus:border-[#C99F72]"
                    >
                      {['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'].map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Add-ons */}
                <div className="space-y-2 pt-1">
                  <label className="text-xs font-space font-bold uppercase text-[#B8ACA0] block">
                    Clinical Enhancements (Optional):
                  </label>
                  <div className="space-y-2">
                    {[
                      { name: 'Myofascial Silicone Cupping', price: '+$25' },
                      { name: 'Hyperice Percussive Therapy', price: '+$20' },
                      { name: 'Warm Basalt Stone Accent', price: '+$30' }
                    ].map((item) => (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => toggleAddon(item.name)}
                        className={`w-full p-2.5 rounded-xl border text-xs font-medium flex items-center justify-between transition-all cursor-pointer ${addons.includes(item.name)
                          ? 'border-[#C99F72] bg-[#221B15] text-[#C99F72]'
                          : 'border-[#2D241D] bg-[#141210] text-[#B8ACA0] hover:text-[#F4EDE4]'
                          }`}
                      >
                        <span className="flex items-center gap-2">
                          <Plus className="w-3.5 h-3.5" />
                          <span>{item.name}</span>
                        </span>
                        <span className="font-mono font-bold text-[#F4EDE4]">{item.price}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-3">
                  <button
                    onClick={() => setStep(1)}
                    className="btn-pill-dark text-xs py-2 px-4 flex items-center gap-1"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>BACK</span>
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 btn-pill-cream text-base py-3 justify-center shadow-lg"
                  >
                    <span>CLIENT DETAILS</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Client Info */}
            {step === 3 && (
              <form onSubmit={handleCompleteBooking} className="space-y-3.5">
                <div className="space-y-3">
                  <div>
                    <label className="text-[10px] font-space font-bold uppercase tracking-widest text-[#B8ACA0] block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jordan Reed"
                      value={clientInfo.name}
                      onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                      className="w-full bg-[#141210] border-2 border-[#2D241D] rounded-xl p-2.5 text-xs text-[#F4EDE4] outline-none focus:border-[#C99F72]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-space font-bold uppercase tracking-widest text-[#B8ACA0] block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jordan@example.com"
                      value={clientInfo.email}
                      onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                      className="w-full bg-[#141210] border-2 border-[#2D241D] rounded-xl p-2.5 text-xs text-[#F4EDE4] outline-none focus:border-[#C99F72]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-space font-bold uppercase tracking-widest text-[#B8ACA0] block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(512) 555-0199"
                      value={clientInfo.phone}
                      onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                      className="w-full bg-[#141210] border-2 border-[#2D241D] rounded-xl p-2.5 text-xs text-[#F4EDE4] outline-none focus:border-[#C99F72]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-space font-bold uppercase tracking-widest text-[#B8ACA0] block mb-1">
                      Primary Pain or Athletic Goal
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Tight calves, marathon recovery, lower back ache"
                      value={clientInfo.focusArea}
                      onChange={(e) => setClientInfo({ ...clientInfo, focusArea: e.target.value })}
                      className="w-full bg-[#141210] border-2 border-[#2D241D] rounded-xl p-2.5 text-xs text-[#F4EDE4] outline-none focus:border-[#C99F72]"
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn-pill-dark text-xs py-2 px-4 flex items-center gap-1"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>BACK</span>
                  </button>
                  <button
                    type="submit"
                    className="flex-1 btn-pill-cream text-base py-3 justify-center shadow-lg"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>CONFIRM APPOINTMENT</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
