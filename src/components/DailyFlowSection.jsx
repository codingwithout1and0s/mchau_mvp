import React, { useState } from 'react';
import { ArrowRight, Maximize2, Heart, MessageCircle, Send, Bookmark, Camera } from 'lucide-react';

export default function DailyFlowSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const GALLERY = [
    { id: 1, src: '/assets/daily_flow_1.png', title: 'Restorative Botanical Blends & Linens' },
    { id: 2, src: '/assets/daily_flow_2.png', title: 'Daily Spine Mobility Protocols' },
    { id: 3, src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80', title: 'Montreal Sanctuary Studio' },
    { id: 4, src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80', title: 'Neuromuscular Foam & Ball Tools' }
  ];

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-8 rounded-3xl my-6 bg-[#161412] border-t border-[#2C241D]">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#2C241D] pb-6">
          <div>
            <span className="text-[11px] font-space uppercase tracking-[0.2em] text-[#C99F72] font-bold block mb-1">
              COMMUNITY & DIARY
            </span>
            <h2 className="font-bebas text-5xl sm:text-6xl text-[#F4EDE4] tracking-tight leading-none hero-title-shadow">
              THE DAILY KINETIC FLOW
            </h2>
            <p className="text-xs text-[#B8ACA0] mt-1 font-space">
              Follow MinhTri Chau on Instagram @MCHAU MVT
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-dark text-xs py-2 px-4 self-start sm:self-auto"
          >
            <div className="btn-icon-circle w-6 h-6">
              <Camera className="w-3.5 h-3.5" />
            </div>
            <span>FOLLOW ON INSTAGRAM</span>
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-stretch">

          {/* Item 1: Oil & Linens */}
          <div
            onClick={() => setSelectedImage(GALLERY[0])}
            className="relative aspect-square rounded-2xl overflow-hidden bg-[#201A15] border-2 border-[#362C23] group cursor-pointer shadow-lg"
          >
            <img
              src={GALLERY[0].src}
              alt={GALLERY[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-105"
            />
            <div className="absolute inset-0 bg-[#141210]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
              <Maximize2 className="w-6 h-6 text-[#C99F72]" />
            </div>
          </div>

          {/* Item 2: Instagram Post Card Mockup */}
          <div
            onClick={() => setSelectedImage(GALLERY[1])}
            className="bg-[#FAF7F2] text-[#121212] rounded-2xl p-3 flex flex-col justify-between shadow-2xl border-2 border-[#E8DFC8] group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-1.5 border-b border-gray-200">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-[#1C1814] flex items-center justify-center text-[7px] text-[#C99F72] font-bold">
                  KM
                </div>
                <span className="text-[10px] font-bold text-gray-800 tracking-tight">kineticmastery</span>
              </div>
              <span className="text-[10px] text-gray-400">•••</span>
            </div>

            {/* Photo */}
            <div className="my-1.5 rounded-lg overflow-hidden aspect-[5/4] bg-black">
              <img
                src={GALLERY[1].src}
                alt="Movement Practice"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Action Bar */}
            <div>
              <div className="flex items-center justify-between text-gray-800 text-[11px] pt-1">
                <div className="flex items-center gap-2">
                  <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                  <MessageCircle className="w-3.5 h-3.5 text-gray-700" />
                  <Send className="w-3.5 h-3.5 text-gray-700" />
                </div>
                <Bookmark className="w-3.5 h-3.5 text-gray-700" />
              </div>
              <p className="text-[9px] text-gray-700 font-sans line-clamp-1 mt-1 font-medium">
                <span className="font-bold text-gray-900 mr-1">kineticmastery</span>
                Spine decompression drills for runners...
              </p>
            </div>
          </div>

          {/* Item 3: Studio Lounge */}
          <div
            onClick={() => setSelectedImage(GALLERY[2])}
            className="relative aspect-square rounded-2xl overflow-hidden bg-[#201A15] border-2 border-[#362C23] group cursor-pointer shadow-lg"
          >
            <img
              src={GALLERY[2].src}
              alt={GALLERY[2].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[#141210]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
              <Maximize2 className="w-6 h-6 text-[#C99F72]" />
            </div>
          </div>

          {/* Item 4: Equipment Studio */}
          <div
            onClick={() => setSelectedImage(GALLERY[3])}
            className="relative aspect-square rounded-2xl overflow-hidden bg-[#201A15] border-2 border-[#362C23] group cursor-pointer shadow-lg"
          >
            <img
              src={GALLERY[3].src}
              alt={GALLERY[3].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[#141210]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
              <Maximize2 className="w-6 h-6 text-[#C99F72]" />
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <div className="relative max-w-2xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-[#F4EDE4] hover:text-[#C99F72] text-xs font-bebas text-lg tracking-wider cursor-pointer"
            >
              CLOSE ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl border-2 border-[#382F27]"
            />
            <p className="text-xs text-[#B8ACA0] mt-3 font-space">
              {selectedImage.title} • MinhTri Chau, RMT
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
