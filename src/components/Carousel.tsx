import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Handshake, Calendar, Sparkles } from 'lucide-react';
import { type PageId } from './Navigation';

interface Slide {
  image: string;
  tagline: string;
  location: string;
}

const SLIDES: Slide[] = [
  {
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049&auto=format&fit=crop',
    tagline: 'Luxury Resort & Asset Management',
    location: 'Austin • Dallas • Houston'
  },
  {
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop',
    tagline: 'Premium Branded Hotel Operations',
    location: 'Texas & Midwest Portfolio'
  },
  {
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop',
    tagline: 'Boutique & Vacation Destinations',
    location: 'Strategic Hospitality Investments'
  },
  {
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop',
    tagline: 'Comprehensive Hospitality Lifecycle',
    location: 'Development • Revenue • Stewardship'
  }
];

interface CarouselHeroProps {
  setActivePage?: (page: PageId) => void;
}

export const Carousel: React.FC<CarouselHeroProps> = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<any>(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 6500);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    resetTimer();
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    resetTimer();
  };

  const navigateToContact = () => {
    const cta = document.getElementById('cta-section');
    if (cta) {
      cta.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[1080px] flex items-center justify-center overflow-hidden group select-none">
      {/* Background Slides */}
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {/* Background Image with Ken Burns zoom */}
          <div
            className={`w-full h-full bg-cover bg-center transform transition-transform duration-[7000ms] ease-out ${
              index === current ? 'scale-105' : 'scale-100'
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
            }}
          />
          {/* Consistent full-bleed overlay across the complete hero section */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/45 to-navy-dark/80" />
        </div>
      ))}

      {/* Main Hero Content Container with Framer Motion Stagger */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center mt-12 sm:mt-16">
        
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-medium/80 border border-gold-medium/30 backdrop-blur-md mb-6 shadow-lg"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
          </motion.div>
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-gold-bright uppercase">
            Las Colinas Hospitality Management
          </span>
        </motion.div>

        {/* Main Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide leading-tight sm:leading-snug max-w-3xl mb-5 drop-shadow-md"
        >
          Elevating Hospitality Assets.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-bright via-gold-medium to-gold-dark italic font-normal">
            Delivering Exceptional Results.
          </span>
        </motion.h1>

        {/* Gold Ornament Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-3 w-full my-3 sm:my-4"
        >
          <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent to-gold-medium/80" />
          <div className="w-1.5 h-1.5 rotate-45 border border-gold-bright bg-gold-medium" />
          <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent to-gold-medium/80" />
        </motion.div>

        {/* Signature Tagline Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="bg-navy-dark/70 backdrop-blur-md border border-gold-medium/30 px-5 sm:px-8 py-2 sm:py-2.5 rounded-md mb-6 sm:mb-8 shadow-xl"
        >
          <p className="font-serif text-sm sm:text-base md:text-lg text-gold-bright font-light tracking-wide italic">
            "Your property. Our Expertise. Shared Success."
          </p>
        </motion.div>

        {/* Call-to-Action Buttons with Spring Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-row items-center justify-center gap-3 sm:gap-5 w-auto max-w-full flex-nowrap"
        >
          <motion.button
            onClick={navigateToContact}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(212, 175, 55, 0.35)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-gold-medium via-gold-bright to-gold-medium text-navy-dark font-bold tracking-wider sm:tracking-widest text-[11px] sm:text-xs uppercase rounded shadow-xl transition-all duration-300 group cursor-pointer whitespace-nowrap flex-shrink-0"
          >
            <Handshake className="w-3.5 sm:w-4 h-3.5 sm:h-4 transition-transform group-hover:scale-110" />
            <span>Partner With Us</span>
          </motion.button>

          <motion.button
            onClick={navigateToContact}
            whileHover={{ scale: 1.05, borderColor: "rgba(255, 215, 0, 0.8)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-3.5 bg-navy-dark/80 hover:bg-navy-medium border border-gold-medium text-gold-medium hover:text-gold-bright font-bold tracking-wider sm:tracking-widest text-[11px] sm:text-xs uppercase rounded backdrop-blur-md shadow-lg transition-all duration-300 group cursor-pointer whitespace-nowrap flex-shrink-0"
          >
            <Calendar className="w-3.5 sm:w-4 h-3.5 sm:h-4 transition-transform group-hover:scale-110" />
            <span>Schedule a Consultation</span>
          </motion.button>
        </motion.div>

      </div>

      {/* Slide Navigation Left/Right Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-navy-dark/70 text-gold-medium border border-gold-medium/20 hover:bg-gold-medium hover:text-navy-dark transition-all duration-300 opacity-70 hover:opacity-100 focus:outline-none shadow-xl cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-navy-dark/70 text-gold-medium border border-gold-medium/20 hover:bg-gold-medium hover:text-navy-dark transition-all duration-300 opacity-70 hover:opacity-100 focus:outline-none shadow-xl cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>


    </section>
  );
};
