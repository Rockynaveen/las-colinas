import React, { useState, useEffect } from 'react';
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
    window.addEventListener('scroll', handleScrollVisibility);
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

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          {/* Main 3-Column Open Layout (No Boxes) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
            
            {/* Column 1: Brand (5 Cols) */}
            <div className="md:col-span-5 space-y-4">
              <div 
                onClick={() => handleFooterNav('home')} 
                className="cursor-pointer inline-block"
              >
                <img
                  src="/images/las-colinas-logo-white.png"
                  alt="Las Colinas Hospitality Management"
                  className="h-16 sm:h-20 w-auto object-contain select-none"
                />
              </div>

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
                    <span className="group-hover:translate-x-1 transition-transform">About</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleFooterNav('services')} 
                    className="hover:text-gold-bright transition-colors cursor-pointer flex items-center gap-2 group text-left"
                  >
                    <span className="text-gold-medium/60 group-hover:text-gold-bright font-bold">·</span>
                    <span className="group-hover:translate-x-1 transition-transform">Services</span>
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
                    <span className="group-hover:translate-x-1 transition-transform">Leadership</span>
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
                    <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact (4 Cols) */}
            <div className="md:col-span-4 space-y-5">
              <h4 className="text-xs font-bold tracking-[0.25em] text-gold-bright uppercase pb-2 border-b border-gold-medium/20">
                Contact
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-gray-300 font-light">
                {/* Address */}
                <div className="flex gap-3 items-start">
                  <MapPin className="w-4 h-4 text-gold-bright flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">450 E. John Carpenter Freeway, Irving, Texas 75062</span>
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

        </div>
      </footer>

      {/* Floating Scroll-to-Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-gold-medium hover:bg-gold-bright text-navy-dark shadow-lg transition-all duration-500 z-50 focus:outline-none hover:-translate-y-1 ${
          showScrollTop ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible pointer-events-none'
        }`}
        aria-label="Scroll to Top"
      >
        <ArrowUp className="w-4 h-4 font-bold" />
      </button>
    </div>
  );
};

export default App;
