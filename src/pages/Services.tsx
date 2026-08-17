import React, { useState, useRef, useEffect } from 'react';
import { 
  Building2, BarChart3, LineChart, KeyRound, Wrench, 
  UserCheck, ShieldCheck, Users, TrendingUp, 
  DollarSign, Globe, Sparkles, Check, ChevronRight, ChevronLeft, ArrowRight, 
  Layers, Sliders, Activity, Search, Clock, Compass, Megaphone
} from 'lucide-react';
import { type PageId } from '../components/Navigation';

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
      id: 'revenue-management-optimization',
      num: '06',
      category: 'Revenue',
      categoryLabel: 'Revenue & Yield',
      title: 'Revenue Management & Optimization',
      desc: 'Maximizing revenue through demand forecasting, rate strategies, and inventory.',
      icon: TrendingUp
    },
    {
      id: 'qa-readiness',
      num: '07',
      category: 'Operations',
      categoryLabel: 'Operations & QA',
      title: 'Quality Assurance (QA) Readiness',
      desc: 'Ensuring brand compliance, operational excellence, and inspection readiness.',
      icon: ShieldCheck
    },
    {
      id: 'ffe-procurement',
      num: '08',
      category: 'Asset',
      categoryLabel: 'Asset Planning',
      title: 'FF&E Procurement & Asset Planning',
      desc: 'Managing FF&E selection, purchasing, budgeting, and installations.',
      icon: Layers
    },
    {
      id: 'brand-selection-planning',
      num: '09',
      category: 'Asset',
      categoryLabel: 'Brand Advisory',
      title: 'Brand Selection, Planning & Review',
      desc: 'Evaluating brands and aligning hotel concepts with market and ownership goals.',
      icon: Compass
    },
    {
      id: 'pre-opening-services',
      num: '10',
      category: 'Operations',
      categoryLabel: 'Operations & Launch',
      title: 'Hotel Pre-Opening Services',
      desc: 'Managing pre-opening activities for smooth, successful hotel launches.',
      icon: KeyRound
    },
    {
      id: 'project-management',
      num: '11',
      category: 'Asset',
      categoryLabel: 'Project Management',
      title: 'Hospitality Project Management',
      desc: 'Leading projects for renovations, transitions, and operational improvements.',
      icon: Clock
    },
    {
      id: 'daily-rate-strategy',
      num: '12',
      category: 'Revenue',
      categoryLabel: 'Rate Strategy',
      title: 'Daily Rate Strategy & Yield Management',
      desc: 'Implementing dynamic pricing based on demand, trends, and market conditions.',
      icon: BarChart3
    },
    {
      id: 'price-optimization',
      num: '13',
      category: 'Revenue',
      categoryLabel: 'Pricing Analytics',
      title: 'Price Optimization',
      desc: 'Using market insights and data to maximize ADR, RevPAR, and overall performance.',
      icon: Sliders
    },
    {
      id: 'daily-sales-monitoring',
      num: '14',
      category: 'Revenue',
      categoryLabel: 'Sales Performance',
      title: 'Daily Sales Performance Monitoring',
      desc: 'Tracking sales, pace, goals, and revenue opportunities for continuous growth.',
      icon: Activity
    },
    {
      id: 'sales-marketing-strategy',
      num: '15',
      category: 'Strategy',
      categoryLabel: 'Sales & Marketing',
      title: 'Sales & Marketing Strategy',
      desc: 'Building strategies to grow corporate, group, leisure, and local market segments.',
      icon: Megaphone
    },
    {
      id: 'task-force-management',
      num: '16',
      category: 'Operations',
      categoryLabel: 'Task Force',
      title: 'Task Force Management',
      desc: 'Providing leadership and turnaround solutions during transitions and performance improvements.',
      icon: UserCheck
    },
    {
      id: 'competitive-benchmarking',
      num: '17',
      category: 'Strategy',
      categoryLabel: 'Market Intelligence',
      title: 'Competitive Benchmarking & Market Analysis',
      desc: 'Analyzing competitors, market trends, and opportunities to drive revenue growth.',
      icon: Search
    }
  ];

  const filteredAlacarte = alacarteServices;

  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);

  const scrollAlacarte = (direction: 'left' | 'right') => {
    if (alacarteCarouselRef.current) {
      const cardWidth = 240;
      const { scrollLeft, scrollWidth, clientWidth } = alacarteCarouselRef.current;
      
      if (direction === 'right') {
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          alacarteCarouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          alacarteCarouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      } else {
        if (scrollLeft <= 20) {
          alacarteCarouselRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
        } else {
          alacarteCarouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }
      }
    }
  };

  // Automatic Carousel Interval (Loops smoothly and pauses on hover)
  useEffect(() => {
    if (isAutoPlayPaused) return;

    const interval = setInterval(() => {
      scrollAlacarte('right');
    }, 3200);

    return () => clearInterval(interval);
  }, [isAutoPlayPaused]);

  return (
    <div className="w-full py-28 bg-navy-dark min-h-screen px-4 sm:px-6 lg:px-8 text-left relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold-medium/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-gold-dark/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-medium/10 border border-gold-medium/25 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-gold-bright uppercase">
              Full-Spectrum Hospitality Solutions
            </span>
          </div>
          
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
            <a
              href="#hotel-management"
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-navy-medium border border-gold-medium/20 text-gold-medium hover:border-gold-medium/50 hover:text-white transition-all shadow-md"
            >
              Hotel Management Services
            </a>
            <a
              href="#alacarte-services"
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-navy-medium border border-gold-medium/20 text-gold-medium hover:border-gold-medium/50 hover:text-white transition-all shadow-md"
            >
              À la Carte Services (17)
            </a>
          </div>
        </div>

        {/* FLAGSHIP HERO SPOTLIGHT: Hotel Management Services */}
        <section id="hotel-management" className="scroll-mt-32">
          <div className="relative rounded-2xl bg-gradient-to-br from-navy-medium via-navy-dark to-navy-medium border border-gold-medium/30 p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-medium/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-dark/10 rounded-full blur-3xl pointer-events-none" />

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
                      <span
                        key={dIdx}
                        className="px-3.5 py-1.5 rounded-lg bg-navy-dark/90 border border-gold-medium/20 text-xs text-gray-200 font-medium tracking-wide shadow-sm"
                      >
                        {dept}
                      </span>
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
                  <button
                    onClick={handleNavContact}
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-gold-medium via-gold-bright to-gold-medium hover:from-gold-bright hover:to-gold-medium text-navy-dark font-bold tracking-widest text-xs uppercase rounded shadow-xl hover:shadow-gold-medium/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  >
                    <span>Request Management Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Showcase & Performance Stats */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative rounded-xl overflow-hidden border border-gold-medium/30 shadow-2xl bg-navy-dark">
                  <div
                    className="h-80 sm:h-96 w-full bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop')" }}
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
          </div>
        </section>

        {/* COMPREHENSIVE HOSPITALITY MANAGEMENT SOLUTIONS (SINGLE LINE CAROUSEL) */}
        <section id="alacarte-services" className="scroll-mt-28 space-y-10">
          
          {/* Section Header (Matching Screenshot) */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-[1px] w-10 bg-gold-medium/60" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-gold-bright uppercase">
                OUR SERVICES
              </span>
              <span className="h-[1px] w-10 bg-gold-medium/60" />
            </div>
            
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
            {/* Left Indicator Arrow (Centered on Left Side) */}
            <button
              onClick={() => scrollAlacarte('left')}
              aria-label="Previous Slide"
              className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-gold-medium/30 bg-navy-dark/95 backdrop-blur-md text-gold-bright hover:bg-gold-medium hover:text-navy-dark hover:border-gold-medium transition-all duration-300 flex items-center justify-center shadow-xl cursor-pointer hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Indicator Arrow (Centered on Right Side) */}
            <button
              onClick={() => scrollAlacarte('right')}
              aria-label="Next Slide"
              className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-gold-medium/30 bg-navy-dark/95 backdrop-blur-md text-gold-bright hover:bg-gold-medium hover:text-navy-dark hover:border-gold-medium transition-all duration-300 flex items-center justify-center shadow-xl cursor-pointer hover:scale-105"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Single Line Carousel Track with Centered Icon Cards */}
            <div
              ref={alacarteCarouselRef}
              className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-2 no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredAlacarte.map((ala) => {
                const Icon = ala.icon;
                return (
                  <div
                    key={ala.id}
                    className="w-[195px] sm:w-[215px] flex-shrink-0 snap-start bg-navy-medium/85 backdrop-blur-md border border-gold-medium/20 hover:border-gold-medium/60 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-medium/10 flex flex-col items-center text-center justify-center h-[190px] sm:h-[200px] relative overflow-hidden group"
                  >
                    {/* Corner Ambient Glow */}
                    <div className="absolute top-0 right-0 w-14 h-14 bg-gold-medium/5 rounded-full blur-md group-hover:bg-gold-medium/15 transition-all pointer-events-none" />

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
                  </div>
                );
              })}
            </div>
          </div>

        </section>

        {/* Bottom Call to Action Section */}
        <section className="relative rounded-2xl bg-gradient-to-r from-navy-medium via-navy-dark to-navy-medium border border-gold-medium/30 p-8 sm:p-12 text-center shadow-2xl overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-medium/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-medium/10 border border-gold-medium/25">
              <Sparkles className="w-3.5 h-3.5 text-gold-bright" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-gold-bright uppercase">
                Custom Scope & Contracts
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-wide leading-tight">
              Tailored Hospitality Solutions for Your Portfolio
            </h3>

            <p className="text-gray-300 text-xs sm:text-sm md:text-base font-light leading-relaxed">
              Whether you need turnkey full-service hotel management or a targeted tactical intervention in revenue, QA, pre-opening, or renovations, Las Colinas is ready to deliver exceptional results.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={handleNavContact}
                className="px-8 py-3.5 bg-gradient-to-r from-gold-medium via-gold-bright to-gold-medium hover:from-gold-bright hover:to-gold-medium text-navy-dark font-bold tracking-widest text-xs uppercase rounded shadow-xl hover:shadow-gold-medium/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                Schedule Private Consultation
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
