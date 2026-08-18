import React, { useState, useEffect } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

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
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

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
        { id: 'clients-showcase', name: 'team' },
        { id: 'team-showcase', name: 'team' },
        { id: 'portfolio-showcase', name: 'portfolio' },
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

      if (window.scrollY < 200) {
        currentSection = 'home';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: PageId | 'about') => {
    setIsMobileOpen(false);

    if (pageId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const sectionMap: Record<string, string> = {
      'about': 'about-teaser',
      'about-overview': 'about-teaser',
      'about-story': 'our-story',
      'about-vision': 'vision-mission',
      'about-values': 'core-values',
      'about-advantage': 'competitive-edge',
      'about-goals': 'future-goals',
      'services': 'services-showcase',
      'portfolio': 'portfolio-showcase',
      'team': 'team-showcase',
      'careers': 'careers-section',
      'contact': 'cta-section',
    };

    const targetId = sectionMap[pageId];
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
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

          {/* Desktop Nav Items with Shadcn Dropdown & Buttons */}
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

            {/* About (Shadcn DropdownMenu) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer outline-none ${
                    isAboutActive
                      ? 'text-gold-medium border-b border-gold-medium'
                      : 'text-gray-300 hover:text-white hover:border-b hover:border-gray-500'
                  }`}
                >
                  <span>About Us</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {aboutSubpages.map((sub) => (
                  <DropdownMenuItem
                    key={sub.id}
                    onClick={() => handleNavClick(sub.id)}
                    className="cursor-pointer py-2.5"
                  >
                    {sub.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

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

            {/* Contact Shadcn Button */}
            <div className="ml-4">
              <Button
                variant="gold"
                size="sm"
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </Button>
            </div>
          </div>

          {/* Mobile Sheet Drawer */}
          <div className="lg:hidden">
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gold-bright hover:bg-gold-medium/10">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-6 flex flex-col justify-between">
                <div>
                  <SheetHeader className="mb-6">
                    <SheetTitle className="text-left">
                      <img
                        src="/images/las-colinas-logo-white.png"
                        alt="Las Colinas Hospitality Management"
                        className="h-10 w-auto object-contain"
                      />
                    </SheetTitle>
                  </SheetHeader>

                  <div className="space-y-3">
                    <button
                      onClick={() => handleNavClick('home')}
                      className={`block w-full text-left py-2.5 text-sm font-semibold tracking-widest uppercase border-b border-gold-medium/15 ${
                        activeSection === 'home' ? 'text-gold-bright' : 'text-gray-300'
                      }`}
                    >
                      Home
                    </button>

                    <div>
                      <button
                        onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                        className={`flex items-center justify-between w-full text-left py-2.5 text-sm font-semibold tracking-widest uppercase border-b border-gold-medium/15 ${
                          isAboutActive ? 'text-gold-bright' : 'text-gray-300'
                        }`}
                      >
                        <span>About Us</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180 text-gold-bright' : ''}`} />
                      </button>

                      {isMobileAboutOpen && (
                        <div className="pl-4 py-2 space-y-2 bg-navy-medium/40 rounded-lg mt-1 border border-gold-medium/10">
                          {aboutSubpages.map((sub) => (
                            <button
                              key={sub.id}
                              onClick={() => handleNavClick(sub.id)}
                              className="block w-full text-left py-1.5 text-xs font-medium tracking-wider text-gray-400 hover:text-gold-bright"
                            >
                              {sub.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => handleNavClick('services')}
                      className={`block w-full text-left py-2.5 text-sm font-semibold tracking-widest uppercase border-b border-gold-medium/15 ${
                        activeSection === 'services' ? 'text-gold-bright' : 'text-gray-300'
                      }`}
                    >
                      Services
                    </button>

                    <button
                      onClick={() => handleNavClick('portfolio')}
                      className={`block w-full text-left py-2.5 text-sm font-semibold tracking-widest uppercase border-b border-gold-medium/15 ${
                        activeSection === 'portfolio' ? 'text-gold-bright' : 'text-gray-300'
                      }`}
                    >
                      Portfolio
                    </button>

                    <button
                      onClick={() => handleNavClick('team')}
                      className={`block w-full text-left py-2.5 text-sm font-semibold tracking-widest uppercase border-b border-gold-medium/15 ${
                        activeSection === 'team' ? 'text-gold-bright' : 'text-gray-300'
                      }`}
                    >
                      Our Team
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-gold-medium/15">
                  <Button
                    variant="gold"
                    className="w-full"
                    onClick={() => handleNavClick('contact')}
                  >
                    Contact Us
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
