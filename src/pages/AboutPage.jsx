import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const principles = [
    {
      num: '01',
      title: 'Customized Designs',
      desc: 'Tailored interior decoration options suited to your space, aesthetic vision, and personal requirements.',
    },
    {
      num: '02',
      title: 'Wide Range of Options',
      desc: 'Extensive variety of modular kitchens, PVC wall panels, charcoal louvers, marble sheets, and wallpapers.',
    },
    {
      num: '03',
      title: 'Quality Execution',
      desc: 'Friendly, experienced workers ensuring clean workmanship and durable decorative finishing.',
    },
    {
      num: '04',
      title: 'Local Kangra Presence',
      desc: 'Serving Nagrota Bagwan, Kangra, and surrounding regions with responsive local support.',
    },
  ];

  return (
    <div className="w-full bg-[#FAF9F6]">
      {/* Editorial Hero Header */}
      <section className="max-w-[1180px] mx-auto px-4 sm:px-6 pt-12 pb-14">
        <span className="text-[12px] uppercase tracking-widest font-semibold text-[#7A695C] font-['Poppins'] block mb-3">
          About Sham Interior Decorator
        </span>
        <h1 className="text-[#171717] font-['Poppins'] font-bold text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] tracking-tight max-w-3xl">
          Customized interior decoration for homes and spaces.
        </h1>
        <p className="text-[#77736D] font-['Poppins'] text-[15px] sm:text-[16px] max-w-2xl mt-4 leading-relaxed">
          Sham Interior Decorator provides customized interior solutions along with modular kitchens, decorative wall panels, PVC wall panels, PVC marble sheets, louver panels, wallpapers and POP/gypsum solutions in Nagrota Bagwan, Kangra.
        </p>
      </section>

      {/* Large Cinematic Photo Banner */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 mb-20">
        <div className="w-full h-[400px] sm:h-[500px] md:h-[580px] rounded-[24px] sm:rounded-[32px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85"
            alt="Sham Interior Decorator space design"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Studio Narrative: Open 2-Column Editorial */}
      <section className="max-w-[1180px] mx-auto px-4 sm:px-6 pb-20 border-b border-[#E8E2D8]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-[11.5px] uppercase tracking-wider font-semibold text-[#7A695C] block mb-2">
              Our Practice
            </span>
            <h2 className="text-[#171717] font-['Poppins'] font-semibold text-[28px] sm:text-[34px] leading-tight">
              Interior decoration & customized solutions in Kangra.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-[#6B655D] font-['Poppins'] text-[14px] sm:text-[15px] leading-[1.75]">
            <p>
              Sham Interior Decorator is an interior decoration and design business based in Nagrota Bagwan, Kangra, Himachal Pradesh.
            </p>
            <p>
              The business provides customized interior solutions along with modular kitchens, decorative wall panels, PVC wall panels, PVC marble sheets, louver panels, wallpapers and POP/gypsum-related solutions. The focus is on providing design and decorative options suited to the customer's space and requirements.
            </p>
            <div className="pt-3 flex items-center space-x-6 text-[#171717]">
              <div>
                <span className="text-[32px] font-bold block leading-none">5.0 ★</span>
                <span className="text-[12px] text-[#77736D]">Google Rating</span>
              </div>
              <div className="h-10 w-[1px] bg-[#DDD6CB]" />
              <div>
                <span className="text-[32px] font-bold block leading-none">12</span>
                <span className="text-[12px] text-[#77736D]">Google Reviews</span>
              </div>
              <div className="h-10 w-[1px] bg-[#DDD6CB]" />
              <div>
                <span className="text-[32px] font-bold block leading-none">21+</span>
                <span className="text-[12px] text-[#77736D]">Justdial Ratings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="max-w-[1180px] mx-auto px-4 sm:px-6 py-20 border-b border-[#E8E2D8]">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-[11.5px] uppercase tracking-wider font-semibold text-[#7A695C] block mb-1">
              Why Us
            </span>
            <h2 className="text-[#171717] font-['Poppins'] font-semibold text-[28px] sm:text-[34px] tracking-tight">
              Our Core Strengths
            </h2>
          </div>
          <p className="text-[#77736D] font-['Poppins'] text-[13.5px] max-w-md">
            Providing practical design and decorative options suited to your space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {principles.map((item, idx) => (
            <div key={idx} className="pt-4 border-t border-[#DFD8CD]">
              <span className="text-[14px] font-semibold text-[#7A695C] font-['Poppins'] block mb-3">
                {item.num}
              </span>
              <h3 className="text-[#171717] font-['Poppins'] font-semibold text-[17px] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-[#77736D] font-['Poppins'] text-[13px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Material Curation */}
      <section className="max-w-[1180px] mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-[24px] overflow-hidden aspect-[4/3] bg-[#EAE5DE]">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85"
                alt="Interior materials and wall panels"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11.5px] uppercase tracking-wider font-semibold text-[#7A695C] block">
              Decorative Material Range
            </span>
            <h2 className="text-[#171717] font-['Poppins'] font-semibold text-[28px] sm:text-[32px] leading-tight">
              Wide selection of wall panels & false ceiling options.
            </h2>
            <p className="text-[#6B655D] font-['Poppins'] text-[13.5px] sm:text-[14px] leading-relaxed">
              We offer PVC wall panels (starting from ₹80/sq.ft.), POP/Gypsum false ceilings (starting from ₹60/sq.ft.), charcoal louvers, 3D panels, PVC marble sheets, and wooden-texture wallpapers tailored to your project.
            </p>
            <div className="pt-3">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-[#7A695C] hover:bg-[#68584C] text-white text-[13px] font-medium font-['Poppins'] px-6 py-2.5 rounded-full transition-colors shadow-xs"
              >
                <span>Get a Free Quote</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
