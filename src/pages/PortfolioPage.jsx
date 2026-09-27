import React, { useState } from 'react';
import { ArrowUpRight, X, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Residential Interior', 'Modular Kitchen', 'Wall Panels', 'Gypsum Work'];

  const projects = [
    {
      id: 1,
      title: 'Residential Interior Decoration',
      category: 'Residential Interior',
      location: 'Nagrota Bagwan, Kangra',
      area: 'Customized Space',
      year: 'Kangra, HP',
      desc: 'Customized living space decoration with ambient paneling, custom layout planning, and decorative wall finishes.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 2,
      title: 'Modular Kitchen Layout',
      category: 'Modular Kitchen',
      location: 'Kangra, HP',
      area: 'Customized Area',
      year: 'Kangra, HP',
      desc: 'Ergonomic kitchen design with modern cabinet fittings, optimized storage, and easy-clean surfaces.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 3,
      title: 'PVC & Louver Wall Paneling',
      category: 'Wall Panels',
      location: 'Nagrota Bagwan',
      area: 'Starting ₹80/sq.ft.',
      year: 'Kangra, HP',
      desc: 'PVC wall panels, 3D decorative panels, charcoal louvers, and PVC marble sheet installations.',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 4,
      title: 'POP & Gypsum False Ceiling',
      category: 'Gypsum Work',
      location: 'Kangra, HP',
      area: 'Starting ₹60/sq.ft.',
      year: 'Kangra, HP',
      desc: 'Gypsum board false ceiling with integrated cove lighting and decorative ceiling designs.',
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 5,
      title: 'Decorative Wall Finishes',
      category: 'Wall Panels',
      location: 'Nagrota Bagwan',
      area: 'Customized Solutions',
      year: 'Kangra, HP',
      desc: 'Decorative wallpaper and wooden-texture wall coverings suited to client space and taste.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 6,
      title: 'Commercial Interior Decoration',
      category: 'Residential Interior',
      location: 'Kangra, HP',
      area: 'Customized Area',
      year: 'Kangra, HP',
      desc: 'Customized interior solutions for shop, salon, and office spaces with durable wall panels.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    },
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full bg-[#FAF9F6]">
      {/* Editorial Header */}
      <section className="max-w-[1180px] mx-auto px-4 sm:px-6 pt-12 pb-14 border-b border-[#E8E2D8]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[12px] uppercase tracking-widest font-semibold text-[#7A695C] font-['Poppins'] block mb-2">
              Design Showcase
            </span>
            <h1 className="text-[#171717] font-['Poppins'] font-bold text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] tracking-tight">
              Interior & Decoration Showcase
            </h1>
          </div>

          {/* Minimalist Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[12.5px] font-['Poppins'] font-medium px-4 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#2C2523] text-white'
                    : 'bg-[#F1ECE4] text-[#77736D] hover:bg-[#EAE4DC] hover:text-[#171717]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Photo Grid (Clean & Open, No Clunky Boxes!) */}
      <section className="max-w-[1180px] mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] rounded-[22px] overflow-hidden bg-[#EAE5DE] mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                />
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#171717] opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={14} />
                </div>
              </div>

              {/* Minimalist Typographic Meta */}
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#7A695C] font-['Poppins']">
                  <span>{project.category}</span>
                  <span>{project.location}</span>
                </div>
                <h2 className="text-[#171717] font-['Poppins'] font-semibold text-[17px] leading-snug group-hover:text-[#7A695C] transition-colors">
                  {project.title}
                </h2>
                <p className="text-[#77736D] font-['Poppins'] text-[12.5px] line-clamp-2 leading-relaxed pt-1">
                  {project.desc}
                </p>
                <div className="pt-2 flex items-center justify-between text-[11.5px] text-[#A09A92] font-['Poppins']">
                  <span>{project.area}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-[24px] max-w-2xl w-full overflow-hidden shadow-2xl">
            <div className="relative aspect-[16/10] bg-[#EAE5DE]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center space-x-2 text-[11px] uppercase tracking-wider text-[#7A695C] font-semibold font-['Poppins'] mb-1">
                <span>{selectedProject.category}</span>
                <span>•</span>
                <span>{selectedProject.location}</span>
              </div>
              <h2 className="text-[#171717] font-['Poppins'] font-semibold text-[22px] sm:text-[26px] mb-3">
                {selectedProject.title}
              </h2>
              <p className="text-[#77736D] font-['Poppins'] text-[13px] leading-relaxed mb-6">
                {selectedProject.desc}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#EAE4DC]">
                <div className="text-[12px] text-[#77736D] font-['Poppins']">
                  <span className="font-semibold text-[#171717]">{selectedProject.area}</span> • Completed {selectedProject.year}
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 text-[12px] text-[#77736D] hover:text-[#171717]"
                  >
                    Close
                  </button>
                  <Link
                    to="/contact"
                    className="px-5 py-2 text-[12px] font-medium rounded-full bg-[#7A695C] hover:bg-[#68584C] text-white"
                  >
                    Inquire on Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
