import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export const Contact: React.FC = () => {
  // Contact Form States
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [rooms, setRooms] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setLocation('');
    setRooms('');
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <div className="w-full py-28 bg-navy-dark min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <Badge variant="gold">
            Get In Touch
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-wide">
            Let's Build Success Together
          </h2>
          <div className="w-16 h-[1px] bg-gold-medium mx-auto" />
          <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base font-light leading-relaxed">
            Whether you're an owner seeking management services, an investor exploring opportunities, or a hospitality professional interested in joining our team, we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Office Info & Map (Left Column) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="font-serif text-2xl font-light text-white tracking-wide border-l-2 border-gold-medium pl-4 mb-4">
              Corporate Office
            </h3>

            {/* Address Card */}
            <Card className="p-5 flex gap-4 hover:border-gold-medium/50 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-gold-medium/10 border border-gold-medium/30 flex items-center justify-center flex-shrink-0 text-gold-bright">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold text-white tracking-wide uppercase mb-1">Corporate Headquarters</h4>
                <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                  Las Colinas Hospitality Management LLC<br />
                  450 E. John Carpenter Freeway<br />
                  Irving, Texas 75062
                </p>
              </div>
            </Card>

            {/* Phone Card */}
            <Card className="p-5 flex gap-4 hover:border-gold-medium/50 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-gold-medium/10 border border-gold-medium/30 flex items-center justify-center flex-shrink-0 text-gold-bright">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold text-white tracking-wide uppercase mb-1">Phone Lines</h4>
                <div className="space-y-1 mt-1">
                  <a href="tel:214-729-9676" className="text-gray-300 text-xs sm:text-sm font-light hover:text-gold-bright block transition-colors">
                    214-729-9676
                  </a>
                  <a href="tel:214-709-4231" className="text-gray-300 text-xs sm:text-sm font-light hover:text-gold-bright block transition-colors">
                    214-709-4231
                  </a>
                </div>
              </div>
            </Card>

            {/* Email Card */}
            <Card className="p-5 flex gap-4 hover:border-gold-medium/50 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-gold-medium/10 border border-gold-medium/30 flex items-center justify-center flex-shrink-0 text-gold-bright">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold text-white tracking-wide uppercase mb-1">Email Inquiries</h4>
                <a href="mailto:info@lascolinasmanagement.com" className="text-gray-300 text-xs sm:text-sm font-light hover:text-gold-bright block mt-1 transition-colors">
                  info@lascolinasmanagement.com
                </a>
              </div>
            </Card>

            {/* Google Map Embed */}
            <div className="w-full h-64 rounded-xl overflow-hidden border border-gold-medium/25 shadow-xl">
              <iframe
                title="Las Colinas Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.2974246067746!2d-96.93883838481498!3d32.89033398093867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e81561f7481ab%3A0x6a053c89c8a9ba0c!2s450%20E%20John%20Carpenter%20Freeway%2C%20Irving%2C%20TX%2075062!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form (Right Column) with Shadcn Card */}
          <Card className="lg:col-span-7 p-6 sm:p-10 border-gold-medium/25 shadow-2xl text-left">
            {isSubmitted ? (
              <div className="text-center py-16 space-y-6">
                <div className="w-16 h-16 bg-gold-medium/10 border border-gold-bright rounded-full flex items-center justify-center mx-auto mb-4 text-gold-bright">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-white tracking-wide">Consultation Requested!</h3>
                <p className="text-gray-300 text-sm font-light max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-gold-bright">{name}</strong>. Your inquiry has been received. Our executive partners Nitin and Nandini Tiwari will contact you shortly to coordinate your private advisory review.
                </p>
                <div className="pt-4">
                  <Button
                    variant="gold"
                    onClick={handleReset}
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white tracking-wide">Request a Consultation</h3>
                  <p className="text-gray-400 text-xs mt-1">Please fill in the details below and an executive will contact you shortly.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="block mb-1.5">Contact Name *</Label>
                    <Input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <Label className="block mb-1.5">Company Name</Label>
                    <Input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
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
                  <div>
                    <Label className="block mb-1.5">Phone Number</Label>
                    <Input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(214) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="block mb-1.5">Property Location</Label>
                    <Input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="City, State"
                    />
                  </div>
                  <div>
                    <Label className="block mb-1.5">Number of Rooms</Label>
                    <Input
                      type="number"
                      value={rooms}
                      onChange={(e) => setRooms(e.target.value)}
                      placeholder="e.g. 120"
                    />
                  </div>
                </div>

                <div>
                  <Label className="block mb-1.5">Message / Inquiry Details</Label>
                  <Textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help optimize your property?"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  disabled={isSubmitting}
                  className="w-full h-12 text-xs"
                >
                  {isSubmitting ? (
                    <span>Processing Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 mr-1" />
                      <span>Request a Consultation</span>
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </div>

      </div>
    </div>
  );
};
