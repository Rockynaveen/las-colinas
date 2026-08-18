import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for Scroll-to-Top visibility
  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScrollVisibility, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFooterNav = (target: string) => {
    if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const sectionMap: Record<string, string> = {
      'about': 'about-teaser',
      'about-overview': 'about-teaser',
      'services': 'services-showcase',
      'portfolio': 'portfolio-showcase',
      'team': 'team-showcase',
      'careers': 'team-showcase',
      'contact': 'cta-section',
    };
    const targetId = sectionMap[target] || target;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-navy-dark text-white antialiased font-sans select-text">
      {/* Sticky Header Navigation */}
      <Navigation />

      {/* Main Page Area */}
      <main className="flex-grow">
        <Home />
      </main>

      {/* Premium Clean Box-Free Luxury Footer */}
      <footer className="bg-[#050914] border-t border-gold-medium/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-left relative overflow-hidden">
        
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[850px] h-[300px] bg-[radial-gradient(circle,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto space-y-12 relative z-10"
        >
          
          {/* Main 3-Column Open Layout (No Boxes) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
            
            {/* Column 1: Brand (5 Cols) */}
            <div className="md:col-span-5 space-y-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                onClick={() => handleFooterNav('home')} 
                className="cursor-pointer inline-block"
              >
                <img
                  src="/images/las-colinas-logo-white.png"
                  alt="Las Colinas Hospitality Management"
                  className="h-16 sm:h-20 w-auto object-contain select-none"
                />
              </motion.div>

              <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed max-w-md">
                We provide personalized service over corporate bureaucracy with disciplined financial and operational acumen. Dedicated to owner ROI and asset appreciation across branded and boutique properties.
              </p>
            </div>

            {/* Column 2: Quick Links (3 Cols) */}
            <div className="md:col-span-3 space-y-5">
              <h4 className="text-xs font-bold tracking-[0.25em] text-gold-bright uppercase pb-2 border-b border-gold-medium/20">
                Quick Links
              </h4>

              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-light">
                <li>
                  <button 
                    onClick={() => handleFooterNav('home')} 
                    className="hover:text-gold-bright transition-colors cursor-pointer flex items-center gap-2 group text-left"
                  >
                    <span className="text-gold-medium/60 group-hover:text-gold-bright font-bold">·</span>
                    <span className="group-hover:translate-x-1 transition-transform">Home</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFooterNav('about')} 
                    className="hover:text-gold-bright transition-colors cursor-pointer flex items-center gap-2 group text-left"
                  >
                    <span className="text-gold-medium/60 group-hover:text-gold-bright font-bold">·</span>
                    <span className="group-hover:translate-x-1 transition-transform">About Us</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFooterNav('services')} 
                    className="hover:text-gold-bright transition-colors cursor-pointer flex items-center gap-2 group text-left"
                  >
                    <span className="text-gold-medium/60 group-hover:text-gold-bright font-bold">·</span>
                    <span className="group-hover:translate-x-1 transition-transform">Our Services</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFooterNav('portfolio')} 
                    className="hover:text-gold-bright transition-colors cursor-pointer flex items-center gap-2 group text-left"
                  >
                    <span className="text-gold-medium/60 group-hover:text-gold-bright font-bold">·</span>
                    <span className="group-hover:translate-x-1 transition-transform">Portfolio</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFooterNav('team')} 
                    className="hover:text-gold-bright transition-colors cursor-pointer flex items-center gap-2 group text-left"
                  >
                    <span className="text-gold-medium/60 group-hover:text-gold-bright font-bold">·</span>
                    <span className="group-hover:translate-x-1 transition-transform">Leadership & Team</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFooterNav('careers')} 
                    className="hover:text-gold-bright transition-colors cursor-pointer flex items-center gap-2 group text-left"
                  >
                    <span className="text-gold-medium/60 group-hover:text-gold-bright font-bold">·</span>
                    <span className="group-hover:translate-x-1 transition-transform">Careers</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFooterNav('contact')} 
                    className="hover:text-gold-bright transition-colors cursor-pointer flex items-center gap-2 group text-left"
                  >
                    <span className="text-gold-medium/60 group-hover:text-gold-bright font-bold">·</span>
                    <span className="group-hover:translate-x-1 transition-transform">Contact Ownership</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Headquarters & Contact (4 Cols) */}
            <div className="md:col-span-4 space-y-5">
              <h4 className="text-xs font-bold tracking-[0.25em] text-gold-bright uppercase pb-2 border-b border-gold-medium/20">
                Corporate Office
              </h4>

              <div className="space-y-3.5 text-xs sm:text-sm text-gray-300 font-light">
                {/* Address */}
                <div className="flex gap-3 items-start">
                  <MapPin className="w-4 h-4 text-gold-bright flex-shrink-0 mt-0.5" />
                  <span>
                    545 E John Carpenter Fwy, Suite 300<br />
                    Irving, TX 75062
                  </span>
                </div>

                {/* Phones */}
                <div className="flex gap-3 items-start">
                  <Phone className="w-4 h-4 text-gold-bright flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col space-y-1">
                    <a href="tel:214-729-9676" className="hover:text-gold-bright transition-colors font-mono">214-729-9676</a>
                    <a href="tel:214-709-4231" className="hover:text-gold-bright transition-colors font-mono">214-709-4231</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3 items-center">
                  <Mail className="w-4 h-4 text-gold-bright flex-shrink-0" />
                  <a 
                    href="mailto:info@lascolinasmanagement.com" 
                    className="hover:text-gold-bright transition-colors underline decoration-gold-medium/40 underline-offset-4"
                  >
                    info@lascolinasmanagement.com
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Terms */}
          <div className="pt-8 border-t border-gold-medium/15 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-light gap-3 text-center sm:text-left">
            <span>&copy; 2026 Las Colinas Hospitality Management LLC. All Rights Reserved.</span>
            <div className="flex items-center gap-4 text-[11px] text-gray-500">
              <a href="#" className="hover:text-gold-bright transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-gold-bright transition-colors">Terms of Service</a>
              <span>•</span>
              <button onClick={scrollToTop} className="hover:text-gold-bright transition-colors cursor-pointer">
                Back to Top ↑
              </button>
            </div>
          </div>

        </motion.div>
      </footer>

      {/* Floating Scroll-to-Top Button with AnimatePresence */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            whileHover={{ scale: 1.1, y: -3, boxShadow: '0px 8px 25px rgba(212, 175, 55, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3.5 rounded-full bg-gold-medium text-navy-dark shadow-xl z-50 focus:outline-none cursor-pointer flex items-center justify-center border border-gold-bright"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
