import React, { useState } from 'react';
import { Award, Briefcase, GraduationCap, Users, HeartHandshake, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

interface Position {
  title: string;
  location: string;
  type: string;
  department: string;
  desc: string;
  reqs: string[];
}

const OPEN_POSITIONS: Position[] = [
  {
    title: 'Hotel General Manager',
    location: 'Dallas, Texas',
    type: 'Full-time',
    department: 'Operations',
    desc: 'Seeking an experienced and operational-focused General Manager to oversee all aspects of guest services, staff leadership, brand compliance, and P&L performance.',
    reqs: [
      '5+ years experience as a Hotel GM under major brands (IHG, Choice, Wyndham or Marriott).',
      'Strong financial acumen, including budget development, P&L analysis, and cost control.',
      'Proven track record of improving guest satisfaction scores and ADR performance.'
    ]
  },
  {
    title: 'Sales & Catering Coordinator',
    location: 'Austin, Texas',
    type: 'Full-time',
    department: 'Sales & Marketing',
    desc: 'Lead efforts in group bookings, corporate travel accounts, local catering events, and community relationship building to drive RevPAR.',
    reqs: [
      '3+ years experience in hotel sales or group coordinator roles.',
      'Familiarity with hotel CRM and revenue management tools.',
      'Exceptional communication, presentation, and negotiation skills.'
    ]
  },
  {
    title: 'Assistant General Manager',
    location: 'Houston, Texas',
    type: 'Full-time',
    department: 'Operations',
    desc: 'Support the General Manager in overseeing day-to-day operations, front office scheduling, housekeeping audits, and training new hires.',
    reqs: [
      '3+ years experience in front desk management or guest service supervisor roles.',
      'Strong leadership abilities and crisis resolution skills.',
      'Knowledge of brand standards compliance and QA audits.'
    ]
  },
  {
    title: 'Night Auditor / Guest Service Agent',
    location: 'San Antonio, Texas',
    type: 'Part-time / Full-time',
    department: 'Guest Services',
    desc: 'Perform night audit operations, reconcile daily accounts, handle check-ins/check-outs, and ensure guest safety during night shifts.',
    reqs: [
      '1+ years experience in hotel front desk operations or basic accounting.',
      'Comfortable working overnight hours (11:00 PM - 7:00 AM).',
      'High level of reliability, detail orientation, and customer service skills.'
    ]
  }
];

export const Careers: React.FC = () => {
  const [showPositions, setShowPositions] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>('');
  
  // Application Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resumeName, setResumeName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    const formElement = document.getElementById('apply-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !selectedJob) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setResumeName('');
    setMessage('');
    setSelectedJob('');
    setIsSubmitted(false);
  };

  const benefits = [
    { title: 'Career Development', desc: 'Sustained career pathways, succession planning, and internal promotion policies.', icon: GraduationCap },
    { title: 'Leadership Opportunities', desc: 'Empowering team members to lead projects, manage departments, and mentor others.', icon: Briefcase },
    { title: 'Professional Training', desc: 'Comprehensive operational onboarding, brand training, and systems certification.', icon: Award },
    { title: 'Competitive Compensation', desc: 'Market-leading salaries, productivity incentives, and comprehensive benefits packages.', icon: HeartHandshake },
    { title: 'Collaborative Culture', desc: 'A flat organization structure with open communications and active team values.', icon: Users }
  ];

  return (
    <div className="w-full py-28 bg-navy-dark min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <Badge variant="gold">
            Careers at LCHM
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-wide">
            Build Your Hospitality Career
          </h2>
          <div className="w-16 h-[1px] bg-gold-medium mx-auto" />
          <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base font-light leading-relaxed">
            We believe our people are our greatest asset. Join a team dedicated to innovation, collaboration, professional growth, and delivering exceptional hospitality experiences.
          </p>
        </div>

        {/* Benefits Grid with Shadcn Card */}
        <div className="mb-20 text-left max-w-5xl mx-auto">
          <h3 className="font-serif text-xl sm:text-2xl text-white text-center mb-10 tracking-wide">
            Why Grow With Us?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((ben, idx) => {
              const Icon = ben.icon;
              return (
                <Card key={idx} className="p-6 hover:border-gold-medium/50 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-gold-medium/10 border border-gold-medium/30 flex items-center justify-center mb-4 text-gold-bright">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base font-medium text-white mb-2 tracking-wide">
                    {ben.title}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                    {ben.desc}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Action Banner to Toggle Careers */}
        <Card className="bg-gradient-to-r from-navy-medium to-navy-dark border-gold-medium/25 p-10 max-w-3xl mx-auto text-center shadow-xl mb-16">
          <h3 className="font-serif text-xl sm:text-2xl text-white tracking-wide mb-3">
            Ready to Take the Next Step?
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed mb-6 max-w-lg mx-auto">
            Discover management, administrative, and frontline service opportunities across our Texas and Midwest hospitality portfolio.
          </p>
          <Button
            variant="gold"
            size="lg"
            onClick={() => {
              setShowPositions(!showPositions);
              if (!showPositions) {
                setTimeout(() => {
                  const posSec = document.getElementById('positions-section');
                  if (posSec) posSec.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
          >
            {showPositions ? 'Hide Open Positions' : 'View Open Positions'}
          </Button>
        </Card>

        {/* Open Positions using Shadcn Accordion */}
        {showPositions && (
          <div id="positions-section" className="mb-20 text-left max-w-4xl mx-auto border-t border-gold-medium/15 pt-12 animate-fade-in">
            <h3 className="font-serif text-2xl text-white tracking-wide text-center mb-8">
              Current Openings
            </h3>
            
            <Accordion type="single" collapsible className="space-y-4">
              {OPEN_POSITIONS.map((job, idx) => (
                <AccordionItem
                  key={idx}
                  value={`job-${idx}`}
                  className="bg-navy-medium/80 border border-gold-medium/20 rounded-xl px-6 py-2"
                >
                  <AccordionTrigger className="hover:no-underline py-3">
                    <div className="text-left">
                      <h4 className="font-serif text-lg font-medium text-white tracking-wide">{job.title}</h4>
                      <div className="flex gap-3 text-[10px] text-gray-400 tracking-wider uppercase font-semibold mt-1">
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                        <span>•</span>
                        <span className="text-gold-bright">{job.department}</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed mb-4">{job.desc}</p>
                    
                    <span className="text-[10px] font-bold tracking-widest text-gold-medium uppercase block mb-2">Qualifications:</span>
                    <ul className="space-y-2 mb-6">
                      {job.reqs.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-400 font-light leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-medium mt-1.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant="gold-outline"
                      size="sm"
                      onClick={() => handleApplyClick(job.title)}
                    >
                      Apply for this Role
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}

        {/* Application Form Section */}
        {(selectedJob || isSubmitted) && (
          <Card id="apply-form-section" className="max-w-2xl mx-auto border-gold-medium/25 bg-navy-medium p-8 text-left shadow-2xl animate-fade-in">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-gold-medium/10 border border-gold-bright rounded-full flex items-center justify-center mx-auto mb-4 text-gold-bright">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-white tracking-wide">Application Submitted!</h3>
                <p className="text-gray-300 text-sm font-light max-w-md mx-auto leading-relaxed">
                  Thank you for applying for the <strong className="text-gold-bright">{selectedJob}</strong> position. Our regional HR manager, Christa Wijendran, will review your details and resume shortly.
                </p>
                <Button
                  variant="gold-outline"
                  size="sm"
                  onClick={resetForm}
                  className="mt-4"
                >
                  Done
                </Button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white tracking-wide">Submit Application</h3>
                  <p className="text-gray-400 text-xs mt-1">Applying for position: <strong className="text-gold-bright">{selectedJob}</strong></p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="block mb-1.5">Full Name *</Label>
                    <Input 
                      type="text" 
                      required 
                      value={name} 
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <Label className="block mb-1.5">Email Address *</Label>
                    <Input 
                      type="email" 
                      required 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="block mb-1.5">Phone Number</Label>
                    <Input 
                      type="tel" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  <div>
                    <Label className="block mb-1.5">Resume *</Label>
                    <div className="relative w-full h-11">
                      <input 
                        type="file" 
                        required
                        id="resume-file"
                        onChange={(e) => setResumeName(e.target.files?.[0]?.name || '')}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                      />
                      <div className="absolute inset-0 bg-navy-dark/70 border border-gold-medium/25 rounded-lg px-3.5 py-2 text-xs text-gray-400 flex items-center justify-between border-dashed hover:border-gold-bright transition-colors">
                        <span className="truncate">{resumeName || 'Upload Resume (PDF, DOCX)'}</span>
                        <Badge variant="gold" className="text-[9px]">Browse</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="block mb-1.5">Cover Letter / Note</Label>
                  <Textarea 
                    rows={4}
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us why you are a great fit for Las Colinas..."
                  />
                </div>

                <div className="flex gap-3 justify-end pt-2">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={resetForm}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="gold"
                    size="sm"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 mr-1" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </Card>
        )}

      </div>
    </div>
  );
};
