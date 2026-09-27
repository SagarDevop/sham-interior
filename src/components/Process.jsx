import React from 'react';
import { Palette, LayoutGrid, Home, MapPin, Heart } from 'lucide-react';
import businessData from '../data/businessData';

const iconMap = {
  Palette: <Palette className="w-5 h-5 text-[#7A695C]" />,
  LayoutGrid: <LayoutGrid className="w-5 h-5 text-[#7A695C]" />,
  Home: <Home className="w-5 h-5 text-[#7A695C]" />,
  MapPin: <MapPin className="w-5 h-5 text-[#7A695C]" />,
  Heart: <Heart className="w-5 h-5 text-[#7A695C]" />,
};

export default function WhyChooseUs() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-7 md:py-14">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 mb-8">
        <div>
          <span className="text-[11.5px] uppercase tracking-wider font-semibold text-[#7A695C] font-['Poppins']">
            Why Us
          </span>
          <h2 className="text-[#171717] font-['Poppins'] font-semibold text-[26px] sm:text-[30px] tracking-tight mt-0.5">
            {businessData.sections.whyChooseUs.heading}
          </h2>
        </div>
        <p className="text-[#77736D] font-['Poppins'] text-[13px] max-w-md">
          {businessData.customization.description}
        </p>
      </div>

      {/* USP Cards */}
      <div className="flex overflow-x-auto snap-x snap-mandatory space-x-3 pb-2 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:space-x-0 sm:gap-4">
        {businessData.usp.map((item, idx) => (
          <div
            key={idx}
            className="w-[72vw] sm:w-auto shrink-0 snap-start bg-white rounded-[16px] sm:rounded-[18px] p-4 sm:p-5 border border-[#EFECE6] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
          >
            <div className="w-10 h-10 rounded-[10px] bg-[#F7EBDD] flex items-center justify-center mb-3">
              {iconMap[item.icon]}
            </div>
            <h3 className="text-[#171717] font-['Poppins'] font-semibold text-[14px] sm:text-[15px] mb-1 leading-snug">
              {item.title}
            </h3>
            <p className="text-[#77736D] font-['Poppins'] text-[11.5px] sm:text-[12px] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
