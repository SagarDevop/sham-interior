import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Project');

  const categories = ['All Project', 'Residential Interior', 'Modular Kitchen', 'Wall Panels'];

  const projects = [
    {
      id: 1,
      title: 'Residential Interior',
      category: 'Residential Interior',
      desc: 'Customized interior solutions and living space decoration in Kangra.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      isFeatured: true,
    },
    {
      id: 2,
      title: 'Modular Kitchen',
      category: 'Modular Kitchen',
      desc: 'Ergonomic kitchen layout and tailored cabinet storage.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
    },
    {
      id: 3,
      title: 'Wall Panel Installation',
      category: 'Wall Panels',
      desc: 'PVC wall panels, charcoal louvers & PVC marble sheets.',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
    },
    {
      id: 4,
      title: 'Ceiling & Gypsum Work',
      category: 'Residential Interior',
      desc: 'Gypsum false ceiling and POP decorative solutions.',
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
      isFeatured: false,
    },
  ];

  return (
    /* Slightly increased width (max-w-[1050px]) matching About section */
    <section id="portfolio" className="w-full max-w-[1050px] mx-auto px-4 sm:px-6 py-8 sm:py-14">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-5 sm:mb-8">
        <div>
          <h2 className="text-[#171717] font-['Poppins'] font-semibold text-[22px] sm:text-[28px] tracking-tight">
            Latest Project
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11.5px] sm:text-[12px] font-['Poppins'] font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#2C2523] text-white shadow-xs'
                  : 'bg-[#F2ECE4] text-[#77736D] hover:bg-[#EAE4DC] hover:text-[#171717]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid: Horizontal swipeable on mobile, grid on tablet/desktop */}
      <div className="flex overflow-x-auto snap-x snap-mandatory space-x-3 pb-2 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:space-x-0 sm:gap-4">
        {/* Card 1: Featured Dark Card */}
        <div className="w-[80vw] sm:w-auto shrink-0 snap-start relative group rounded-[16px] overflow-hidden min-h-[260px] sm:min-h-[340px] flex flex-col justify-end p-5 shadow-[0_6px_20px_rgba(0,0,0,0.06)] bg-[#2C2523]">
          <img
            src={projects[0].image}
            alt={projects[0].title}
            className="absolute inset-0 w-full h-full object-cover brightness-[0.55] group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />

          <div className="relative z-10 text-white">
            <h3 className="text-[16px] sm:text-[18px] font-semibold font-['Poppins'] leading-snug mb-1">
              {projects[0].title}
            </h3>
            <p className="text-[11px] text-white/80 font-['Poppins'] line-clamp-2 mb-3">
              {projects[0].desc}
            </p>
            <div>
              <a
                href="#contact"
                className="inline-flex items-center space-x-1.5 bg-white text-[#171717] text-[11px] font-semibold font-['Poppins'] px-3.5 py-1.5 rounded-full hover:bg-[#FAF9F6] transition-colors shadow-xs"
              >
                <span>View Project</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: Green Room */}
        <div className="w-[65vw] sm:w-auto shrink-0 snap-start rounded-[16px] overflow-hidden min-h-[260px] sm:min-h-[340px] bg-[#EFECE6] flex flex-col shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-[#ECE6DE] group">
          <div className="relative flex-1 overflow-hidden">
            <img
              src={projects[1].image}
              alt={projects[1].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Card 3: Light Cream Scandinavian Room */}
        <div className="w-[65vw] sm:w-auto shrink-0 snap-start rounded-[16px] overflow-hidden min-h-[260px] sm:min-h-[340px] bg-[#EFECE6] flex flex-col shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-[#ECE6DE] group">
          <div className="relative flex-1 overflow-hidden">
            <img
              src={projects[2].image}
              alt={projects[2].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Card 4: Teal & Velvet Room */}
        <div className="w-[65vw] sm:w-auto shrink-0 snap-start rounded-[16px] overflow-hidden min-h-[260px] sm:min-h-[340px] bg-[#EFECE6] flex flex-col shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-[#ECE6DE] group">
          <div className="relative flex-1 overflow-hidden">
            <img
              src={projects[3].image}
              alt={projects[3].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
