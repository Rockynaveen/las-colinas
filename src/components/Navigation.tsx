import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';


export type PageId = 
  | 'home' 
  | 'about-overview' 
  | 'about-story' 
  | 'about-vision' 
  | 'about-values' 
  | 'about-advantage' 
  | 'about-goals'
  | 'services' 
  | 'portfolio' 
  | 'team' 
  | 'careers' 
  | 'contact';

interface NavigationProps {
  activePage?: PageId;
  setActivePage?: (page: PageId) => void;
}

export const Navigation: React.FC<NavigationProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  // Monitor scroll to apply sticky navbar styles and track active on-page section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section based on scroll position (bottom to top)
      const sections = [
        { id: 'cta-section', name: 'contact' },
        { id: 'team-showcase', name: 'team' },
        { id: 'portfolio-showcase', name: 'portfolio' },
        { id: 'lifecycle-solutions', name: 'services' },
        { id: 'hotel-management', name: 'services' },
        { id: 'services-showcase', name: 'services' },
        { id: 'why-choose-us', name: 'about' },
        { id: 'vision-mission', name: 'about' },
        { id: 'about-teaser', name: 'about' },
      ];

      const scrollPos = window.scrollY + 200;
      let currentSection = 'home';

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos) {
          currentSection = section.name;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target: string) => {
    setIsMobileMenuOpen(false);
    setIsAboutDropdownOpen(false);

    if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const sectionMap: Record<string, string> = {
      'about': 'about-teaser',
      'about-overview': 'about-teaser',
      'about-story': 'about-teaser',
      'about-vision': 'vision-mission',
      'about-values': 'vision-mission',
      'about-advantage': 'why-choose-us',
      'about-goals': 'vision-mission',
      'why-choose': 'why-choose-us',
      'why-choose-us': 'why-choose-us',
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

  const aboutSubpages = [
    { id: 'about-overview', label: 'Company Overview' },
    { id: 'about-story', label: 'Our Story' },
    { id: 'about-vision', label: 'Vision & Mission' },
    { id: 'about-values', label: 'Core Values' },
    { id: 'about-advantage', label: 'Our Advantage' },
    { id: 'about-goals', label: 'Future Goals' }
  ] as const;

  const isAboutActive = activeSection === 'about';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-navy-dark/95 backdrop-blur-md py-2 border-b border-gold-medium/15 shadow-xl'
          : 'bg-gradient-to-b from-navy-dark/90 to-transparent py-3 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo on the left filling header height */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex-shrink-0 cursor-pointer flex items-center justify-center group py-1"
          >
            <img
              src="/images/las-colinas-logo-white.png"
              alt="Las Colinas Hospitality Management"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 select-none"
            />
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                activeSection === 'home'
                  ? 'text-gold-medium border-b border-gold-medium'
                  : 'text-gray-300 hover:text-white hover:border-b hover:border-gray-500'
              }`}
            >
              Home
            </button>

            {/* About (Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('about')}
                className={`flex items-center gap-1 px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  isAboutActive
                    ? 'text-gold-medium border-b border-gold-medium'
                    : 'text-gray-300 hover:text-white hover:border-b hover:border-gray-500'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 mt-0 w-56 rounded-md shadow-xl bg-navy-medium border border-gold-medium/10 overflow-hidden transition-all duration-300 transform origin-top-left ${
                  isAboutDropdownOpen
                    ? 'opacity-100 scale-100 translate-y-0 visible'
                    : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'
                }`}
              >
                <div className="py-1">
                  {aboutSubpages.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => handleNavClick(sub.id)}
                      className="block w-full text-left px-4 py-3 text-xs font-medium tracking-wider text-gray-300 hover:bg-navy-light hover:text-gold-bright transition-colors duration-200 cursor-pointer"
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <button
              onClick={() => handleNavClick('services')}
              className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                activeSection === 'services'
                  ? 'text-gold-medium border-b border-gold-medium'
                  : 'text-gray-300 hover:text-white hover:border-b hover:border-gray-500'
              }`}
            >
              Services
            </button>

            {/* Portfolio */}
            <button
              onClick={() => handleNavClick('portfolio')}
              className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                activeSection === 'portfolio'
                  ? 'text-gold-medium border-b border-gold-medium'
                  : 'text-gray-300 hover:text-white hover:border-b hover:border-gray-500'
              }`}
            >
              Portfolio
            </button>

            {/* Team */}
            <button
              onClick={() => handleNavClick('team')}
              className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                activeSection === 'team'
                  ? 'text-gold-medium border-b border-gold-medium'
                  : 'text-gray-300 hover:text-white hover:border-b hover:border-gray-500'
              }`}
            >
              Our Team
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className="ml-4 px-5 py-2 text-xs font-bold tracking-widest uppercase text-navy-dark bg-gold-medium hover:bg-gold-bright transition-all duration-300 rounded shadow-md hover:shadow-gold-medium/20 hover:-translate-y-0.5 cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none transition-colors duration-200 cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Links Overlay */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[80px] bg-navy-dark/95 border-b border-gold-medium/15 shadow-2xl transition-all duration-300 ease-in-out z-40 ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
        style={{ height: 'calc(100vh - 80px)', overflowY: 'auto' }}
      >
        <div className="px-4 pt-4 pb-8 space-y-2">
          {/* Home */}
          <button
            onClick={() => handleNavClick('home')}
            className={`block w-full text-left px-4 py-3 text-sm font-semibold tracking-widest uppercase border-b border-gray-800 ${
              activeSection === 'home' ? 'text-gold-medium' : 'text-gray-300'
            }`}
          >
            Home
          </button>

          {/* About us parent with toggle */}
          <div>
            <button
              onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
              className={`flex items-center justify-between w-full text-left px-4 py-3 text-sm font-semibold tracking-widest uppercase border-b border-gray-800 ${
                isAboutActive ? 'text-gold-medium' : 'text-gray-300'
              }`}
            >
              <span>About Us</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Mobile About Submenu */}
            <div
              className={`pl-4 bg-navy-medium/55 transition-all duration-300 overflow-hidden ${
                isAboutDropdownOpen ? 'max-h-64 opacity-100 py-1' : 'max-h-0 opacity-0 pointer-events-none'
              }`}
            >
              {aboutSubpages.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => handleNavClick(sub.id)}
                  className="block w-full text-left px-4 py-2.5 text-xs font-semibold tracking-wider text-gray-400 hover:text-white"
                >
                  {sub.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <button
            onClick={() => handleNavClick('services')}
            className={`block w-full text-left px-4 py-3 text-sm font-semibold tracking-widest uppercase border-b border-gray-800 ${
              activeSection === 'services' ? 'text-gold-medium' : 'text-gray-300'
            }`}
          >
            Services
          </button>

          {/* Portfolio */}
          <button
            onClick={() => handleNavClick('portfolio')}
            className={`block w-full text-left px-4 py-3 text-sm font-semibold tracking-widest uppercase border-b border-gray-800 ${
              activeSection === 'portfolio' ? 'text-gold-medium' : 'text-gray-300'
            }`}
          >
            Portfolio
          </button>

          {/* Team */}
          <button
            onClick={() => handleNavClick('team')}
            className={`block w-full text-left px-4 py-3 text-sm font-semibold tracking-widest uppercase border-b border-gray-800 ${
              activeSection === 'team' ? 'text-gold-medium' : 'text-gray-300'
            }`}
          >
            Our Team
          </button>

          {/* Contact */}
          <div className="pt-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3.5 text-center text-xs font-bold tracking-widest uppercase text-navy-dark bg-gold-medium hover:bg-gold-bright transition-all duration-300 rounded shadow-md cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
