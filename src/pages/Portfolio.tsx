import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

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
    name: 'West Texas Energy Inn & Suites',
    category: 'select',
    categoryLabel: 'Midscale Property',
    image: '/images/10.png',
    location: 'Midland, Texas',
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
        <div className="text-center mb-16 space-y-3 font-sans">
          <Badge variant="gold">
            Our Portfolio
          </Badge>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Building Exceptional Hospitality Assets
          </h2>
          <div className="w-16 h-[1px] bg-gold-medium mx-auto" />
          <p className="max-w-2xl mx-auto text-gray-200 text-sm sm:text-base font-normal leading-relaxed font-sans">
            Our portfolio includes branded and independent hotels across multiple markets. Every property reflects our commitment to operational excellence, financial performance, and outstanding guest experiences.
          </p>
        </div>

        {/* Filter Controls with Shadcn Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-gold-medium/15 pb-4 max-w-4xl mx-auto font-sans">
          {filterTabs.map((tab) => (
            <Button
              key={tab.id}
              variant={filter === tab.id ? 'gold' : 'ghost'}
              size="sm"
              onClick={() => setFilter(tab.id)}
              className="text-xs font-sans font-semibold"
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Property Grid with Shadcn Card */}
        <div className="grid md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto font-sans">
          {filteredProperties.map((prop, idx) => (
            <Card
              key={idx}
              className="overflow-hidden group shadow-xl transition-all duration-500 animate-fade-in flex flex-col justify-between font-sans bg-[#0b1426] border-gold-medium/30"
            >
              <div>
                {/* Photo container */}
                <div className="relative h-64 w-full overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${prop.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-medium via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="gold-subtle">
                      {prop.categoryLabel}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs text-gold-medium tracking-wider block font-semibold uppercase font-sans">{prop.location}</span>
                    <h3 className="font-sans text-xl font-bold text-white tracking-tight">{prop.name}</h3>
                  </div>
                </div>

                {/* Info Block */}
                <div className="p-6 space-y-4">
                  <span className="text-xs font-bold tracking-widest text-gold-bright uppercase block border-b border-gold-medium/15 pb-1.5 font-sans">
                    Strategic Accomplishments:
                  </span>
                  <ul className="space-y-2">
                    {prop.highlights.map((high, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200 font-normal leading-relaxed font-sans">
                        <CheckCircle2 className="w-4 h-4 text-gold-bright mt-0.5 flex-shrink-0" />
                        <span>{high}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Performance Metrics Block */}
              <div className="px-6 pb-6 pt-4 border-t border-gold-medium/10 bg-navy-dark/60 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 border-r border-gold-medium/10 last:border-0">
                  <span className="text-[10px] sm:text-xs font-semibold text-gold-bright block">{prop.performance.adr}</span>
                  <span className="text-[8px] font-sans text-gray-400 tracking-wider uppercase block">ADR Growth</span>
                </div>
                <div className="p-2 border-r border-gold-medium/10 last:border-0">
                  <span className="text-[10px] sm:text-xs font-semibold text-gold-bright block">{prop.performance.revpar}</span>
                  <span className="text-[8px] font-sans text-gray-400 tracking-wider uppercase block">RevPAR Gain</span>
                </div>
                <div className="p-2 border-r border-gold-medium/10 last:border-0">
                  <span className="text-[10px] sm:text-xs font-semibold text-gold-bright block">{prop.performance.occupancy}</span>
                  <span className="text-[8px] font-sans text-gray-400 tracking-wider uppercase block">Performance</span>
                </div>
              </div>
            </Card>
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
