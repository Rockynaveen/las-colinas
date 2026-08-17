import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Check } from 'lucide-react';

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
        <div className="text-center mb-16">
          <span className="text-gold-medium uppercase tracking-[0.25em] text-xs font-semibold block mb-2">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-wide">
            Let's Build Success Together
          </h2>
          <div className="w-16 h-[1px] bg-gold-medium mx-auto mt-4" />
          <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base font-light mt-6 leading-relaxed">
            Whether you're an owner seeking management services, an investor exploring opportunities, or a hospitality professional interested in joining our team, we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Office Info & Map (Left Column) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <h3 className="font-serif text-2xl font-light text-white tracking-wide border-l-2 border-gold-medium pl-4 mb-6">
              Corporate Office
            </h3>

            {/* Address Card */}
            <div className="bg-navy-medium border border-gold-medium/10 p-5 rounded flex gap-4 hover:border-gold-medium/25 transition-all duration-300">
              <div className="w-10 h-10 rounded bg-gold-medium/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold-medium" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold text-white tracking-wide uppercase mb-1">Corporate Headquarters</h4>
                <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                  Las Colinas Hospitality Management LLC<br />
                  450 E. John Carpenter Freeway<br />
                  Irving, Texas 75062
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-navy-medium border border-gold-medium/10 p-5 rounded flex gap-4 hover:border-gold-medium/25 transition-all duration-300">
              <div className="w-10 h-10 rounded bg-gold-medium/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-gold-medium" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold text-white tracking-wide uppercase mb-1">Phone Lines</h4>
                <div className="space-y-1 mt-1">
                  <a href="tel:214-729-9676" className="text-gray-300 text-xs sm:text-sm font-light hover:text-gold-medium block transition-colors">
                    214-729-9676
                  </a>
                  <a href="tel:214-709-4231" className="text-gray-300 text-xs sm:text-sm font-light hover:text-gold-medium block transition-colors">
                    214-709-4231
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-navy-medium border border-gold-medium/10 p-5 rounded flex gap-4 hover:border-gold-medium/25 transition-all duration-300">
              <div className="w-10 h-10 rounded bg-gold-medium/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-gold-medium" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold text-white tracking-wide uppercase mb-1">Email Inquiries</h4>
                <a href="mailto:info@lascolinasmanagement.com" className="text-gray-300 text-xs sm:text-sm font-light hover:text-gold-medium block mt-1 transition-colors">
                  info@lascolinasmanagement.com
                </a>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-64 rounded-lg overflow-hidden border border-gold-medium/20 shadow-md">
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

          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-7 bg-navy-medium border border-gold-medium/15 p-8 sm:p-10 rounded-lg shadow-xl text-left">
            {isSubmitted ? (
              <div className="text-center py-16 space-y-6">
                <div className="w-16 h-16 bg-gold-medium/10 border border-gold-medium rounded-full flex items-center justify-center mx-auto mb-4 text-gold-medium animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-white tracking-wide">Consultation Requested!</h3>
                <p className="text-gray-300 text-sm font-light max-w-md mx-auto leading-relaxed">
                  Thank you, **{name}**. Your inquiry has been received. Our executive partners Nitin and Nandini Tiwari will contact you shortly to coordinate your private advisory review.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-gold-medium hover:bg-gold-bright text-navy-dark font-bold tracking-widest text-xs uppercase rounded transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white tracking-wide">Request a Consultation</h3>
                  <p className="text-gray-400 text-xs mt-1">Please fill in the details below and an executive will contact you shortly.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1.5">Contact Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-navy-dark border border-gold-medium/20 focus:border-gold-medium rounded px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1.5">Company Name</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-navy-dark border border-gold-medium/20 focus:border-gold-medium rounded px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-navy-dark border border-gold-medium/20 focus:border-gold-medium rounded px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-navy-dark border border-gold-medium/20 focus:border-gold-medium rounded px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                      placeholder="(214) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1.5">Property Location</label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-navy-dark border border-gold-medium/20 focus:border-gold-medium rounded px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                      placeholder="City, State"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1.5">Number of Rooms</label>
                    <input
                      type="number"
                      value={rooms}
                      onChange={(e) => setRooms(e.target.value)}
                      className="w-full bg-navy-dark border border-gold-medium/20 focus:border-gold-medium rounded px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                      placeholder="e.g. 120"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1.5">Message / Inquiry Details</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-navy-dark border border-gold-medium/20 focus:border-gold-medium rounded px-4 py-2.5 text-sm text-white focus:outline-none transition-colors resize-none"
                    placeholder="How can we help optimize your property?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-gold-medium hover:bg-gold-bright disabled:bg-gold-medium/40 text-navy-dark font-bold tracking-widest text-xs uppercase rounded transition-all duration-300 shadow-md hover:shadow-gold-medium/10"
                >
                  {isSubmitting ? (
                    <span>Processing Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Request a Consultation</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
