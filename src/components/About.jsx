import React from 'react';
import { Box, Compass, Layers, Building2, Check } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Box className="w-5 h-5 text-[#7A695C]" />,
      title: 'Modular Kitchens',
      desc: 'Ergonomic kitchen designs & tailored space solutions',
    },
    {
      icon: <Compass className="w-5 h-5 text-[#7A695C]" />,
      title: 'PVC & Wall Panels',
      desc: '3D panels, charcoal louvers & PVC marble sheets',
    },
    {
      icon: <Layers className="w-5 h-5 text-[#7A695C]" />,
      title: 'POP & Gypsum',
      desc: 'False ceilings & gypsum boards from ₹60/sq.ft.',
    },
    {
      icon: <Building2 className="w-5 h-5 text-[#7A695C]" />,
      title: 'Wall Coverings',
      desc: 'Decorative & wooden-texture wallpaper solutions',
    },
  ];

  return (
    /* Slightly increased width (max-w-[1050px]) as requested */
    <section id="about" className="w-full max-w-[1050px] mx-auto px-4 sm:px-6 py-8 sm:py-14">
      {/* Top Header Row: 2-Columns */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-start mb-6 sm:mb-12">
        <div className="md:col-span-6">
          <h2 className="text-[#171717] font-['Poppins'] font-semibold text-[22px] sm:text-[28px] md:text-[32px] leading-[1.2] tracking-tight">
            Sham Interior Decorator — <br className="hidden sm:inline" />
            Nagrota Bagwan, <br className="hidden sm:inline" />
            Kangra
          </h2>
        </div>
        <div className="md:col-span-6 pt-0 md:pt-1.5">
          <p className="text-[#77736D] font-['Poppins'] text-[12.5px] sm:text-[13.5px] leading-[1.6]">
            Sham Interior Decorator is an interior decoration and design business based in Nagrota Bagwan, Kangra, Himachal Pradesh. The business provides customized interior solutions along with modular kitchens, decorative wall panels, PVC wall panels, PVC marble sheets, louver panels, wallpapers and POP/gypsum-related solutions. The focus is on providing design and decorative options suited to the customer's space and requirements.
          </p>
        </div>
      </div>

      {/* Main Content Row: Image Composition + 2x2 Features */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
        {/* Left: Editorial Image Composition */}
        <div className="md:col-span-6 relative pb-5 pr-3 sm:pr-6">
          {/* Main Architectural Interior Photo */}
          <div className="relative rounded-[16px] sm:rounded-[18px] overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.05)] bg-[#EAE5DE]">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Interior design architectural space"
              className="w-full h-[220px] sm:h-[310px] object-cover"
            />
          </div>

          {/* Overlapping Mockup Card (Bottom-Right) */}
          <div className="absolute -bottom-2 right-0 sm:right-1 w-[130px] sm:w-[185px] bg-white p-2 sm:p-2.5 rounded-[12px] sm:rounded-[14px] shadow-[0_10px_24px_rgba(0,0,0,0.10)] border border-[#ECE5DC]">
            <div className="rounded-[8px] sm:rounded-[10px] overflow-hidden aspect-[4/3] bg-[#E8E2D9] mb-1">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=400&q=80"
                alt="Interior design concept"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-0.5 text-center">
              <p className="text-[9.5px] sm:text-[10.5px] font-semibold text-[#171717] font-['Poppins'] truncate">
                Sham Interior Decorator
              </p>
              <p className="text-[8.5px] sm:text-[9px] text-[#77736D] font-['Poppins']">
                Nagrota Bagwan, Kangra
              </p>
            </div>
          </div>
        </div>

        {/* Right: 4 Features in 2x2 Grid + Bullet Points */}
        <div className="md:col-span-6 flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 mb-4 sm:mb-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="p-3 sm:p-4 rounded-[14px] bg-white border border-[#EFECE6] shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[8px] sm:rounded-[10px] bg-[#F7EBDD] flex items-center justify-center mb-2">
                  {item.icon}
                </div>
                <h3 className="text-[#171717] font-['Poppins'] font-semibold text-[12.5px] sm:text-[13.5px] mb-0.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[#77736D] font-['Poppins'] text-[11px] sm:text-[11.5px] leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bulleted summary notes */}
          <div className="space-y-1.5 pt-1 border-t border-[#EDE8E1]">
            <div className="flex items-center space-x-2 text-[11.5px] text-[#77736D] font-['Poppins']">
              <div className="w-3.5 h-3.5 rounded-full bg-[#F1E2CC] flex items-center justify-center shrink-0">
                <Check className="w-2 h-2 text-[#7A695C]" />
              </div>
              <span className="truncate">Customized interior design & decoration tailored to your space.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
