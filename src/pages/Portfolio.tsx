import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface Property {
  name: string;
  category: 'branded' | 'select' | 'extended' | 'boutique' | 'independent';
  categoryLabel: string;
  image: string;
  location: string;
  highlights: string[];
  performance: {
    adr: string;
    revpar: string;
    occupancy: string;
  };
}

const PROPERTIES: Property[] = [
  {
    name: 'Grand Colinas Heights Resort',
    category: 'branded',
    categoryLabel: 'Premium Branded Hotel',
    image: '/images/1.png',
    location: 'Austin, Texas',
    highlights: ['Brand PIP completed under budget', 'Operational turnaround under LCHM', 'RevPAR index outperforming comp set by 18%'],
    performance: { adr: '+14% ADR Growth', revpar: '+22% RevPAR Change', occupancy: '84.5% Peak Occ' }
  },
  {
    name: 'Vanguard Suites & Plaza',
    category: 'select',
    categoryLabel: 'Select-Service Hotel',
    image: '/images/2.png',
    location: 'Dallas, Texas',
    highlights: ['Strategic local corporate account acquisition', 'Efficient labor model implementation', 'GSS scores in top 5% of franchise'],
    performance: { adr: '+9% ADR Growth', revpar: '+15% RevPAR Change', occupancy: '78.2% Avg Occ' }
  },
  {
    name: 'Colinas Executive Extended Stay',
    category: 'extended',
    categoryLabel: 'Extended-Stay Hotel',
    image: '/images/3.png',
    location: 'Houston, Texas',
    highlights: ['Focus on multi-month project lodging', 'Robust GOP margins exceeding 48%', 'High guest retention rates'],
    performance: { adr: '+11% ADR Growth', revpar: '+19% RevPAR Change', occupancy: '86.1% Avg Occ' }
  },
  {
    name: 'The Artisan Colinas Lodge',
    category: 'boutique',
    categoryLabel: 'Boutique Property',
    image: '/images/4.png',
    location: 'San Antonio, Texas',
    highlights: ['Custom dining & experience concepts', 'OTA distribution restructure', 'Direct reservation share increased by 30%'],
    performance: { adr: '+19% ADR Growth', revpar: '+27% RevPAR Change', occupancy: '81.0% Peak Occ' }
  },
  {
    name: 'Colinas Crest Coastal Club',
    category: 'independent',
    categoryLabel: 'Independent Hospitality Asset',
    image: '/images/5.png',
    location: 'Galveston, Texas',
    highlights: ['Unique local marketing integration', 'Complete tech stack & PMS update', 'Staff turnover reduced by 40%'],
    performance: { adr: '+15% ADR Growth', revpar: '+18% RevPAR Change', occupancy: '82.4% Avg Occ' }
  },
  {
    name: 'Metropolitan Business Hotel',
    category: 'select',
    categoryLabel: 'Corporate Select',
    image: '/images/6.png',
    location: 'Fort Worth, Texas',
    highlights: ['Corporate negotiated rate expansion', 'Dynamic RevPAR management', 'High customer satisfaction rating'],
    performance: { adr: '+12% ADR Growth', revpar: '+17% RevPAR Change', occupancy: '80.5% Avg Occ' }
  },
  {
    name: 'Midwest Plaza & Suites',
    category: 'select',
    categoryLabel: 'Select-Service Hotel',
    image: '/images/7.png',
    location: 'Oklahoma City, OK',
    highlights: ['Brand standard QA compliance 98%+', 'Local corporate account partnership', 'Optimized labor cost framework'],
    performance: { adr: '+10% ADR Growth', revpar: '+14% RevPAR Change', occupancy: '77.8% Avg Occ' }
  },
  {
    name: 'Gateway Grand Hotel',
    category: 'branded',
    categoryLabel: 'Full-Service Branded',
    image: '/images/8.png',
    location: 'El Paso, Texas',
    highlights: ['Multi-channel OTA yield optimization', 'Banquet & event revenue surge', 'Guest loyalty score +24%'],
    performance: { adr: '+16% ADR Growth', revpar: '+21% RevPAR Change', occupancy: '83.2% Peak Occ' }
  },
  {
    name: 'Colinas Oasis Resort & Spa',
    category: 'independent',
    categoryLabel: 'Luxury Resort',
    image: '/images/9.png',
    location: 'Corpus Christi, Texas',
    highlights: ['Direct-booking web platform conversion +35%', 'Spa & wellness revenue model', 'Seasonal rate flexing'],
    performance: { adr: '+22% ADR Growth', revpar: '+28% RevPAR Change', occupancy: '85.6% Peak Occ' }
  },
  {
    name: 'Plaza Center Inn & Suites',
    category: 'select',
    categoryLabel: 'Select-Service Hotel',
    image: '/images/10.png',
    location: 'Arlington, Texas',
    highlights: ['Stadium & entertainment event yield', 'Automated check-in kiosks integration', 'High weekend compression capture'],
    performance: { adr: '+13% ADR Growth', revpar: '+19% RevPAR Change', occupancy: '82.0% Avg Occ' }
  },
  {
    name: 'Lakeside Executive Hotel',
    category: 'extended',
    categoryLabel: 'Extended-Stay Hotel',
    image: '/images/11.png',
    location: 'Plano, Texas',
    highlights: ['Long-term corporate contracts', 'Efficient housekeeping scheduling', 'Low turnover & high guest loyalty'],
    performance: { adr: '+8% ADR Growth', revpar: '+16% RevPAR Change', occupancy: '88.4% Peak Occ' }
  },
  {
    name: 'Summit Hill Hotel',
    category: 'boutique',
    categoryLabel: 'Boutique Property',
    image: '/images/12.png',
    location: 'Denver, Colorado',
    highlights: ['Mountain tourist market capture', 'Food & beverage repositioning', 'Awarded Best Boutique Experience'],
    performance: { adr: '+18% ADR Growth', revpar: '+25% RevPAR Change', occupancy: '83.0% Peak Occ' }
  },
  {
    name: 'Colinas Heritage Boutique Inn',
    category: 'boutique',
    categoryLabel: 'Historic Boutique',
    image: '/images/13.png',
    location: 'Fredericksburg, Texas',
    highlights: ['Wine country weekend surge pricing', 'Curated guest experience packages', 'High direct booking ratio'],
    performance: { adr: '+24% ADR Growth', revpar: '+30% RevPAR Change', occupancy: '87.5% Peak Occ' }
  },
  {
    name: 'Skyline Business Suites',
    category: 'select',
    categoryLabel: 'Corporate Select',
    image: '/images/14.png',
    location: 'Irving, Texas',
    highlights: ['Las Colinas corporate corridor presence', 'Meeting room yield management', 'Franchise top tier award'],
    performance: { adr: '+11% ADR Growth', revpar: '+16% RevPAR Change', occupancy: '79.6% Avg Occ' }
  },
  {
    name: 'The Grand View Hotel',
    category: 'branded',
    categoryLabel: 'Full-Service Branded',
    image: '/images/15.png',
    location: 'Waco, Texas',
    highlights: ['University & event weekend compression', 'Comprehensive hotel renovation', 'GOP margin +12%'],
    performance: { adr: '+15% ADR Growth', revpar: '+20% RevPAR Change', occupancy: '81.9% Avg Occ' }
  },
  {
    name: 'Lone Star Hospitality Suites',
    category: 'select',
    categoryLabel: 'Select-Service Hotel',
    image: '/images/16.png',
    location: 'Lubbock, Texas',
    highlights: ['West Texas market leadership', 'Energy sector lodging partnerships', 'Disciplined cost controls'],
    performance: { adr: '+9% ADR Growth', revpar: '+14% RevPAR Change', occupancy: '76.5% Avg Occ' }
  }
];

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | Property['category']>('all');

  const filteredProperties = filter === 'all'
    ? PROPERTIES
    : PROPERTIES.filter(p => p.category === filter);

  const filterTabs = [
    { id: 'all', label: 'All Assets' },
    { id: 'branded', label: 'Premium Branded' },
    { id: 'select', label: 'Select-Service' },
    { id: 'extended', label: 'Extended-Stay' },
    { id: 'boutique', label: 'Boutique Properties' },
    { id: 'independent', label: 'Independent Assets' }
  ] as const;

  return (
    <div className="w-full py-28 bg-navy-dark min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-medium uppercase tracking-[0.25em] text-xs font-semibold block mb-2">
            Our Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-wide">
            Building Exceptional Hospitality Assets
          </h2>
          <div className="w-16 h-[1px] bg-gold-medium mx-auto mt-4" />
          <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base font-light mt-6 leading-relaxed">
            Our portfolio includes branded and independent hotels across multiple markets. Every property reflects our commitment to operational excellence, financial performance, and outstanding guest experiences.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-gold-medium/10 pb-4 max-w-4xl mx-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 rounded ${
                filter === tab.id
                  ? 'text-navy-dark bg-gold-medium font-bold'
                  : 'text-gray-400 hover:text-white hover:bg-navy-medium/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
          {filteredProperties.map((prop, idx) => (
            <div
              key={idx}
              className="bg-navy-medium border border-gold-medium/10 hover:border-gold-medium/30 rounded-lg overflow-hidden group shadow-lg transition-all duration-500 animate-fade-in flex flex-col justify-between"
            >
              <div>
                {/* Photo container */}
                <div className="relative h-64 w-full overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${prop.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-medium via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-navy-dark/95 border border-gold-medium/25 px-3 py-1 rounded text-[10px] font-bold tracking-widest text-gold-medium uppercase">
                    {prop.categoryLabel}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs text-gold-medium/80 tracking-wider block font-medium uppercase">{prop.location}</span>
                    <h3 className="font-serif text-xl font-light text-white tracking-wide">{prop.name}</h3>
                  </div>
                </div>

                {/* Info Block */}
                <div className="p-6 space-y-4">
                  <span className="text-[10px] font-bold tracking-widest text-gold-medium uppercase block border-b border-gold-medium/10 pb-1.5">
                    Strategic Accomplishments:
                  </span>
                  <ul className="space-y-2">
                    {prop.highlights.map((high, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300 font-light leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-medium mt-0.5 flex-shrink-0" />
                        <span>{high}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Performance Metrics Block */}
              <div className="px-6 pb-6 pt-4 border-t border-gold-medium/5 bg-navy-dark/45 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 border-r border-gold-medium/10 last:border-0">
                  <span className="text-[10px] sm:text-xs font-semibold text-gold-medium block">{prop.performance.adr}</span>
                  <span className="text-[8px] font-sans text-gray-400 tracking-wider uppercase block">ADR Growth</span>
                </div>
                <div className="p-2 border-r border-gold-medium/10 last:border-0">
                  <span className="text-[10px] sm:text-xs font-semibold text-gold-medium block">{prop.performance.revpar}</span>
                  <span className="text-[8px] font-sans text-gray-400 tracking-wider uppercase block">RevPAR Gain</span>
                </div>
                <div className="p-2 border-r border-gold-medium/10 last:border-0">
                  <span className="text-[10px] sm:text-xs font-semibold text-gold-medium block">{prop.performance.occupancy}</span>
                  <span className="text-[8px] font-sans text-gray-400 tracking-wider uppercase block">Performance</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center text-gray-400 text-xs italic max-w-lg mx-auto">
          Properties represent typical assets and results in portfolios under executive oversight. Performance metrics show average year-over-year gains.
        </div>

      </div>
    </div>
  );
};
