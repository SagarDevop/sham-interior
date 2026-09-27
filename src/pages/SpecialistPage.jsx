import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

export default function SpecialistPage() {
  const specialists = [
    {
      id: 1,
      name: 'Sham Interior Decorator Team',
      role: 'Lead Interior Consultant',
      exp: 'Nagrota Bagwan, Kangra',
      education: 'Customized Solutions',
      bio: 'Providing tailored interior decoration advice, spatial planning, and material selection suited to your budget and room design.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 2,
      name: 'Wall Paneling & Louver Team',
      role: 'PVC & Louver Panel Experts',
      exp: 'Wall Decor Specialists',
      education: 'Starting ₹80/sq.ft.',
      bio: 'Specialized installation of 3D wall panels, charcoal louvers, and PVC marble sheets with seamless alignment and clean finishes.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 3,
      name: 'POP & Ceiling Craft Team',
      role: 'Gypsum & False Ceiling Craftsmen',
      exp: 'Ceiling Specialists',
      education: 'Starting ₹60/sq.ft.',
      bio: 'Precision execution of POP and gypsum false ceilings, cove lighting slots, and decorative ceiling borders.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 4,
      name: 'Modular Kitchen Specialists',
      role: 'Kitchen Design Technicians',
      exp: 'Modular Kitchens',
      education: 'Custom Layouts',
      bio: 'Customized modular kitchen planning, cabinet fitting, and durable workspace finishes.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85',
    },
  ];

  return (
    <div className="w-full bg-[#FAF9F6]">
      {/* Editorial Header */}
      <section className="max-w-[1180px] mx-auto px-4 sm:px-6 pt-12 pb-14 border-b border-[#E8E2D8]">
        <span className="text-[12px] uppercase tracking-widest font-semibold text-[#7A695C] font-['Poppins'] block mb-3">
          Our Team & Craftsmanship
        </span>
        <h1 className="text-[#171717] font-['Poppins'] font-bold text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] tracking-tight max-w-3xl">
          Interior Decorators & Crafting Specialists
        </h1>
        <p className="text-[#77736D] font-['Poppins'] text-[15px] sm:text-[16px] max-w-2xl mt-4 leading-relaxed">
          Dedicated specialists providing customized interior decoration, modular kitchen installation, wall paneling, and false ceiling execution in Kangra.
        </p>
      </section>

      {/* Editorial Monograph Gallery (No Card Boxes!) */}
      <section className="max-w-[1180px] mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {specialists.map((person) => (
            <div key={person.id} className="group flex flex-col">
              {/* Editorial Full Portrait Photo */}
              <div className="rounded-[20px] overflow-hidden aspect-[3/4] bg-[#EAE5DE] mb-5">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700"
                />
              </div>

              {/* Typographic Metadata */}
              <div className="space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#7A695C] block">
                    {person.exp}
                  </span>
                  <h2 className="text-[#171717] font-['Poppins'] font-semibold text-[19px] leading-snug">
                    {person.name}
                  </h2>
                  <p className="text-[#77736D] font-['Poppins'] text-[12.5px] font-medium pb-2">
                    {person.role}
                  </p>
                  <p className="text-[#6B655D] font-['Poppins'] text-[12px] leading-relaxed pt-2 border-t border-[#EAE4DC]">
                    {person.bio}
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-1.5 text-[12px] font-semibold text-[#7A695C] hover:text-[#171717] transition-colors"
                  >
                    <span>Consult with {person.name.split(' ')[0]}</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clean Callout Section */}
      <section className="max-w-[1180px] mx-auto px-4 sm:px-6 pb-20 pt-6">
        <div className="pt-12 border-t border-[#E8E2D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-[#171717] font-['Poppins'] font-semibold text-[24px] sm:text-[28px]">
              Commission a Project with our Atelier
            </h3>
            <p className="text-[#77736D] font-['Poppins'] text-[13.5px] mt-1 max-w-xl">
              We accept a limited number of residential and commercial commissions each year to maintain uncompromising quality.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-[#7A695C] hover:bg-[#68584C] text-white text-[13px] font-medium font-['Poppins'] px-7 py-3 rounded-full transition-colors shadow-xs shrink-0 flex items-center space-x-2"
          >
            <span>Start a Conversation</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
