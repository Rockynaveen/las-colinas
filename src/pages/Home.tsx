import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll, useMotionValueEvent, AnimatePresence, type Variants } from 'framer-motion';
import { Carousel } from '../components/Carousel';
import { 
  Shield, TrendingUp, Building2, Award, ArrowRight, 
  ChevronRight, ChevronLeft, Sparkles, Check, DollarSign, ShieldCheck, LineChart, 
  Wrench, Globe, Users, Layers, Compass, KeyRound, Clock, BarChart3, 
  Sliders, Activity, Megaphone, UserCheck, Search, Target, Handshake, Eye, Star,
  Lightbulb, Leaf, MapPin, Phone, Mail
} from 'lucide-react';
import { type PageId } from '../components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface AlacarteService {
  id: string;
  num: string;
  category: 'Operations' | 'Revenue' | 'Asset' | 'Strategy';
  categoryLabel: string;
  title: string;
  desc: string;
  icon: any;
}

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

interface StatCounterProps {
  end: number;
  start?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
  icon?: any;
  tag?: string;
  isLast?: boolean;
}

const StatCounter: React.FC<StatCounterProps> = ({
  end,
  start = 0,
  duration = 2000,
  prefix = '',
  suffix = '',
  label,
  sublabel,
  icon: Icon,
  tag,
  isLast = false,
}) => {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (end - start) * easeOut);
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, start, duration, hasAnimated]);

  return (
    <div 
      ref={ref} 
      className={`p-6 sm:p-7 flex flex-col justify-between text-left group relative transition-colors duration-300 hover:bg-gold-medium/5 ${
        !isLast ? 'border-b lg:border-b-0 lg:border-r border-gold-medium/20' : ''
      }`}
    >
      {/* Top Header inside cell */}
      <div className="flex items-center justify-between gap-2 mb-4 pb-2.5 border-b border-gold-medium/10">
        {tag ? (
          <span className="text-[10px] font-mono tracking-widest text-gold-medium/80 uppercase font-semibold">
            {tag}
          </span>
        ) : <span />}

        {Icon && (
          <div className="w-8 h-8 rounded-lg bg-gold-medium/10 border border-gold-medium/30 flex items-center justify-center text-gold-bright group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-300 shadow-inner flex-shrink-0">
            <Icon className="w-4 h-4" />
          </div>
        )}
      </div>

      {/* Big Gleaming Number */}
      <div className="my-1.5 flex items-baseline overflow-visible">
        <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-bright to-gold-medium tracking-normal py-1 pr-3 inline-block select-none">
          {prefix}{count.toLocaleString()}{suffix}
        </span>
      </div>

      {/* Labels */}
      <div className="mt-2 space-y-1">
        <div className="text-gray-200 text-xs sm:text-[13px] tracking-wider uppercase font-semibold font-serif group-hover:text-gold-bright transition-colors">
          {label}
        </div>
        {sublabel && (
          <div className="text-gray-400 text-[11px] sm:text-xs tracking-normal font-light">
            {sublabel}
          </div>
        )}
      </div>

      {/* Bottom Gold Accent Bar */}
      <div className="mt-4 pt-2 border-t border-gold-medium/10 flex items-center justify-between">
        <div className="w-6 h-[1.5px] bg-gold-medium/40 group-hover:w-12 group-hover:bg-gold-bright transition-all duration-300" />
        <span className="text-[9px] font-mono text-gold-medium/50 tracking-widest uppercase">Verified</span>
      </div>
    </div>
  );
};

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  type?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in' | 'blur-in' | 'flip-up' | 'slide-up';
}

const RevealSection: React.FC<RevealSectionProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  type = 'fade-up' 
}) => {
  const getVariants = (): Variants => {
    switch (type) {
      case 'fade-left':
        return {
          hidden: { opacity: 0, x: -70, rotateY: 15, transformPerspective: 1200 },
          visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const } }
        };
      case 'fade-right':
        return {
          hidden: { opacity: 0, x: 70, rotateY: -15, transformPerspective: 1200 },
          visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const } }
        };
      case 'zoom-in':
        return {
          hidden: { opacity: 0, scale: 0.88, z: -100, rotateX: 10, transformPerspective: 1200 },
          visible: { opacity: 1, scale: 1, z: 0, rotateX: 0, transition: { duration: 0.95, delay, ease: [0.16, 1, 0.3, 1] as const } }
        };
      case 'blur-in':
        return {
          hidden: { opacity: 0, filter: 'blur(10px)', scale: 0.96, y: 30 },
          visible: { opacity: 1, filter: 'blur(0px)', scale: 1, y: 0, transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] as const } }
        };
      case 'flip-up':
        return {
          hidden: { opacity: 0, y: 60, rotateX: 25, transformPerspective: 1200 },
          visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const } }
        };
      case 'slide-up':
        return {
          hidden: { opacity: 0, y: 70, transformPerspective: 1200 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] as const } }
        };
      case 'fade-up':
      default:
        return {
          hidden: { opacity: 0, y: 40, scale: 0.98, transformPerspective: 1200 },
          visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const } }
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 3D Interactive Tilt Card Component with Specular Glare & Depth Elevation
interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  glare?: boolean;
  translateZ?: number;
  onClick?: () => void;
}

const Card3D: React.FC<Card3DProps> = ({ 
  children, 
  className = '', 
  depth = 12, 
  glare = true,
  translateZ = 20,
  onClick 
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const mouseXSpring = useSpring(x, { stiffness: 260, damping: 24 });
  const mouseYSpring = useSpring(y, { stiffness: 260, damping: 24 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${depth}deg`, `-${depth}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${depth}deg`, `${depth}deg`]);
  
  // Dynamic Glare Position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1200,
      }}
      whileHover={{ scale: 1.025 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className={`relative ${className}`}
    >
      {/* 3D Elevated Layer */}
      <div 
        style={{ 
          transform: `translateZ(${translateZ}px)`,
          transformStyle: 'preserve-3d'
        }} 
        className="w-full h-full relative"
      >
        {children}

        {/* Specular 3D Glare Sheen Overlay */}
        {glare && (
          <motion.div
            style={{
              background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,220,130,0.18) 0%, transparent 65%)`,
              opacity: isHovered ? 1 : 0,
            }}
            className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300 z-30"
          />
        )}
      </div>
    </motion.div>
  );
};

// Clean Luxury Ambient Depth Canvas (No Distracting Rings)
const Geometric3DBackdrop: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {/* Soft Ambient Golden Atmospheric Flares */}
      <motion.div
        animate={{
          x: [0, 30, -25, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-8 w-[450px] h-[450px] bg-gradient-to-tr from-gold-medium/10 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.9, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-8 w-[450px] h-[450px] bg-gradient-to-bl from-gold-dark/15 to-transparent rounded-full blur-3xl"
      />
    </div>
  );
};

const FloatingOrbs: React.FC = () => {
  return <Geometric3DBackdrop />;
};

const whyChooseHeadingsList = [
  {
    number: '01',
    title: 'Proven Hospitality Expertise',
    tag: 'Executive Knowledge',
    icon: Award,
    highlight: 'Hospitality Expertise',
    subtext: 'Experienced leadership with extensive knowledge in hotel operations, finance, revenue management, and guest service.'
  },
  {
    number: '02',
    title: 'Owner-Focused Approach',
    tag: 'Fiduciary Alignment',
    icon: Target,
    highlight: 'Owner-Focused',
    subtext: 'Decisions are made strictly with the owner’s return on investment (ROI) in mind with transparent reporting.'
  },
  {
    number: '03',
    title: 'Revenue Growth Strategies',
    tag: 'Yield & ADR Mastery',
    icon: TrendingUp,
    highlight: 'Revenue Growth',
    subtext: 'Dynamic pricing, strong OTA & brand distribution, and extended-stay corporate sales to maximize ADR.'
  },
  {
    number: '04',
    title: 'Operational Excellence',
    tag: 'SOPs & QA Mastery',
    icon: ShieldCheck,
    highlight: 'Operational Excellence',
    subtext: 'Standardized operating procedures, quality assurance compliance, and continuous monitoring of guest satisfaction.'
  },
  {
    number: '05',
    title: 'Financial Management',
    tag: 'Fiscal Discipline',
    icon: DollarSign,
    highlight: 'Financial Management',
    subtext: 'Comprehensive budget forecasting, expense control, payroll oversight, and vendor cost negotiations.'
  },
  {
    number: '06',
    title: 'Human Resources & Talent Development',
    tag: 'Culture & Talent',
    icon: Users,
    highlight: 'Talent Development',
    subtext: 'Recruitment of top hospitality talent, structured leadership training, and labor compliance.'
  },
  {
    number: '07',
    title: 'Technology & Innovation',
    tag: 'Modern Tech Stack',
    icon: Activity,
    highlight: 'Technology & Innovation',
    subtext: 'Modern hotel management systems (PMS/POS), data-driven decision making, and automated operations.'
  },
  {
    number: '08',
    title: 'Asset Protection',
    tag: 'Equity Preservation',
    icon: Shield,
    highlight: 'Asset Protection',
    subtext: 'Preventive maintenance programs, capital PIP planning, brand compliance, and property value protection.'
  },
  {
    number: '09',
    title: 'Personalized Management',
    tag: 'No Bureaucracy',
    icon: Sliders,
    highlight: 'Personalized Management',
    subtext: 'No one-size-fits-all approach. Customized business plans with direct, regular executive communication.'
  },
  {
    number: '10',
    title: 'Guest Experience Focus',
    tag: 'Reputation & Loyalty',
    icon: Star,
    highlight: 'Guest Experience',
    subtext: 'Delivering exceptional guest service, elevating online ratings, and cultivating repeat customer loyalty.'
  }
];

const WhyChooseStickySequencer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // Map scroll range (0.0 to 1.0) into discrete slide index (0 to 9)
    const index = Math.min(
      whyChooseHeadingsList.length - 1,
      Math.max(0, Math.floor(latest * whyChooseHeadingsList.length))
    );
    setActiveIndex(index);
  });

  const currentItem = whyChooseHeadingsList[activeIndex];
  const Icon = currentItem.icon;

  return (
    <div ref={containerRef} className="relative h-[650vh]">
      {/* Responsive Locked Viewport with 100dvh support */}
      <div className="sticky top-0 h-screen h-[100dvh] w-full flex flex-col items-center justify-between px-4 sm:px-6 md:px-8 text-center overflow-hidden z-10 select-none pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8">
        
        {/* Ambient Radial Golden Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[850px] h-[700px] sm:h-[850px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />
        <FloatingOrbs />

        <div className="w-full max-w-5xl flex flex-col items-center justify-between h-full relative z-10">
          
          {/* FIXED HEADER */}
          <div className="w-full space-y-1 sm:space-y-1.5 flex-shrink-0">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-gold-medium/10 border border-gold-medium/25 shadow-sm">
              <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gold-bright" />
              <span className="text-[9px] sm:text-xs font-semibold tracking-[0.25em] text-gold-bright uppercase">
                WHY CHOOSE LAS COLINAS
              </span>
            </div>

            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-200 tracking-wide font-serif">
              They choose us because...
            </h2>
          </div>

          {/* CENTER DISPLAY */}
          <div className="w-full flex-1 flex items-center justify-center relative my-auto py-1 sm:py-2">
            <div className="w-full min-h-[220px] sm:min-h-[260px] md:min-h-[280px] flex items-center justify-center relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.number}
                  initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center justify-center px-2 sm:px-4 w-full"
                >
                  {/* Meta Badge */}
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-2.5">
                    <span className="font-mono text-[10px] sm:text-xs md:text-sm font-bold text-gold-bright px-2.5 sm:px-3 py-0.5 rounded-full bg-gold-medium/15 border border-gold-medium/30 shadow-md">
                      Pillar {currentItem.number} of {whyChooseHeadingsList.length}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono tracking-widest text-gold-medium/80 uppercase font-semibold">
                      {currentItem.tag}
                    </span>
                  </div>

                  {/* Animated Icon Badge */}
                  <motion.div 
                    initial={{ scale: 0.85, rotate: -8 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-gold-medium/15 border-2 border-gold-medium/40 flex items-center justify-center mb-2 sm:mb-3 text-gold-bright shadow-2xl"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  </motion.div>

                  {/* Giant Serif Heading */}
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.2] max-w-3xl mx-auto mb-2 sm:mb-3">
                    {currentItem.title}
                  </h3>

                  {/* Subtext */}
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base font-light max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2">
                    {currentItem.subtext}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TeamMemberCard {
  id: string;
  name: string;
  role: string;
  specialty: string;
  icon: any;
  image: string;
}

const teamMembersData: TeamMemberCard[] = [
  {
    id: 'team-1',
    name: 'Nandini Tiwari',
    role: 'President',
    specialty: 'Operations & Development',
    icon: Award,
    image: '/images/nandini-tiwari.jpg'
  },
  {
    id: 'team-2',
    name: 'Nitin Tiwari',
    role: 'Chief Executive Officer',
    specialty: 'Strategy & Growth',
    icon: Users,
    image: '/images/nitin tiwari.jpg'
  },
  {
    id: 'team-3',
    name: 'Manasa Sharma',
    role: 'Chief Financial Officer',
    specialty: 'Financial Strategy',
    icon: DollarSign,
    image: '/images/manasha sharma.jpg'
  },
  {
    id: 'team-4',
    name: 'Jignesh Patel',
    role: 'Accounting Manager',
    specialty: 'Financial Operations',
    icon: ShieldCheck,
    image: '/images/jignesh patel.jpg'
  },
  {
    id: 'team-5',
    name: 'Jimmy Munoz',
    role: 'Regional Operations Manager',
    specialty: 'Multi-Brand Operations',
    icon: Building2,
    image: '/images/jimmy munoz.jpg'
  },
  {
    id: 'team-6',
    name: 'Christa Wijendran',
    role: 'Regional Accounting & HR',
    specialty: 'HR & Accounting Control',
    icon: UserCheck,
    image: '/images/christa wjendran.jpg'
  },
  {
    id: 'team-7',
    name: 'Laura Lewis',
    role: 'Regional Sales & Marketing',
    specialty: 'Sales & Market Development',
    icon: Megaphone,
    image: '/images/laure lewis.jpg'
  },
  {
    id: 'team-8',
    name: 'Diana Ortiz',
    role: 'Director of Sales',
    specialty: 'Corporate Sales & Retention',
    icon: TrendingUp,
    image: '/images/daina ortiz.jpg'
  }
];

interface PortfolioItem {
  id: string;
  name: string;
  location: string;
  category: string;
  image: string;
}

const portfolioProperties: PortfolioItem[] = [
  {
    id: 'prop-1',
    name: 'Grand Colinas Heights Resort',
    location: 'Austin, Texas',
    category: 'Premium Branded',
    image: '/images/1.png'
  },
  {
    id: 'prop-2',
    name: 'Vanguard Suites & Plaza',
    location: 'Dallas, Texas',
    category: 'Select Service',
    image: '/images/2.png'
  },
  {
    id: 'prop-3',
    name: 'Colinas Executive Extended Stay',
    location: 'Houston, Texas',
    category: 'Extended Stay',
    image: '/images/3.png'
  },
  {
    id: 'prop-4',
    name: 'The Artisan Colinas Lodge',
    location: 'San Antonio, Texas',
    category: 'Boutique Hotel',
    image: '/images/4.png'
  },
  {
    id: 'prop-5',
    name: 'Colinas Crest Coastal Club',
    location: 'Galveston, Texas',
    category: 'Resort Asset',
    image: '/images/5.png'
  },
  {
    id: 'prop-6',
    name: 'Metropolitan Business Hotel',
    location: 'Fort Worth, Texas',
    category: 'Corporate Hotel',
    image: '/images/6.png'
  },
  {
    id: 'prop-7',
    name: 'Midwest Plaza & Suites',
    location: 'Oklahoma City, OK',
    category: 'Select Service',
    image: '/images/7.png'
  },
  {
    id: 'prop-8',
    name: 'Gateway Grand Hotel',
    location: 'El Paso, Texas',
    category: 'Full Service',
    image: '/images/8.png'
  },
  {
    id: 'prop-9',
    name: 'Colinas Oasis Resort & Spa',
    location: 'Corpus Christi, Texas',
    category: 'Luxury Resort',
    image: '/images/9.png'
  },
  {
    id: 'prop-10',
    name: 'Plaza Center Inn & Suites',
    location: 'Arlington, Texas',
    category: 'Select Service',
    image: '/images/10.png'
  },
  {
    id: 'prop-11',
    name: 'Lakeside Executive Hotel',
    location: 'Plano, Texas',
    category: 'Extended Stay',
    image: '/images/11.png'
  },
  {
    id: 'prop-12',
    name: 'Summit Hill Hotel',
    location: 'Denver, Colorado',
    category: 'Boutique Property',
    image: '/images/12.png'
  },
  {
    id: 'prop-13',
    name: 'Colinas Heritage Boutique Inn',
    location: 'Fredericksburg, Texas',
    category: 'Historic Boutique',
    image: '/images/13.png'
  },
  {
    id: 'prop-14',
    name: 'Skyline Business Suites',
    location: 'Irving, Texas',
    category: 'Corporate Select',
    image: '/images/14.png'
  },
  {
    id: 'prop-15',
    name: 'The Grand View Hotel',
    location: 'Waco, Texas',
    category: 'Full Service',
    image: '/images/15.png'
  },
  {
    id: 'prop-16',
    name: 'Lone Star Hospitality Suites',
    location: 'Lubbock, Texas',
    category: 'Select Service',
    image: '/images/16.png'
  }
];

interface HomeProps {
  setActivePage?: (page: PageId) => void;
}

export const Home: React.FC<HomeProps> = () => {
  const alacarteCarouselRef = useRef<HTMLDivElement>(null);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const portfolioCarouselRef = useRef<HTMLDivElement>(null);
  const [isPortfolioAutoPlayPaused, setIsPortfolioAutoPlayPaused] = useState(false);
  const teamCarouselRef = useRef<HTMLDivElement>(null);
  const [isTeamAutoPlayPaused, setIsTeamAutoPlayPaused] = useState(false);

  const [ctaForm, setCtaForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    property: '',
    service: 'Full Hotel Operations Management',
    message: '',
  });
  const [isCtaSubmitting, setIsCtaSubmitting] = useState(false);
  const [ctaSubmitted, setCtaSubmitted] = useState(false);

  const handleCtaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ctaForm.name || !ctaForm.email) return;
    setIsCtaSubmitting(true);
    setTimeout(() => {
      setIsCtaSubmitting(false);
      setCtaSubmitted(true);
    }, 1200);
  };

  const handleCtaReset = () => {
    setCtaForm({
      name: '',
      company: '',
      email: '',
      phone: '',
      property: '',
      service: 'Full Hotel Operations Management',
      message: '',
    });
    setCtaSubmitted(false);
  };

  const handleNav = (target: string) => {
    const idMap: Record<string, string> = {
      services: 'services-showcase',
      portfolio: 'portfolio-showcase',
      team: 'team-showcase',
      about: 'about-teaser',
      contact: 'cta-section',
      lifecycle: 'services-showcase',
      hotel: 'hotel-management',
      'why-choose': 'why-choose-us',
      'why-choose-us': 'why-choose-us',
      advantage: 'why-choose-us',
    };

    const targetId = idMap[target] || target;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const filteredAlacarte = alacarteServices;

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

  const scrollPortfolio = (direction: 'left' | 'right') => {
    if (portfolioCarouselRef.current) {
      const cardWidth = 270;
      const { scrollLeft, scrollWidth, clientWidth } = portfolioCarouselRef.current;
      
      if (direction === 'right') {
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          portfolioCarouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          portfolioCarouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      } else {
        if (scrollLeft <= 20) {
          portfolioCarouselRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
        } else {
          portfolioCarouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }
      }
    }
  };

  // Portfolio Automatic Carousel Interval
  useEffect(() => {
    if (isPortfolioAutoPlayPaused) return;

    const interval = setInterval(() => {
      scrollPortfolio('right');
    }, 3400);

    return () => clearInterval(interval);
  }, [isPortfolioAutoPlayPaused]);

  const scrollTeam = (direction: 'left' | 'right') => {
    if (teamCarouselRef.current) {
      const cardWidth = 240;
      const { scrollLeft, scrollWidth, clientWidth } = teamCarouselRef.current;
      
      if (direction === 'right') {
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          teamCarouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          teamCarouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      } else {
        if (scrollLeft <= 20) {
          teamCarouselRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
        } else {
          teamCarouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }
      }
    }
  };

  // Team Automatic Carousel Interval (Loops smoothly and pauses on hover)
  useEffect(() => {
    if (isTeamAutoPlayPaused) return;

    const interval = setInterval(() => {
      scrollTeam('right');
    }, 3000);

    return () => clearInterval(interval);
  }, [isTeamAutoPlayPaused]);

  return (
    <div className="w-full">
      {/* Full-Bleed Luxury Hero Slider */}
      <Carousel />

      {/* Dynamic Countable Stats / Performance Counter in a Single Grand Unified Box */}
      <section className="py-12 bg-gradient-to-b from-[#040711] via-[#081020] to-[#040711] border-y border-gold-medium/25 px-4 sm:px-6 lg:px-8 relative z-20 shadow-2xl overflow-hidden">
        {/* Fine Gold Grid Dot Mesh Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <RevealSection type="slide-up">
            {/* SINGLE UNIFIED LUXURY BOX */}
            <Card3D depth={6} className="w-full">
              <div className="w-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0c1427]/95 via-[#091020]/90 to-[#060a14]/95 border border-gold-medium/30 hover:border-gold-bright/60 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(212,175,55,0.25)] relative overflow-hidden transition-all duration-500">
                {/* Background Ambient Radial Glows */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold-medium/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-bright/5 rounded-full blur-3xl pointer-events-none" />

                {/* 4 Connected Metric Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
                  <StatCounter 
                    start={1950}
                    end={2016}
                    duration={2200}
                    tag="Founding Milestone"
                    icon={Award}
                    label="Established"
                    sublabel="Hospitality Excellence"
                  />
                  <StatCounter 
                    start={0}
                    end={25}
                    suffix="+"
                    duration={2000}
                    tag="Executive Acumen"
                    icon={Users}
                    label="Years Leadership"
                    sublabel="Combined Industry Experience"
                  />
                  <StatCounter 
                    start={0}
                    end={17}
                    suffix="+"
                    duration={2000}
                    tag="Full Capabilities"
                    icon={Layers}
                    label="Service Modules"
                    sublabel="TX & Midwest Regional Reach"
                  />
                  <StatCounter 
                    start={0}
                    end={100}
                    suffix="%"
                    duration={2400}
                    tag="Fiduciary Alignment"
                    icon={Target}
                    label="Owner-Aligned Performance"
                    sublabel="IHG • Choice • Wyndham • Boutique"
                    isLast={true}
                  />
                </div>
              </div>
            </Card3D>
          </RevealSection>
        </div>
      </section>

      {/* ABOUT US SECTION (MATCHING SCREENSHOT) */}
      <section id="about-teaser" className="py-10 bg-[#090e1b] border-t border-gold-medium/15 px-4 sm:px-6 lg:px-8 text-left relative overflow-hidden">
        {/* Atmospheric Top-Left Warm Light Spill */}
        <div className="absolute top-0 left-0 w-[550px] h-[550px] bg-[radial-gradient(circle_at_0%_0%,rgba(212,175,55,0.07)_0%,transparent_65%)] pointer-events-none" />
        <FloatingOrbs />

        <RevealSection type="fade-right" className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Simple Narrative & 2x2 Feature Grid */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Eyebrow Header */}
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-semibold tracking-[0.25em] text-gold-bright uppercase">
                  ABOUT LAS COLINAS HOSPITALITY MANAGEMENT
                </span>
                <span className="h-[1.5px] w-12 bg-gold-medium/60 inline-block" />
              </div>

              {/* Main Headline */}
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-wide leading-tight">
                  Elevating Hospitality.<br />
                  Enhancing Experiences<span className="text-gold-bright">.</span>
                </h2>
                {/* Gold Accent Bar */}
                <div className="w-10 h-1 bg-gold-medium rounded-full mt-4" />
              </div>

              {/* Exact User-Provided Narrative Text */}
              <div className="space-y-3.5 text-gray-300 font-light text-sm sm:text-base leading-relaxed">
                <p>
                  Founded in 2016, Las Colinas Hospitality Management has earned a reputation for operational excellence, financial discipline, and strategic hotel management. Our experienced leadership team combines deep hospitality expertise with a hands-on approach to delivering measurable results for owners and investors.
                </p>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Whether developing a new hotel, repositioning an existing asset, or managing daily operations, we focus on maximizing profitability while delivering exceptional guest experiences.
                </p>
              </div>

              {/* 2x2 Features Grid with Circular Icons (Matching Screenshot) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                
                {/* 1. Expertise */}
                <motion.div whileHover={{ y: -4, scale: 1.02 }} className="flex items-start gap-3.5 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-gold-medium/10 border border-gold-medium/30 flex items-center justify-center flex-shrink-0 text-gold-bright shadow-inner group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-300">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-white group-hover:text-gold-bright transition-colors">
                      Expertise
                    </h4>
                    <p className="text-xs text-gray-400 font-light mt-0.5 leading-snug">
                      Decades of combined industry experience.
                    </p>
                    <div className="w-6 h-[1.5px] bg-gold-medium/60 mt-2" />
                  </div>
                </motion.div>

                {/* 2. Results Driven */}
                <motion.div whileHover={{ y: -4, scale: 1.02 }} className="flex items-start gap-3.5 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-gold-medium/10 border border-gold-medium/30 flex items-center justify-center flex-shrink-0 text-gold-bright shadow-inner group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-300">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-white group-hover:text-gold-bright transition-colors">
                      Results Driven
                    </h4>
                    <p className="text-xs text-gray-400 font-light mt-0.5 leading-snug">
                      Focused on performance, profitability and growth.
                    </p>
                    <div className="w-6 h-[1.5px] bg-gold-medium/60 mt-2" />
                  </div>
                </motion.div>

                {/* 3. Client Focused */}
                <motion.div whileHover={{ y: -4, scale: 1.02 }} className="flex items-start gap-3.5 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-gold-medium/10 border border-gold-medium/30 flex items-center justify-center flex-shrink-0 text-gold-bright shadow-inner group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-300">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-white group-hover:text-gold-bright transition-colors">
                      Client Focused
                    </h4>
                    <p className="text-xs text-gray-400 font-light mt-0.5 leading-snug">
                      Tailored solutions aligned with your unique goals.
                    </p>
                    <div className="w-6 h-[1.5px] bg-gold-medium/60 mt-2" />
                  </div>
                </motion.div>

                {/* 4. Integrity */}
                <motion.div whileHover={{ y: -4, scale: 1.02 }} className="flex items-start gap-3.5 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-gold-medium/10 border border-gold-medium/30 flex items-center justify-center flex-shrink-0 text-gold-bright shadow-inner group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-300">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-white group-hover:text-gold-bright transition-colors">
                      Integrity
                    </h4>
                    <p className="text-xs text-gray-400 font-light mt-0.5 leading-snug">
                      Built on trust, transparency and long-term partnerships.
                    </p>
                    <div className="w-6 h-[1.5px] bg-gold-medium/60 mt-2" />
                  </div>
                </motion.div>

              </div>

              {/* Action Button: LEARN MORE (Matching Screenshot) */}
              <div className="pt-3 flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(212, 175, 55, 0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleNav('services')}
                  className="px-8 py-3 bg-navy-dark border border-gold-medium/40 hover:border-gold-bright hover:bg-gold-medium hover:text-navy-dark text-white font-bold text-xs uppercase tracking-widest rounded transition-all duration-300 shadow-lg flex items-center gap-3 cursor-pointer group"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-4 h-4 text-gold-bright group-hover:text-navy-dark group-hover:translate-x-1 transition-all" />
                </motion.button>
              </div>

            </div>

            {/* Right Column: 4-Image Collage Gallery (Matching Screenshot) */}
            <div className="lg:col-span-6 space-y-3.5">
              
              {/* Top Large Hero Image */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="rounded-2xl overflow-hidden border border-gold-medium/25 shadow-2xl relative group"
              >
                <img
                  src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2070&auto=format&fit=crop"
                  alt="Grand Luxury Hotel Architecture and Excellence"
                  className="w-full h-[280px] sm:h-[340px] object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Bottom 3 Columns of Supporting Visuals */}
              <div className="grid grid-cols-3 gap-3.5">
                {/* 1. Luxury King Suite */}
                <motion.div 
                  whileHover={{ scale: 1.06, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="rounded-xl overflow-hidden border border-gold-medium/20 shadow-md group cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop"
                    alt="Luxury Hotel King Suite"
                    className="w-full h-[105px] sm:h-[135px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>

                {/* 2. Professional Executive Partnership */}
                <motion.div 
                  whileHover={{ scale: 1.06, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="rounded-xl overflow-hidden border border-gold-medium/20 shadow-md group cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1970&auto=format&fit=crop"
                    alt="Executive Hotel Management & Strategic Partnerships"
                    className="w-full h-[105px] sm:h-[135px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>

                {/* 3. Sunset Resort Exterior & Pool */}
                <motion.div 
                  whileHover={{ scale: 1.06, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="rounded-xl overflow-hidden border border-gold-medium/20 shadow-md group cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049&auto=format&fit=crop"
                    alt="Luxury Sunset Resort & Infinity Pool"
                    className="w-full h-[105px] sm:h-[135px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
              </div>

            </div>

          </div>
        </RevealSection>
      </section>

      {/* OUR MISSION & VISION SECTION (MATCHING 4TH IMAGE DESIGN) */}
      <section id="vision-mission" className="py-10 bg-gradient-to-b from-[#0c1426] via-[#12203d] to-[#0a1120] border-t border-gold-medium/20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Center Illuminated Golden Halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(212,175,55,0.09)_0%,transparent_70%)] pointer-events-none" />
        <FloatingOrbs />

        <RevealSection type="zoom-in" className="max-w-7xl mx-auto relative z-10 space-y-16">
          
          {/* Section Header (Matching 4th Image) */}
          <div className="max-w-3xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[1px] w-12 bg-gold-medium/60" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-gold-bright uppercase">
                OUR PURPOSE
              </span>
              <span className="h-[1px] w-12 bg-gold-medium/60" />
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-wide">
              Mission & Vision
            </h2>
            
            <p className="text-gray-300 text-xs sm:text-sm font-light tracking-wide">
              Delivering excellence today. Inspiring tomorrow.
            </p>
          </div>

          {/* Central 3-Column Composition: Left Mission, Center Circular Portal, Right Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* Left Flank: MISSION */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4 px-4">
              {/* Gold Target Circular Badge */}
              <motion.div 
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-14 h-14 rounded-full border-2 border-gold-bright bg-navy-dark/90 flex items-center justify-center text-gold-bright shadow-xl shadow-gold-medium/10 cursor-pointer"
              >
                <Target className="w-6 h-6 text-gold-bright" />
              </motion.div>

              {/* Title with Gold Connecting Flanking Bars */}
              <div className="flex items-center justify-center gap-3 w-full">
                <span className="h-[1px] bg-gold-medium/40 flex-1 hidden sm:block" />
                <h3 className="font-serif text-lg sm:text-xl font-bold tracking-[0.2em] text-gold-bright uppercase">
                  MISSION
                </h3>
                <span className="h-[1px] bg-gold-medium/40 flex-1 hidden sm:block" />
              </div>

              {/* Mission Narrative */}
              <p className="text-gray-300 font-light text-xs sm:text-sm leading-relaxed max-w-sm">
                To deliver exceptional hospitality management services that drive operational excellence, maximize value, and create memorable experiences for our guests and stakeholders.
              </p>
            </div>

            {/* Center Focal: Grand Circular Image Portal with 3D Orbiting Rings */}
            <div className="lg:col-span-4 flex justify-center items-center py-4">
              <div className="relative w-64 h-64 sm:w-76 sm:h-76 flex items-center justify-center">
                {/* Outer Concentric Animated Gold Orbit Ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border border-dashed border-gold-medium/40 scale-105 pointer-events-none" 
                />
                
                {/* Counter-rotating Inner Ring with glowing particle dots */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
                  className="absolute inset-3 rounded-full border border-gold-bright/50 pointer-events-none shadow-2xl shadow-gold-medium/20"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-gold-bright absolute -top-1 left-1/2 -translate-x-1/2 shadow-lg shadow-gold-bright animate-pulse" />
                  <div className="w-2 rounded-full bg-gold-medium absolute -bottom-1 left-1/2 -translate-x-1/2 shadow-md shadow-gold-medium" />
                </motion.div>

                {/* Inner 3D Image Container */}
                <motion.div 
                  whileHover={{ scale: 1.05, rotateZ: 2 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-gold-medium shadow-2xl relative group cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
                    alt="Grand Luxury Hotel Atrium & Chandelier Lounge"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </div>

            {/* Right Flank: VISION */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4 px-4">
              {/* Gold Eye Circular Badge */}
              <motion.div 
                whileHover={{ scale: 1.15, rotate: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-14 h-14 rounded-full border-2 border-gold-bright bg-navy-dark/90 flex items-center justify-center text-gold-bright shadow-xl shadow-gold-medium/10 cursor-pointer"
              >
                <Eye className="w-6 h-6 text-gold-bright" />
              </motion.div>

              {/* Title with Gold Connecting Flanking Bars */}
              <div className="flex items-center justify-center gap-3 w-full">
                <span className="h-[1px] bg-gold-medium/40 flex-1 hidden sm:block" />
                <h3 className="font-serif text-lg sm:text-xl font-bold tracking-[0.2em] text-gold-bright uppercase">
                  VISION
                </h3>
                <span className="h-[1px] bg-gold-medium/40 flex-1 hidden sm:block" />
              </div>

              {/* Vision Narrative */}
              <p className="text-gray-300 font-light text-xs sm:text-sm leading-relaxed max-w-sm">
                To be the most trusted and innovative hospitality management partner, recognized for transforming properties, inspiring teams, and shaping the future of hospitality.
              </p>
            </div>

          </div>

          {/* Bottom 5 Value Pillars (Matching 4th Image) */}
          <div className="pt-10 border-t border-gold-medium/15">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 max-w-5xl mx-auto">
              
              {/* 1. Integrity */}
              <motion.div whileHover={{ y: -8, scale: 1.06 }} className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gold-medium/10 border border-gold-medium/30 flex items-center justify-center text-gold-bright mb-2.5 group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-300 shadow-inner">
                  <Shield className="w-5 h-5 text-gold-bright group-hover:text-navy-dark transition-colors" />
                </div>
                <span className="text-xs font-serif font-medium text-gray-200 group-hover:text-gold-bright tracking-wider transition-colors">
                  Integrity
                </span>
              </motion.div>

              {/* 2. Innovation */}
              <motion.div whileHover={{ y: -8, scale: 1.06 }} className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gold-medium/10 border border-gold-medium/30 flex items-center justify-center text-gold-bright mb-2.5 group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-300 shadow-inner">
                  <Lightbulb className="w-5 h-5 text-gold-bright group-hover:text-navy-dark transition-colors" />
                </div>
                <span className="text-xs font-serif font-medium text-gray-200 group-hover:text-gold-bright tracking-wider transition-colors">
                  Innovation
                </span>
              </motion.div>

              {/* 3. Collaboration */}
              <motion.div whileHover={{ y: -8, scale: 1.06 }} className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gold-medium/10 border border-gold-medium/30 flex items-center justify-center text-gold-bright mb-2.5 group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-300 shadow-inner">
                  <Handshake className="w-5 h-5 text-gold-bright group-hover:text-navy-dark transition-colors" />
                </div>
                <span className="text-xs font-serif font-medium text-gray-200 group-hover:text-gold-bright tracking-wider transition-colors">
                  Collaboration
                </span>
              </motion.div>

              {/* 4. Sustainability */}
              <motion.div whileHover={{ y: -8, scale: 1.06 }} className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gold-medium/10 border border-gold-medium/30 flex items-center justify-center text-gold-bright mb-2.5 group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-300 shadow-inner">
                  <Leaf className="w-5 h-5 text-gold-bright group-hover:text-navy-dark transition-colors" />
                </div>
                <span className="text-xs font-serif font-medium text-gray-200 group-hover:text-gold-bright tracking-wider transition-colors">
                  Sustainability
                </span>
              </motion.div>

              {/* 5. Excellence */}
              <motion.div whileHover={{ y: -8, scale: 1.06 }} className="flex flex-col items-center col-span-2 sm:col-span-1 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gold-medium/10 border border-gold-medium/30 flex items-center justify-center text-gold-bright mb-2.5 group-hover:bg-gold-medium group-hover:text-navy-dark transition-all duration-300 shadow-inner">
                  <Star className="w-5 h-5 text-gold-bright group-hover:text-navy-dark transition-colors" />
                </div>
                <span className="text-xs font-serif font-medium text-gray-200 group-hover:text-gold-bright tracking-wider transition-colors">
                  Excellence
                </span>
              </motion.div>

            </div>
          </div>

        </RevealSection>
      </section>

      {/* WHY CHOOSE LAS COLINAS: ON-SCROLL HEADINGS REVEAL */}
      <section id="why-choose-us" className="relative bg-[#060a15] border-t border-gold-medium/20 text-left">
        <WhyChooseStickySequencer />
      </section>

      {/* COMPREHENSIVE HOSPITALITY MANAGEMENT SOLUTIONS (SINGLE LINE CAROUSEL) */}
      <section id="services-showcase" className="py-10 bg-[#060a15] border-t border-gold-medium/20 px-4 sm:px-6 lg:px-8 text-left relative overflow-hidden">
        {/* Ambient Horizontal Gold Light Wash */}
        <div className="absolute top-1/2 left-0 right-0 h-56 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_75%)] pointer-events-none" />
        <FloatingOrbs />

        <RevealSection type="slide-up" className="max-w-7xl mx-auto relative z-10 space-y-10">
          
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
                  <Card3D
                    key={ala.id}
                    depth={10}
                    className="w-[195px] sm:w-[215px] flex-shrink-0 snap-start"
                  >
                    <div className="bg-navy-medium/85 backdrop-blur-md border border-gold-medium/20 hover:border-gold-medium/60 rounded-xl p-4 transition-all duration-300 hover:shadow-xl hover:shadow-gold-medium/10 flex flex-col items-center text-center justify-center h-[190px] sm:h-[200px] relative overflow-hidden group">
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
                  </Card3D>
                );
              })}
            </div>
          </div>

        </RevealSection>
      </section>

      {/* FLAGSHIP HERO SPOTLIGHT: Hotel Management Services */}
      <section id="hotel-management" className="py-10 bg-gradient-to-b from-[#080d19] via-[#0f172a] to-[#080d19] border-t border-gold-medium/20 px-4 sm:px-6 lg:px-8 text-left relative overflow-hidden">
        {/* Top Center Spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.07)_0%,transparent_70%)] pointer-events-none" />
        <FloatingOrbs />

        <RevealSection type="blur-in" className="max-w-7xl mx-auto relative z-10">
          <div className="relative rounded-2xl bg-gradient-to-br from-navy-medium via-navy-dark to-navy-medium border border-gold-medium/30 p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden">
            
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
                      <motion.span
                        key={dIdx}
                        whileHover={{ y: -3, scale: 1.06 }}
                        className="px-3.5 py-1.5 rounded-lg bg-navy-dark/90 border border-gold-medium/20 text-xs text-gray-200 font-medium tracking-wide shadow-sm cursor-pointer hover:border-gold-bright"
                      >
                        {dept}
                      </motion.span>
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
                      <motion.div
                        key={idx}
                        whileHover={{ x: 5, scale: 1.02 }}
                        className="p-3.5 rounded-xl bg-navy-dark/70 border border-gold-medium/15 hover:border-gold-medium/35 transition-all duration-300 flex items-center gap-3 shadow-md cursor-pointer"
                      >
                        <div className="w-6 h-6 rounded-full bg-gold-medium/20 border border-gold-medium/40 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-gold-bright" />
                        </div>
                        <span className="text-xs sm:text-sm text-gray-200 font-medium">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Consultation CTA */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.04, boxShadow: "0px 10px 30px rgba(212, 175, 55, 0.3)" }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleNav('contact')}
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-gold-medium via-gold-bright to-gold-medium text-navy-dark font-bold tracking-widest text-xs uppercase rounded shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <span>Request Management Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Right Column: Visual Showcase & Performance Stats */}
              <div className="lg:col-span-5 space-y-6">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="relative rounded-xl overflow-hidden border border-gold-medium/30 shadow-2xl bg-navy-dark"
                >
                  <div
                    className="h-80 sm:h-96 w-full bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1600&auto=format&fit=crop')" }}
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
                </motion.div>

                <div className="p-5 rounded-xl bg-navy-dark/60 border border-gold-medium/15">
                  <p className="text-xs text-gray-300 font-light italic leading-relaxed text-center">
                    "Delivering operational rigor, seamless guest satisfaction, and bottom-line owner returns across branded and independent assets."
                  </p>
                </div>
              </div>

            </div>
          </div>
        </RevealSection>
      </section>

      {/* OUR PORTFOLIO SECTION (MATCHING DESIGN 1) */}
      <section id="portfolio-showcase" className="py-10 bg-gradient-to-b from-[#090f1f] via-[#0e172e] to-[#070c18] border-t border-gold-medium/20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Gallery Fine Dot Grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-36 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />
        <FloatingOrbs />

        <RevealSection type="flip-up" className="max-w-7xl mx-auto relative z-10 space-y-10">
          
          {/* Header (Matching Design 1) */}
          <div className="max-w-3xl mx-auto space-y-2">
            <div className="flex items-center justify-center gap-3">
              <span className="h-[1px] w-8 bg-gold-medium/60" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-gold-bright uppercase">
                OUR PORTFOLIO
              </span>
              <span className="h-[1px] w-8 bg-gold-medium/60" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-wide leading-tight">
              A Portfolio of Exceptional Hospitality Assets
            </h2>

            <div className="w-12 h-[1.5px] bg-gold-medium mx-auto mt-3" />
          </div>

          {/* Properties Horizontal Carousel Viewport with Indicator Arrows */}
          <div 
            className="relative px-2 sm:px-6"
            onMouseEnter={() => setIsPortfolioAutoPlayPaused(true)}
            onMouseLeave={() => setIsPortfolioAutoPlayPaused(false)}
          >
            {/* Left Indicator Arrow */}
            <button
              onClick={() => scrollPortfolio('left')}
              aria-label="Previous Properties"
              className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-gold-medium/30 bg-navy-dark/95 backdrop-blur-md text-gold-bright hover:bg-gold-medium hover:text-navy-dark hover:border-gold-medium transition-all duration-300 flex items-center justify-center shadow-xl cursor-pointer hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Indicator Arrow */}
            <button
              onClick={() => scrollPortfolio('right')}
              aria-label="Next Properties"
              className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-gold-medium/30 bg-navy-dark/95 backdrop-blur-md text-gold-bright hover:bg-gold-medium hover:text-navy-dark hover:border-gold-medium transition-all duration-300 flex items-center justify-center shadow-xl cursor-pointer hover:scale-105"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Properties Horizontal Track */}
            <div
              ref={portfolioCarouselRef}
              className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-2 no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {portfolioProperties.map((prop) => (
                <Card3D
                  key={prop.id}
                  depth={8}
                  onClick={() => handleNav('portfolio')}
                  className="w-[230px] sm:w-[260px] flex-shrink-0 snap-start cursor-pointer"
                >
                  <div className="bg-navy-medium/90 border border-gold-medium/20 hover:border-gold-bright rounded-xl overflow-hidden shadow-xl transition-all duration-300 group flex flex-col h-full">
                    {/* Property Image Container */}
                    <div className="h-44 sm:h-48 w-full overflow-hidden relative bg-navy-dark">
                      <img
                        src={prop.image}
                        alt={prop.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent pointer-events-none" />

                      {/* Category Pill */}
                      <div className="absolute top-2.5 right-2.5">
                        <span className="text-[9px] font-mono tracking-wider text-gold-bright uppercase bg-navy-dark/90 px-2 py-0.5 rounded border border-gold-medium/30">
                          {prop.category}
                        </span>
                      </div>
                    </div>

                    {/* Caption Strip (Centered Name & Location - Matching Design 1) */}
                    <div className="p-3.5 bg-navy-dark/95 border-t border-gold-medium/15 text-center">
                      <h3 className="font-serif text-sm sm:text-base font-semibold text-white group-hover:text-gold-bright transition-colors truncate">
                        {prop.name}
                      </h3>
                      <p className="text-[11px] text-gold-medium font-light mt-0.5 tracking-wide flex items-center justify-center gap-1">
                        <MapPin className="w-3 h-3 text-gold-bright flex-shrink-0" />
                        <span>{prop.location}</span>
                      </p>
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>

          {/* Bottom Action Button (Matching Design 1) */}
          <div className="pt-2">
            <button
              onClick={() => handleNav('portfolio')}
              className="inline-flex items-center gap-2 px-8 py-3 rounded border border-gold-medium hover:border-gold-bright hover:bg-gold-medium hover:text-navy-dark text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg cursor-pointer group hover:scale-105"
            >
              <span>VIEW ALL PROPERTIES</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-bright group-hover:text-navy-dark group-hover:translate-x-1 transition-all" />
            </button>
          </div>

        </RevealSection>
      </section>

      {/* OUR TEAM SECTION (DESIGN 5 WITH AUTOMATIC CAROUSEL) */}
      <section id="team-showcase" className="py-10 bg-gradient-to-r from-[#060a15] via-[#0e172d] to-[#060a15] border-t border-gold-medium/20 px-4 sm:px-6 lg:px-8 text-left relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
        <FloatingOrbs />

        <RevealSection type="fade-right" className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Typography Narrative (Design 5) */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-gold-bright uppercase block">
                OUR TEAM
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-wide leading-tight">
                Real People. Real Passion.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-bright via-gold-medium to-gold-dark italic font-normal">
                  Remarkable Hospitality.
                </span>
              </h2>
              
              <div className="w-10 h-1 bg-gold-medium rounded-full mt-2 mb-3" />
              
              <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
                From front-line specialists to strategic leaders, our team is dedicated to excellence in every detail.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => handleNav('team')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gold-medium/40 hover:border-gold-bright text-gold-bright hover:bg-gold-medium/10 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer group"
                >
                  <span>Meet Our Full Team</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Automatic Carousel with Slanted/Angled Department Team Cards (Design 5) */}
            <div 
              className="lg:col-span-8 relative group"
              onMouseEnter={() => setIsTeamAutoPlayPaused(true)}
              onMouseLeave={() => setIsTeamAutoPlayPaused(false)}
            >
              {/* Left Indicator Arrow */}
              <button
                onClick={() => scrollTeam('left')}
                aria-label="Previous Team Slide"
                className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gold-medium/30 bg-navy-dark/95 backdrop-blur-md text-gold-bright hover:bg-gold-medium hover:text-navy-dark hover:border-gold-medium transition-all duration-300 flex items-center justify-center shadow-xl cursor-pointer hover:scale-105"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Right Indicator Arrow */}
              <button
                onClick={() => scrollTeam('right')}
                aria-label="Next Team Slide"
                className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gold-medium/30 bg-navy-dark/95 backdrop-blur-md text-gold-bright hover:bg-gold-medium hover:text-navy-dark hover:border-gold-medium transition-all duration-300 flex items-center justify-center shadow-xl cursor-pointer hover:scale-105"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Team Cards Track */}
              <div
                ref={teamCarouselRef}
                className="flex gap-3.5 sm:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3 pt-2 no-scrollbar px-1"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {teamMembersData.map((member) => {
                  const Icon = member.icon;
                  return (
                    <Card3D
                      key={member.id}
                      depth={8}
                      onClick={() => handleNav('team')}
                      className="w-[190px] sm:w-[210px] flex-shrink-0 snap-start cursor-pointer"
                    >
                      <div className="bg-navy-medium/90 border border-gold-medium/25 hover:border-gold-medium/60 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-gold-medium/10 transition-all duration-300 group/card flex flex-col justify-between h-full">
                        {/* Executive Photo from public/images/ */}
                        <div className="h-40 sm:h-44 w-full overflow-hidden relative bg-navy-dark">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-80" />
                          
                          {/* Corner Specialty Tag */}
                          <div className="absolute bottom-2 left-2 right-2">
                            <span className="text-[9px] font-mono tracking-wider text-gold-bright uppercase bg-navy-dark/90 px-2 py-0.5 rounded border border-gold-medium/30 truncate block text-center">
                              {member.specialty}
                            </span>
                          </div>
                        </div>

                        {/* Bottom Info Strip (Design 5) */}
                        <div className="p-3 bg-navy-dark/95 border-t border-gold-medium/20 text-center flex flex-col items-center justify-center">
                          <div className="flex items-center gap-1.5 justify-center mb-0.5">
                            <Icon className="w-3.5 h-3.5 text-gold-bright flex-shrink-0" />
                            <h4 className="font-serif text-xs sm:text-sm font-semibold text-white group-hover/card:text-gold-bright transition-colors truncate">
                              {member.name}
                            </h4>
                          </div>
                          <span className="text-[10px] text-gray-300 font-light tracking-wide truncate">
                            {member.role}
                          </span>
                        </div>
                      </div>
                    </Card3D>
                  );
                })}
              </div>
            </div>

          </div>
        </RevealSection>
      </section>

      {/* CALL TO ACTION SECTION (GOLDEN ARCHITECTURAL SPLIT PORTAL DESIGN) */}
      <section id="cta-section" className="py-10 bg-gradient-to-b from-[#060a16] via-[#0d162d] to-[#03050a] px-4 sm:px-6 lg:px-8 border-t border-gold-medium/25 relative overflow-hidden text-left">
        {/* Dual Grand Golden Flare Spots */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />
        <FloatingOrbs />

        <RevealSection type="zoom-in" className="max-w-7xl mx-auto relative z-10">
          <div className="rounded-3xl border border-gold-medium/30 bg-gradient-to-br from-navy-dark via-navy-medium/90 to-navy-dark p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Strategic Executive Pitch (Content on Left Side) */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Eyebrow */}
                <div className="flex items-center gap-3">
                  <span className="h-[1.5px] w-8 bg-gold-medium/60" />
                  <span className="text-[11px] font-semibold tracking-[0.25em] text-gold-bright uppercase">
                    PARTNERSHIP ADVISORY
                  </span>
                  <span className="h-[1.5px] w-8 bg-gold-medium/60" />
                </div>

                {/* Headline */}
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-wide leading-tight">
                  Transforming Hotel Assets <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-bright via-gold-medium to-gold-dark italic font-normal">
                    Into Outperforming Investments.
                  </span>
                </h2>

                {/* Narrative */}
                <p className="text-gray-300 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl">
                  Whether acquiring a property, repositioning an existing asset, or seeking high-impact management, our leadership team delivers disciplined operational oversight, transparent financial reporting, and sustainable ROI.
                </p>

                {/* 4 Feature Checkpoints in 2-Col Grid with Motion Hover */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <motion.div whileHover={{ x: 4 }} className="flex items-center gap-2.5 text-xs text-gray-200 font-light cursor-pointer">
                    <div className="w-5 h-5 rounded-full bg-gold-medium/15 border border-gold-medium/40 flex items-center justify-center text-gold-bright flex-shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>Fiduciary & Owner-First Alignment</span>
                  </motion.div>
                  <motion.div whileHover={{ x: 4 }} className="flex items-center gap-2.5 text-xs text-gray-200 font-light cursor-pointer">
                    <div className="w-5 h-5 rounded-full bg-gold-medium/15 border border-gold-medium/40 flex items-center justify-center text-gold-bright flex-shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>Dynamic Yield & RevPAR Growth</span>
                  </motion.div>
                  <motion.div whileHover={{ x: 4 }} className="flex items-center gap-2.5 text-xs text-gray-200 font-light cursor-pointer">
                    <div className="w-5 h-5 rounded-full bg-gold-medium/15 border border-gold-medium/40 flex items-center justify-center text-gold-bright flex-shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>Brand QA & Turnaround Execution</span>
                  </motion.div>
                  <motion.div whileHover={{ x: 4 }} className="flex items-center gap-2.5 text-xs text-gray-200 font-light cursor-pointer">
                    <div className="w-5 h-5 rounded-full bg-gold-medium/15 border border-gold-medium/40 flex items-center justify-center text-gold-bright flex-shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>Strategic Renovation & PIP Oversight</span>
                  </motion.div>
                </div>

                {/* Direct Contact Bar */}
                <div className="pt-3 flex flex-wrap items-center gap-5 text-xs text-gray-300">
                  <a href="tel:+12149520198" className="inline-flex items-center gap-2 hover:text-gold-bright transition-colors font-medium">
                    <Phone className="w-4 h-4 text-gold-bright" />
                    <span>+1 (214) 952-0198</span>
                  </a>
                  <span className="text-gold-medium/40">•</span>
                  <a href="mailto:info@lchm.com" className="inline-flex items-center gap-2 hover:text-gold-bright transition-colors font-medium">
                    <Mail className="w-4 h-4 text-gold-bright" />
                    <span>info@lchm.com</span>
                  </a>
                  <span className="text-gold-medium/40">•</span>
                  <span className="text-gray-400 font-light">Dallas, Texas</span>
                </div>

              </div>

              {/* Right Column: Interactive Quick Proposal Box */}
              <div className="lg:col-span-6">
                <Card3D depth={6} className="w-full">
                  <div className="p-6 sm:p-8 rounded-2xl bg-navy-dark/95 backdrop-blur-md border border-gold-medium/35 shadow-2xl relative overflow-hidden text-left">
                    
                    {/* Card Header */}
                    <div className="flex items-center gap-3 mb-5 border-b border-gold-medium/15 pb-4">
                      <div className="w-10 h-10 rounded-xl bg-gold-medium/15 border border-gold-medium/40 flex items-center justify-center text-gold-bright flex-shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-base sm:text-lg font-semibold text-white">
                          Request a Management Consultation
                        </h3>
                        <p className="text-[10px] sm:text-xs text-gold-bright/90 font-light tracking-wide">
                          Confidential property evaluation & tailored roadmap
                        </p>
                      </div>
                    </div>

                    {ctaSubmitted ? (
                      <div className="py-10 text-center space-y-4">
                        <div className="w-14 h-14 rounded-full bg-gold-medium/20 border border-gold-bright text-gold-bright mx-auto flex items-center justify-center shadow-lg">
                          <Check className="w-7 h-7" />
                        </div>
                        <h4 className="font-serif text-lg text-white font-semibold">Thank You, {ctaForm.name || 'Partner'}</h4>
                        <p className="text-xs text-gray-300 font-light max-w-sm mx-auto leading-relaxed">
                          Your proposal request has been received. Our executive leadership team will review your property details and contact you shortly.
                        </p>
                        <div className="pt-2">
                          <Button
                            variant="gold-outline"
                            size="sm"
                            onClick={handleCtaReset}
                          >
                            Submit Another Request
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleCtaSubmit} className="space-y-3.5">
                        <div className="grid sm:grid-cols-2 gap-3">
                          <div>
                            <Label className="block text-[10px] uppercase tracking-wider text-gray-300 font-semibold mb-1">
                              Your Name *
                            </Label>
                            <Input
                              type="text"
                              required
                              placeholder="Full Name"
                              value={ctaForm.name}
                              onChange={(e) => setCtaForm({ ...ctaForm, name: e.target.value })}
                              className="bg-navy-medium/70 text-xs placeholder:text-gray-500 h-10"
                            />
                          </div>
                          <div>
                            <Label className="block text-[10px] uppercase tracking-wider text-gray-300 font-semibold mb-1">
                              Company / Hotel Group
                            </Label>
                            <Input
                              type="text"
                              placeholder="e.g. Acme Hospitality LLC"
                              value={ctaForm.company}
                              onChange={(e) => setCtaForm({ ...ctaForm, company: e.target.value })}
                              className="bg-navy-medium/70 text-xs placeholder:text-gray-500 h-10"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-3">
                          <div>
                            <Label className="block text-[10px] uppercase tracking-wider text-gray-300 font-semibold mb-1">
                              Email Address *
                            </Label>
                            <Input
                              type="email"
                              required
                              placeholder="contact@ownership.com"
                              value={ctaForm.email}
                              onChange={(e) => setCtaForm({ ...ctaForm, email: e.target.value })}
                              className="bg-navy-medium/70 text-xs placeholder:text-gray-500 h-10"
                            />
                          </div>
                          <div>
                            <Label className="block text-[10px] uppercase tracking-wider text-gray-300 font-semibold mb-1">
                              Phone Number
                            </Label>
                            <Input
                              type="tel"
                              placeholder="(214) 000-0000"
                              value={ctaForm.phone}
                              onChange={(e) => setCtaForm({ ...ctaForm, phone: e.target.value })}
                              className="bg-navy-medium/70 text-xs placeholder:text-gray-500 h-10"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-3">
                          <div>
                            <Label className="block text-[10px] uppercase tracking-wider text-gray-300 font-semibold mb-1">
                              Property Name / Location
                            </Label>
                            <Input
                              type="text"
                              placeholder="e.g. Austin Boutique Hotel"
                              value={ctaForm.property}
                              onChange={(e) => setCtaForm({ ...ctaForm, property: e.target.value })}
                              className="bg-navy-medium/70 text-xs placeholder:text-gray-500 h-10"
                            />
                          </div>
                          <div>
                            <Label className="block text-[10px] uppercase tracking-wider text-gray-300 font-semibold mb-1">
                              Primary Management Scope
                            </Label>
                            <select
                              value={ctaForm.service}
                              onChange={(e) => setCtaForm({ ...ctaForm, service: e.target.value })}
                              className="w-full h-10 px-3 py-1.5 rounded-lg bg-navy-medium/70 border border-gold-medium/25 text-white text-xs focus:outline-none focus:border-gold-bright focus:ring-1 focus:ring-gold-bright transition-colors"
                            >
                              <option value="Full Hotel Operations Management">Full Hotel Operations Management</option>
                              <option value="Turnaround & Asset Repositioning">Turnaround & Asset Repositioning</option>
                              <option value="Revenue Optimization & OTA Yield">Revenue Optimization & OTA Yield</option>
                              <option value="Development & Brand PIP Oversight">Development & Brand PIP Oversight</option>
                              <option value="Custom Advisory Consulting">Custom Advisory Consulting</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <Label className="block text-[10px] uppercase tracking-wider text-gray-300 font-semibold mb-1">
                            Additional Notes / Objectives (Optional)
                          </Label>
                          <Textarea
                            rows={2}
                            placeholder="Tell us about your property and goals..."
                            value={ctaForm.message}
                            onChange={(e) => setCtaForm({ ...ctaForm, message: e.target.value })}
                            className="bg-navy-medium/70 text-xs placeholder:text-gray-500 min-h-[65px] py-2"
                          />
                        </div>

                        <div className="pt-1">
                          <Button
                            type="submit"
                            variant="gold"
                            disabled={isCtaSubmitting}
                            className="w-full h-11 text-xs"
                          >
                            {isCtaSubmitting ? (
                              <span>Processing Consultation Request...</span>
                            ) : (
                              <>
                                <span>Request Private Consultation</span>
                                <ArrowRight className="w-4 h-4 ml-1" />
                              </>
                            )}
                          </Button>
                        </div>
                      </form>
                    )}

                  </div>
                </Card3D>
              </div>

            </div>

          </div>
        </RevealSection>
      </section>

    </div>
  );
};
