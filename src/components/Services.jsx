import React from 'react';
import { DraftingCompass, Hammer, Home, Landmark } from 'lucide-react';

export default function Services() {
  const serviceCards = [
    {
      icon: <DraftingCompass className="w-5 h-5 text-[#7A695C]" />,
      title: 'Interior Design & Decor',
      desc: 'Customized interior decoration for homes and spaces in Kangra.',
    },
    {
      icon: <Hammer className="w-5 h-5 text-[#7A695C]" />,
      title: 'Modular Kitchens',
      desc: 'Ergonomic kitchen layouts tailored to your space requirements.',
    },
    {
      icon: <Home className="w-5 h-5 text-[#7A695C]" />,
      title: 'PVC & Louver Panels',
      desc: 'PVC panels from ₹80/sq.ft., charcoal louvers & PVC marble sheets.',
    },
    {
      icon: <Landmark className="w-5 h-5 text-[#7A695C]" />,
      title: 'POP & Gypsum Work',
      desc: 'Gypsum false ceilings starting from ₹60/sq.ft. with custom lighting.',
    },
  ];

  return (
    /* Full-width warm beige background section as clearly seen in the reference screenshot */
    <section id="services" className="w-full bg-[#F1E2CC] py-8 sm:py-16 mt-4 sm:mt-8">
      {/* Centered content inside the full-width beige band */}
      <div className="max-w-[920px] mx-auto px-4 sm:px-6">
        {/* Header Row */}
        <div className="flex items-center justify-between gap-4 mb-5 sm:mb-10">
          <h2 className="text-[#171717] font-['Poppins'] font-semibold text-[22px] sm:text-[28px] tracking-tight">
            Our Speciality Services
          </h2>
          <a
            href="#contact"
            className="bg-[#7A695C] hover:bg-[#68584C] text-white text-[11.5px] sm:text-[12px] font-medium font-['Poppins'] px-4 py-1.5 rounded-full transition-all duration-200 shadow-xs"
          >
            View All
          </a>
        </div>

        {/* 4 Cards: Horizontal swipeable on mobile, grid on tablet/desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory space-x-3 pb-2 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:space-x-0 sm:gap-4">
          {serviceCards.map((service, index) => (
            <div
              key={index}
              className="w-[70vw] sm:w-auto shrink-0 snap-start bg-white rounded-[16px] p-4 sm:p-5 flex flex-col items-center text-center shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-white/60 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Soft Icon Badge */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[12px] bg-[#FAF6F0] border border-[#EFEAE2] flex items-center justify-center mb-2.5">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-[#171717] font-['Poppins'] font-semibold text-[13.5px] sm:text-[14px] mb-1 leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#77736D] font-['Poppins'] text-[11px] sm:text-[11.5px] leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
