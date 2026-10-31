import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import StudioVisitSection from './components/StudioVisitSection';
import TreatmentsSection, { CLINICAL_TREATMENTS } from './components/TreatmentsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ReferralSection from './components/ReferralSection';
import DailyFlowSection from './components/DailyFlowSection';
import Footer from './components/Footer';

import MegaMenuModal from './components/MegaMenuModal';
import BookingModal from './components/BookingModal';
import PractitionerStoryModal from './components/PractitionerStoryModal';
import ServiceDetailModal from './components/ServiceDetailModal';
import ContactModal from './components/ContactModal';
import PhilosophyModal from './components/PhilosophyModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [initialBookingService, setInitialBookingService] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [philosophyOpen, setPhilosophyOpen] = useState(false);

  const handleOpenBooking = (serviceName = '') => {
    setInitialBookingService(serviceName);
    setBookingOpen(true);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#12100E] text-[#F4EDE4] p-2 sm:p-4 md:p-6 selection:bg-[#C99F72] selection:text-[#12100E]">
      
      {/* Outer Luxury Editorial Frame matching mockup */}
      <div className="editorial-canvas-frame relative overflow-hidden">
        
        {/* Top Floating Navbar */}
        <Navbar 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenMenu={() => setMenuOpen(true)}
        />

        {/* Main Content Flow */}
        <main className="space-y-2">
          
          {/* 1. Hero Section (Screenshots 1 & 2) */}
          <Hero 
            onOpenBooking={() => handleOpenBooking()}
            onOpenTreatments={() => scrollToSection('treatments')}
          />

          {/* 2. The MCHAU MVT Story (SMCHAU MVTcreenshot 3) */}
          <StorySection 
            onOpenStory={() => setStoryOpen(true)}
            onOpenBooking={() => handleOpenBooking()}
          />

          {/* 3. Step into MCHAU MVT Studio Visit (Screenshots 4 & 5) */}
          <StudioVisitSection 
            onOpenBooking={() => handleOpenBooking()}
            onOpenContact={() => setContactOpen(true)}
          />

          {/* 4. Treatments & Modality Menu */}
          <TreatmentsSection 
            onSelectTreatment={(treatment) => setSelectedService(treatment)}
            onOpenBooking={(serviceTitle) => handleOpenBooking(serviceTitle)}
          />

          {/* 5. Stories of Healing (Athlete Testimonials) */}
          <TestimonialsSection />

          {/* 6. Referral & Community Gift Pass */}
          <ReferralSection />

          {/* 7. Daily Flow (Instagram Grid) */}
          <DailyFlowSection />

        </main>

        {/* Footer */}
        <Footer 
          onOpenContact={() => setContactOpen(true)}
          onOpenPhilosophy={() => setPhilosophyOpen(true)}
          onOpenStory={() => setStoryOpen(true)}
        />

      </div>

      {/* Interactive Modals */}
      <MegaMenuModal 
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
        onOpenStory={() => setStoryOpen(true)}
        onOpenTreatments={() => scrollToSection('treatments')}
        onOpenStudio={() => scrollToSection('story')}
        onOpenContact={() => setContactOpen(true)}
        onOpenPhilosophy={() => setPhilosophyOpen(true)}
      />

      <BookingModal 
        isOpen={bookingOpen} 
        onClose={() => setBookingOpen(false)}
        initialService={initialBookingService}
      />

      <PractitionerStoryModal 
        isOpen={storyOpen} 
        onClose={() => setStoryOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />

      <ServiceDetailModal 
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenBooking={(serviceTitle) => handleOpenBooking(serviceTitle)}
      />

      <ContactModal 
        isOpen={contactOpen} 
        onClose={() => setContactOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />

      <PhilosophyModal 
        isOpen={philosophyOpen} 
        onClose={() => setPhilosophyOpen(false)}
      />

    </div>
  );
}
