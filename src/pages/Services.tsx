import React, { useState, useRef, useEffect } from 'react';
import { 
  Building2, BarChart3, LineChart, KeyRound, Wrench, 
  UserCheck, ShieldCheck, Users, TrendingUp, 
  DollarSign, Globe, Sparkles, Check, ChevronRight, ChevronLeft, ArrowRight, 
  Layers, Sliders, Activity, Search, Clock, Compass, Megaphone
} from 'lucide-react';
import { type PageId } from '../components/Navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface ServicesProps {
  setActivePage?: (page: PageId) => void;
}

interface AlacarteService {
  id: string;
  num: string;
  category: 'Operations' | 'Revenue' | 'Asset' | 'Strategy';
  categoryLabel: string;
  title: string;
  desc: string;
  icon: any;
}

export const Services: React.FC<ServicesProps> = ({ setActivePage }) => {
  const alacarteCarouselRef = useRef<HTMLDivElement>(null);

  const handleNavContact = () => {
    if (setActivePage) {
      setActivePage('contact');
    }
    window.location.hash = 'contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const hotelManagementServicesList = [
    'Hotel operations management',
    'Staff training',
    'Recruitment support',
    'Financial controls',
    'Budgeting',
    'SOP implementation',
    'Vendor management',
    'Quality audits'
  ];

  const departmentPillars = [
    'Front Office',
    'Housekeeping',
    'Food & Beverage',
    'Maintenance',
    'Guest Services'
  ];

  const alacarteServices: AlacarteService[] = [
    {
      id: 'renovation-development',
      num: '01',
      category: 'Asset',
      categoryLabel: 'Asset & Development',
      title: 'Renovation & Development',
      desc: 'Enhancing properties through renovations, upgrades, and development initiatives.',
      icon: Wrench
    },
    {
      id: 'ota-management',
      num: '02',
      category: 'Revenue',
      categoryLabel: 'Revenue & Distribution',
      title: 'OTA Management & Distribution Strategy',
      desc: 'Optimizing OTA performance, channels, and digital distribution to maximize revenue.',
      icon: Globe
    },
    {
      id: 'investment-asset-management',
      num: '03',
      category: 'Asset',
      categoryLabel: 'Asset & Investment',
      title: 'Hospitality Investment & Asset Management',
      desc: 'Driving ROI and long-term value through smart investment and asset strategies.',
      icon: DollarSign
    },
    {
      id: 'staff-training-leadership',
      num: '04',
      category: 'Operations',
      categoryLabel: 'Operations & Team',
      title: 'Staff Training & Leadership Development',
      desc: 'Developing teams through training, coaching, and leadership programs.',
      icon: Users
    },
    {
      id: 'financial-accounting',
      num: '05',
      category: 'Strategy',
      categoryLabel: 'Finance & Strategy',
      title: 'Financial & Accounting Management',
      desc: 'Managing budgets, forecasts, costs, payroll, and financial performance.',
      icon: LineChart
    },
    {
      id: 'repositioning-turnaround',
      num: '06',
      category: 'Strategy',
      categoryLabel: 'Strategy & Turnaround',
      title: 'Hotel Repositioning & Turnaround',
      desc: 'Transforming underperforming hotels through strategic and operational improvements.',
      icon: TrendingUp
    },
    {
      id: 'brand-conversion',
      num: '07',
      category: 'Asset',
      categoryLabel: 'Asset & Brand',
      title: 'Brand Conversion & PIP Management',
      desc: 'Managing property conversions, PIP compliance, and brand alignment.',
      icon: ShieldCheck
    },
    {
      id: 'extended-stay',
      num: '08',
      category: 'Operations',
      categoryLabel: 'Operations Model',
      title: 'Extended-Stay Management Expertise',
      desc: 'Specialized management solutions tailored for extended-stay properties.',
      icon: KeyRound
    },
    {
      id: 'guest-experience',
      num: '09',
      category: 'Operations',
      categoryLabel: 'Guest Quality',
      title: 'Guest Experience & QA Management',
      desc: 'Maintaining high service standards and ensuring brand QA compliance.',
      icon: UserCheck
    },
    {
      id: 'vendor-contract',
      num: '10',
      category: 'Operations',
      categoryLabel: 'Cost Control',
      title: 'Vendor Contract Negotiation & Cost Optimization',
      desc: 'Leveraging scale and partnerships to lower operational and supplier costs.',
      icon: Sliders
    },
    {
      id: 'sales-marketing',
      num: '11',
      category: 'Revenue',
      categoryLabel: 'Revenue & Sales',
      title: 'Sales & Marketing Strategies',
      desc: 'Targeted marketing campaigns and sales strategies to boost bookings.',
      icon: Megaphone
    },
    {
      id: 'revenue-pricing',
      num: '12',
      category: 'Revenue',
      categoryLabel: 'Yield Mastery',
      title: 'Revenue Management & Pricing Optimization',
      desc: 'Dynamic pricing strategies and data analysis to maximize ADR and RevPAR.',
      icon: BarChart3
    },
    {
      id: 'pre-opening',
      num: '13',
      category: 'Asset',
      categoryLabel: 'Launch Strategy',
      title: 'Pre-Opening Planning & Turnkey Launch',
      desc: 'Guiding new hotel openings from planning to full operational launch.',
      icon: Compass
    },
    {
      id: 'tech-automation',
      num: '14',
      category: 'Operations',
      categoryLabel: 'Systems & Tech',
      title: 'Technology & Automation Integration',
      desc: 'Implementing modern PMS, POS, and digital solutions for hotel operations.',
      icon: Activity
    },
    {
      id: 'risk-audit',
      num: '15',
      category: 'Strategy',
      categoryLabel: 'Risk & Audit',
      title: 'Operational Audits & Risk Mitigation',
      desc: 'Conducting in-depth property reviews to ensure safety and financial health.',
      icon: Search
    },
    {
      id: 'sustainability',
      num: '16',
      category: 'Asset',
      categoryLabel: 'ESG & Efficiency',
      title: 'Sustainability & Energy Efficiency Programs',
      desc: 'Implementing eco-friendly practices that lower utility and operational overhead.',
      icon: Clock
    },
    {
      id: 'recruitment',
      num: '17',
      category: 'Operations',
      categoryLabel: 'Talent Acquisition',
      title: 'Executive Recruitment & Staffing Support',
      desc: 'Sourcing and recruiting top-tier hospitality managers and key personnel.',
      icon: Layers
    }
  ];

  const [activeCategory] = useState<string>('all');
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);

  const filteredAlacarte = activeCategory === 'all'
    ? alacarteServices
    : alacarteServices.filter(s => s.category === activeCategory);

  // Auto-scroll single-line carousel continuously every 4.5 seconds
  useEffect(() => {
    if (isAutoPlayPaused) return;

    const interval = setInterval(() => {
      if (alacarteCarouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = alacarteCarouselRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        if (scrollLeft >= maxScroll - 10) {
          alacarteCarouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          alacarteCarouselRef.current.scrollBy({ left: 240, behavior: 'smooth' });
        }
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoPlayPaused]);

  const scrollAlacarte = (direction: 'left' | 'right') => {
    if (alacarteCarouselRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      alacarteCarouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full py-28 bg-navy-dark min-h-screen px-4 sm:px-6 lg:px-8 relative overflow-hidden text-left">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-medium/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-gold-dark/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="gold">
            <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
            <span>Full-Spectrum Hospitality Solutions</span>
          </Badge>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide leading-tight">
            Our Hospitality Services
          </h1>
          
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-medium" />
            <span className="w-1.5 h-1.5 rotate-45 border border-gold-bright bg-gold-medium" />
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-medium" />
          </div>
          
          <p className="text-gray-300 text-sm sm:text-base font-light mt-6 leading-relaxed">
            Las Colinas Hospitality Management provides end-to-end hotel operations, development, renovations, and financial management services tailored to branded and independent hotels across all market tiers.
          </p>

          {/* Quick Jump Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a href="#hotel-management">Hotel Management Services</a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a href="#alacarte-services">À la Carte Services (17)</a>
            </Button>
          </div>
        </div>

        {/* FLAGSHIP HERO SPOTLIGHT: Hotel Management Services */}
        <section id="hotel-management" className="scroll-mt-32">
          <Card className="p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden border-gold-medium/30 bg-gradient-to-br from-navy-medium via-navy-dark to-navy-medium">
            <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Description, Pillars & Checklist */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-medium/15 border border-gold-medium/30 flex items-center justify-center text-gold-bright shadow-lg">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-gold-medium uppercase font-semibold block">
                        Core Operational Stewardship
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-light tracking-wide">
                        Hotel Management Services
                      </h2>
                    </div>
                  </div>

                  <p className="text-gray-200 text-sm sm:text-base font-light leading-relaxed">
                    We provide hands-on operational support across all departments, including front office, housekeeping, food and beverage, maintenance, and guest services, ensuring efficient and seamless hotel operations.
                  </p>
                </div>

                {/* Departments Strip */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-[11px] font-mono tracking-widest text-gold-medium uppercase font-semibold block">
                    Supported Departments:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {departmentPillars.map((dept, dIdx) => (
                      <Badge
                        key={dIdx}
                        variant="gold-subtle"
                        className="py-1 px-3"
                      >
                        {dept}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Services May Include Checklist */}
                <div className="space-y-4 pt-4 border-t border-gold-medium/15">
                  <span className="text-xs font-mono font-bold tracking-widest text-gold-bright uppercase block">
                    Services May Include:
                  </span>
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {hotelManagementServicesList.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-navy-dark/70 border border-gold-medium/15 hover:border-gold-medium/35 transition-all duration-300 flex items-center gap-3 shadow-md"
                      >
                        <div className="w-6 h-6 rounded-full bg-gold-medium/20 border border-gold-medium/40 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-gold-bright" />
                        </div>
                        <span className="text-xs sm:text-sm text-gray-200 font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consultation CTA */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Button
                    variant="gold"
                    size="lg"
                    onClick={handleNavContact}
                  >
                    <span>Request Management Proposal</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>

              {/* Right Column: Visual Showcase & Performance Stats */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative rounded-xl overflow-hidden border border-gold-medium/30 shadow-2xl bg-navy-dark">
                  <div
                    className="h-80 sm:h-96 w-full bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop')" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent" />
                  
                  {/* Floating Stat Card */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 bg-navy-dark/95 backdrop-blur-md rounded-lg border border-gold-medium/25 shadow-xl">
                    <div className="grid grid-cols-2 gap-4 text-center divide-x divide-gold-medium/15">
                      <div>
                        <div className="font-serif text-2xl font-semibold text-gold-bright">100%</div>
                        <div className="text-[10px] text-gray-300 tracking-wider uppercase mt-0.5">Brand QA Compliance</div>
                      </div>
                      <div className="pl-4">
                        <div className="font-serif text-2xl font-semibold text-gold-bright">Turnkey</div>
                        <div className="text-[10px] text-gray-300 tracking-wider uppercase mt-0.5">Operational Support</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-navy-dark/60 border border-gold-medium/15">
                  <p className="text-xs text-gray-300 font-light italic leading-relaxed text-center">
                    "Delivering operational rigor, seamless guest satisfaction, and bottom-line owner returns across branded and independent assets."
                  </p>
                </div>
              </div>

            </div>
          </Card>
        </section>

        {/* COMPREHENSIVE HOSPITALITY MANAGEMENT SOLUTIONS (SINGLE LINE CAROUSEL) */}
        <section id="alacarte-services" className="scroll-mt-28 space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <Badge variant="gold">
              OUR SERVICES
            </Badge>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-wide leading-tight">
              Comprehensive Hospitality Management Solutions
            </h2>
            
            <p className="text-gray-300 text-xs sm:text-sm font-light mt-3 max-w-2xl mx-auto leading-relaxed">
              End-to-end services designed to optimize operations, maximize revenue, and enhance the overall guest experience.
            </p>
          </div>

          {/* Single-Line Carousel Viewport with Left & Right Indicator Controls */}
          <div 
            className="relative px-2 sm:px-6"
            onMouseEnter={() => setIsAutoPlayPaused(true)}
            onMouseLeave={() => setIsAutoPlayPaused(false)}
          >
            {/* Left Indicator Arrow */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => scrollAlacarte('left')}
              aria-label="Previous Slide"
              className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 rounded-full border-gold-medium/30 bg-navy-dark/95 backdrop-blur-md text-gold-bright hover:bg-gold-medium hover:text-navy-dark shadow-xl"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Right Indicator Arrow */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => scrollAlacarte('right')}
              aria-label="Next Slide"
              className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 rounded-full border-gold-medium/30 bg-navy-dark/95 backdrop-blur-md text-gold-bright hover:bg-gold-medium hover:text-navy-dark shadow-xl"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            {/* Single Line Carousel Track */}
            <div
              ref={alacarteCarouselRef}
              className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-2 no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredAlacarte.map((ala) => {
                const Icon = ala.icon;
                return (
                  <Card
                    key={ala.id}
                    className="w-[195px] sm:w-[215px] flex-shrink-0 snap-start bg-navy-medium/85 backdrop-blur-md border-gold-medium/20 hover:border-gold-medium/60 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-medium/10 flex flex-col items-center text-center justify-center h-[190px] sm:h-[200px] relative overflow-hidden group"
                  >
                    {/* Increased Circular Icon Badge */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gold-medium/15 border-2 border-gold-medium/40 flex items-center justify-center mx-auto mb-2.5 text-gold-bright shadow-inner group-hover:bg-gold-medium group-hover:text-navy-dark group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold-bright group-hover:text-navy-dark transition-colors" />
                    </div>

                    {/* Compact Title */}
                    <h3 className="font-serif text-xs sm:text-[13px] font-semibold text-white mb-1 tracking-wide group-hover:text-gold-bright transition-colors leading-snug line-clamp-2">
                      {ala.title}
                    </h3>

                    {/* Reduced Concise Description */}
                    <p className="text-gray-300 text-[10px] font-light leading-snug line-clamp-2 px-1">
                      {ala.desc}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

        </section>

        {/* Bottom Call to Action Section */}
        <Card className="relative rounded-2xl bg-gradient-to-r from-navy-medium via-navy-dark to-navy-medium border-gold-medium/30 p-8 sm:p-12 text-center shadow-2xl overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <Badge variant="gold">
              <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
              <span>Custom Scope & Contracts</span>
            </Badge>

            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-wide leading-tight">
              Tailored Hospitality Solutions for Your Portfolio
            </h3>

            <p className="text-gray-300 text-xs sm:text-sm md:text-base font-light leading-relaxed">
              Whether you need turnkey full-service hotel management or a targeted tactical intervention in revenue, QA, pre-opening, or renovations, Las Colinas is ready to deliver exceptional results.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="gold"
                size="lg"
                onClick={handleNavContact}
              >
                Schedule Private Consultation
              </Button>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
};
