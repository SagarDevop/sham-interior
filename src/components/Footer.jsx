import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="w-full bg-[#ECE5D8] border-t border-[#DFD7C7] pt-14 pb-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D8CEBC]">
          {/* Brand & Intro */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center space-x-2.5 mb-4 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[10px] bg-[#7A695C] text-white flex items-center justify-center shadow-xs group-hover:bg-[#68584C] transition-colors shrink-0">
                <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[18px] sm:text-[20px] font-bold text-[#171717] font-['Poppins'] tracking-tight">
                  SHAM
                </span>
                <span className="text-[9.5px] font-semibold tracking-wider uppercase text-[#7A695C] font-['Poppins'] mt-0.5">
                  Interior Decorator
                </span>
              </div>
            </Link>
            <p className="text-[#645F59] font-['Poppins'] text-[13px] leading-relaxed max-w-sm mb-6">
              Sham Interior Decorator provides customized interior solutions, modular kitchens, PVC wall panels, louver panels, PVC marble sheets, wallpapers, and POP/gypsum false ceiling solutions in Nagrota Bagwan, Kangra.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[14px] font-semibold text-[#171717] font-['Poppins'] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-[13px] font-['Poppins'] text-[#645F59]">
              <li><Link to="/" className="hover:text-[#171717] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#171717] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#171717] transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#171717] transition-colors">Portfolio</Link></li>
              <li><Link to="/specialist" className="hover:text-[#171717] transition-colors">Specialist</Link></li>
              <li><Link to="/contact" className="hover:text-[#171717] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-[14px] font-semibold text-[#171717] font-['Poppins'] mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-[13px] font-['Poppins'] text-[#645F59]">
              <div className="flex items-start space-x-2.5">
                <MapPin size={16} className="text-[#7A695C] shrink-0 mt-0.5" />
                <span>Shop No. 8, Near Fauji Dhaba, Tharu, Nagrota Bagwan, Kangra, HP – 176047</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone size={16} className="text-[#7A695C] shrink-0" />
                <span>+91 98159 74416</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail size={16} className="text-[#7A695C] shrink-0" />
                <span>Monday – Sunday: 9:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Newsletter / Updates */}
          <div className="lg:col-span-3">
            <h4 className="text-[14px] font-semibold text-[#171717] font-['Poppins'] mb-2">
              Interior Consultations
            </h4>
            <p className="text-[12.5px] text-[#645F59] font-['Poppins'] mb-4">
              Subscribe to get design advice and updates for your residential or commercial space.
            </p>
            {subscribed ? (
              <p className="text-[12px] font-medium text-[#7A695C] bg-white/70 py-2 px-3 rounded-[10px]">
                Thank you for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center bg-white rounded-full p-1 border border-[#DDD6CB] shadow-xs">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-transparent px-3 text-[12.5px] font-['Poppins'] text-[#171717] placeholder:text-[#A09A92] focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="w-8 h-8 rounded-full bg-[#7A695C] hover:bg-[#68584C] text-white flex items-center justify-center shrink-0 transition-colors"
                >
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[12px] text-[#7A746C] font-['Poppins']">
          <p>© 2026 Sham Interior Decorator. All rights reserved.</p>
          <div className="flex space-x-6 mt-3 sm:mt-0">
            <a href="#privacy" className="hover:text-[#171717]">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#171717]">Terms of Service</a>
            <a href="#sitemap" className="hover:text-[#171717]">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
