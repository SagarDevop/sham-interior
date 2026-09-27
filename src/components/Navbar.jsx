import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Specialist', href: '/specialist' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="w-full bg-[#FAF9F6] sticky top-0 z-50 backdrop-blur-md/80 border-b border-[#F0EBE3]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-4.5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center space-x-2.5 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[10px] bg-[#7A695C] text-white flex items-center justify-center shadow-xs group-hover:bg-[#68584C] transition-colors shrink-0">
            <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[17px] sm:text-[19px] font-bold text-[#171717] font-['Poppins'] tracking-tight">
              SHAM
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase text-[#7A695C] font-['Poppins'] mt-0.5">
              Interior Decorator
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-8 text-[13.5px] font-medium font-['Poppins']">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`transition-colors duration-200 ${
                isActive(link.href)
                  ? 'text-[#171717] font-semibold'
                  : 'text-[#77736D] hover:text-[#171717]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="bg-[#7A695C] hover:bg-[#68584C] text-white text-[13px] font-medium font-['Poppins'] px-5 py-2.5 rounded-full transition-all duration-200 shadow-xs hover:shadow-sm"
          >
            Contact Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#171717] p-1.5 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-[#E8E4DD] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-[14px] font-medium py-1.5 ${
                isActive(link.href) ? 'text-[#171717] font-semibold' : 'text-[#77736D] hover:text-[#171717]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block bg-[#7A695C] text-white text-[13px] font-medium px-5 py-2.5 rounded-full"
            >
              Contact Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
