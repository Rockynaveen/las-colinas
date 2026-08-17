import React, { useState } from 'react';
import { ChevronDown, ChevronUp, GraduationCap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface TeamMember {
  name: string;
  title: string;
  education?: string;
  brief: string;
  bio: string;
  initials: string;
  specialty?: string;
  image?: string;
}

const TEAM: TeamMember[] = [
  {
    name: 'Nandini Tiwari',
    title: 'President',
    education: 'University of Sydney, Australia (MIS)',
    brief: 'Over 20 years of visionary leadership and extensive expertise in hotel operations, development, and organizational growth.',
    bio: 'Nandini has over 20 years of hospitality industry experience; brings visionary leadership and extensive expertise in hotel operations, development, and organizational growth. Her unwavering commitment to operational excellence, strategic innovation, and delivering exceptional results has been instrumental in establishing Las Colinas Hospitality Management as a trusted partner for hotel owners, investors, and leading hospitality brands. She graduated from the University of Sydney, Australia, majoring in MIS, and has successfully led hotel development projects, optimized operational performance, and delivered exceptional guest experiences while consistently exceeding financial and service objectives.',
    initials: 'NT',
    specialty: 'Operations & Development',
    image: '/images/nandini-tiwari.jpg'
  },
  {
    name: 'Nitin Tiwari',
    title: 'Chief Executive Officer',
    education: 'MBA, Central Queensland University, Australia',
    brief: 'Over 25 years of leadership experience across hotel development, operations, sales, and revenue optimization.',
    bio: 'Nitin provides strategic direction across hotel development, operations, asset management, and business growth. His expertise in driving operational excellence, optimizing asset performance, and cultivating strong industry partnerships has been instrumental in advancing the company\'s growth and delivering long-term value for owners and investors. With an MBA from Central Queensland University, Nitin is recognized for building high-performing teams, fostering a culture of accountability and innovation, and mentoring future hospitality professionals.',
    initials: 'NT',
    specialty: 'Strategy & Growth',
    image: '/images/nitin tiwari.jpg'
  },
  {
    name: 'Manasa Sharma',
    title: 'Chief Financial Officer',
    brief: 'Leads financial strategy, accounting, budgeting, forecasting, cash flow, and IT accounting systems.',
    bio: 'As Chief Financial Officer, Manasa leads the financial strategy for Las Colinas Hospitality Management\'s portfolio, overseeing accounting, budgeting, forecasting, cash flow management, and financial reporting. With a strong focus on fiscal responsibility, operational efficiency, and strategic planning, she ensures sound financial performance while supporting long-term growth and value creation for owners and stakeholders. She is responsible for the company\'s accounting infrastructure utilizing advanced information technologies.',
    initials: 'MS',
    specialty: 'Financial Strategy',
    image: '/images/manasha sharma.jpg'
  },
  {
    name: 'Jignesh Patel',
    title: 'Accounting Manager',
    brief: 'Oversees financial controls, compliance, top-level accounting planning, and risk management.',
    bio: 'Jignesh, our esteemed Accounting Manager at Las Colinas Hospitality Management LLC, plays a critical role in overseeing all financial aspects of our company. With a comprehensive understanding of accounting principles and practices, he contributes to top-level planning and risk management, ensuring the smooth operations, financial transparency, and compliance of our business.',
    initials: 'JP',
    specialty: 'Financial Operations',
    image: '/images/jignesh patel.jpg'
  },
  {
    name: 'Tanmay Patel (CHO)',
    title: 'Acquisition Manager',
    brief: 'Leads strategic acquisition initiatives and portfolios across Texas and the Midwest.',
    bio: 'Tanmay serves as Acquisition Manager, leading strategic acquisition initiatives and supporting the growth of Las Colinas Hospitality Management\'s portfolio across Texas and the Midwest. Based in Dallas, he works closely with ownership groups and operational teams to identify investment opportunities, evaluate hospitality assets, and drive successful acquisitions that align with the company\'s long-term growth strategy.',
    initials: 'TP',
    specialty: 'Acquisitions & Investments'
  },
  {
    name: 'Jimmy Munoz',
    title: 'Regional Operations Manager',
    brief: 'Elevates hotel operations, quality compliance, and team engagement across top national brands.',
    bio: 'Jimmy Munoz is an accomplished hospitality operations leader with a proven track record of driving hotel performance, enhancing guest satisfaction, and building high-performing teams across multiple nationally recognized hotel brands. His hands-on leadership, operational expertise, and commitment to service excellence consistently deliver measurable results while fostering a culture of accountability, collaboration, and continuous improvement.',
    initials: 'JM',
    specialty: 'Regional Operations',
    image: '/images/jimmy munoz.jpg'
  },
  {
    name: 'Christa Wijendran',
    title: 'Regional Accounting & HR Manager',
    education: 'Heriot-Watt University (BA Business) & Purdue University (Postgrad Business Analysis)',
    brief: 'Over 16 years of hospitality experience progressing from front-line operations to HR and accounting leadership.',
    bio: 'Christa Wijendran is an accomplished hospitality professional with more than 16 years of industry experience, progressing from front-line operations to senior leadership through a proven commitment to operational excellence and organizational performance. She holds a bachelor\'s degree in business administration from Heriot-Watt University and a postgraduate qualification in Business Analysis from Purdue University. Christa combines her operational expertise with strategic insight to support financial performance, human resources, and organizational success across the company\'s portfolio.',
    initials: 'CW',
    specialty: 'HR & Accounting Control',
    image: '/images/christa wjendran.jpg'
  },
  {
    name: 'Shawn Patel',
    title: 'Regional Operations Manager of Hotel Operations',
    brief: 'Over 10 years of multi-property portfolio leadership across IHG, Choice Hotels, and Wyndham.',
    bio: 'Shawn has 10+ years of experience leading multi-property portfolios across top brands including IHG, Choice Hotels, and Wyndham. He is an expert in driving revenue growth, operational efficiency, and guest satisfaction while ensuring brand compliance and financial performance.',
    initials: 'SP',
    specialty: 'Brand Operations'
  },
  {
    name: 'Laura Lewis',
    title: 'Regional Sales & Marketing',
    brief: 'Over 20 years of hospitality sales, marketing, and revenue management across West Texas and the Permian Basin.',
    bio: 'Laura is a results-driven Area Sales Director with over 20 years of progressive experience in hospitality sales, marketing, and revenue management across major hotel brands including IHG, Choice Hotels, and Wyndham. She has proven success in leading multi-property sales operations throughout West Texas and the Permian Basin region, driving consistent revenue growth through strategic planning, team leadership, and market development.',
    initials: 'LL',
    specialty: 'Sales & Market Development',
    image: '/images/laure lewis.jpg'
  },
  {
    name: 'Diana Ortiz',
    title: 'Director of Sales',
    brief: 'Experienced sales leader focused on guest relations, customer service, and market penetration.',
    bio: 'Diana Ortiz is an experienced Marketing and Management Sales Leader in the Hospitality Industry. Driven by an entrepreneurial strength, she takes pride in providing the best customer service and sales possible to maximize client retention and local market share.',
    initials: 'DO',
    specialty: 'Local Corporate Sales',
    image: '/images/daina ortiz.jpg'
  }
];

export const Team: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedId(expandedId === idx ? null : idx);
  };

  return (
    <div className="w-full py-28 bg-navy-dark min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <Badge variant="gold">
            Leadership & Experts
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-wide">
            Our Professional Team
          </h2>
          <div className="w-16 h-[1px] bg-gold-medium mx-auto" />
          <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base font-light leading-relaxed">
            Meet the experienced leadership team driving operations, asset optimization, financial management, and portfolio expansion for Las Colinas Hospitality.
          </p>
        </div>

        {/* Team Grid with Shadcn Card */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
          {TEAM.map((member, idx) => {
            const isExpanded = expandedId === idx;
            return (
              <Card 
                key={idx}
                className={`transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl ${
                  isExpanded ? 'border-gold-medium ring-1 ring-gold-medium/30 shadow-2xl' : 'hover:border-gold-medium/40'
                }`}
              >
                <div className="p-6">
                  {/* Avatar Crest Badge with Photo */}
                  <div className="flex items-center gap-4 mb-5">
                    {member.image ? (
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold-medium/40 flex-shrink-0 shadow-md">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-medium/20 to-gold-dark/10 border border-gold-medium/30 flex items-center justify-center text-gold-bright font-serif text-lg font-bold select-none flex-shrink-0">
                        {member.initials}
                      </div>
                    )}
                    <div>
                      <h3 className="font-serif text-lg font-medium text-white tracking-wide leading-snug">
                        {member.name}
                      </h3>
                      <span className="text-[10px] sm:text-xs font-bold tracking-widest text-gold-bright uppercase block mt-0.5">
                        {member.title}
                      </span>
                    </div>
                  </div>

                  {/* Specialty / Info bullets */}
                  <div className="space-y-2 mb-4">
                    {member.specialty && (
                      <div className="flex items-center gap-2 text-[10px] text-gray-400 tracking-wider uppercase font-semibold">
                        <Award className="w-3.5 h-3.5 text-gold-bright flex-shrink-0" />
                        <span>{member.specialty}</span>
                      </div>
                    )}
                    {member.education && (
                      <div className="flex items-start gap-2 text-xs text-gray-400 font-light leading-relaxed">
                        <GraduationCap className="w-4 h-4 text-gold-medium/70 mt-0.5 flex-shrink-0" />
                        <span>{member.education}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed mb-4">
                    {member.brief}
                  </p>

                  {/* Expandable bio block */}
                  <div 
                    className={`transition-all duration-300 overflow-hidden text-xs text-gray-300 font-light leading-relaxed space-y-2 ${
                      isExpanded ? 'max-h-[300px] opacity-100 mt-4 border-t border-gold-medium/15 pt-4' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <p>{member.bio}</p>
                  </div>
                </div>

                {/* Read Bio Trigger with Shadcn Button */}
                <div className="px-6 pb-6 pt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpand(idx)}
                    className="w-full flex items-center justify-between text-gold-bright hover:bg-gold-medium/10 text-xs font-semibold uppercase tracking-wider"
                  >
                    <span>{isExpanded ? 'Hide Biography' : 'View Full Biography'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </div>
  );
};
