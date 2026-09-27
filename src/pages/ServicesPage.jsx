import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import DesignConsultation from '../components/DesignConsultation';

export default function ServicesPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    {
      num: '01',
      title: 'Interior Design & Decoration',
      subtitle: 'Customized Interior Solutions for Homes & Commercial Spaces',
      desc: 'Sham Interior Decorator offers tailored interior solutions designed specifically according to your room layout, aesthetic taste, and functional needs in Nagrota Bagwan and across Kangra.',
      tags: ['Customized Designs', 'Space Optimization', 'Residential & Commercial', 'Decorative Options'],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    },
    {
      num: '02',
      title: 'Modular Kitchen Solutions',
      subtitle: 'Tailored Kitchen Cabinetry & Ergonomic Layouts',
      desc: 'Complete modular kitchen planning and execution with smart cabinet storage, durable countertop finishes, and custom color options tailored to your cooking space.',
      tags: ['Modular Cabinets', 'Ergonomic Layouts', 'Custom Storage', 'Durable Finishes'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
    },
    {
      num: '03',
      title: 'PVC & Louver Wall Panels',
      subtitle: 'Starting from ₹80/sq.ft. • 3D & Charcoal Panels',
      desc: 'Transform your walls with PVC wall panels, 3D decorative panels, charcoal louver panels, and PVC marble sheets. High durability, water resistance, and modern visual appeal.',
      tags: ['Starting ₹80/sq.ft.', 'Charcoal Louver Panels', '3D Wall Panels', 'PVC Marble Sheets'],
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
    },
    {
      num: '04',
      title: 'POP & Gypsum False Ceiling',
      subtitle: 'Starting from ₹60/sq.ft. • Observed Range ₹60–₹150/sq.ft.',
      desc: 'Precision false ceiling design and gypsum board installation with cove lighting integration, decorative ceiling borders, and acoustic refinement.',
      tags: ['Starting ₹60/sq.ft.', 'Gypsum Boards', 'False Ceiling Work', 'Decorative Ceiling'],
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    },
  ];

  const faqs = [
    {
      q: 'Where is Sham Interior Decorator located in Kangra?',
      a: 'We are located at Shop No. 8, Near Fauji Dhaba, Tharu, Nagrota Bagwan, Kangra, Himachal Pradesh – 176047.',
    },
    {
      q: 'What are your starting prices for PVC Wall Panels and POP/Gypsum False Ceilings?',
      a: 'PVC Wall Panels start from ₹80/sq.ft. and POP/Gypsum Boards start from ₹60/sq.ft. (observed range ₹60–₹150/sq.ft. depending on design complexity).',
    },
    {
      q: 'What services do you provide?',
      a: 'We provide interior design & decoration, modular kitchens, PVC wall panels, 3D wall panels, louver & charcoal panels, PVC marble sheets, POP/gypsum ceiling solutions, and decorative wallpapers.',
    },
    {
      q: 'What are your business hours?',
      a: 'We are open Monday through Sunday from 9:00 AM to 7:00 PM.',
    },
  ];

  return (
    <div className="w-full bg-[#FAF9F6]">
      {/* Editorial Header */}
      <section className="max-w-[1180px] mx-auto px-4 sm:px-6 pt-12 pb-14 border-b border-[#E8E2D8]">
        <span className="text-[12px] uppercase tracking-widest font-semibold text-[#7A695C] font-['Poppins'] block mb-3">
          Services & Pricing
        </span>
        <h1 className="text-[#171717] font-['Poppins'] font-bold text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] tracking-tight max-w-3xl">
          Interior Decoration & Customized Solutions
        </h1>
        <p className="text-[#77736D] font-['Poppins'] text-[15px] sm:text-[16px] max-w-2xl mt-4 leading-relaxed">
          From modular kitchens and wall paneling to false ceilings and decorative wallpapers, we offer customized options for every room in Nagrota Bagwan, Kangra.
        </p>
      </section>

      {/* Alternating Services Layout (No Clunky Boxes!) */}
      <section className="max-w-[1180px] mx-auto px-4 sm:px-6 py-16 space-y-24">
        {services.map((item, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image Column */}
            <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="rounded-[22px] sm:rounded-[28px] overflow-hidden aspect-[4/3] bg-[#EAE5DE]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Typography Column */}
            <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-1' : ''} space-y-4`}>
              <span className="text-[13px] font-semibold text-[#7A695C] font-['Poppins']">
                Phase {item.num}
              </span>
              <h2 className="text-[#171717] font-['Poppins'] font-semibold text-[28px] sm:text-[34px] leading-tight">
                {item.title}
              </h2>
              <p className="text-[#171717] font-['Poppins'] text-[14px] font-medium">
                {item.subtitle}
              </p>
              <p className="text-[#6B655D] font-['Poppins'] text-[13.5px] leading-relaxed">
                {item.desc}
              </p>

              {/* Minimalist Deliverables Tags */}
              <div className="flex flex-wrap gap-2 pt-2 pb-2">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11.5px] font-medium text-[#77736D] bg-[#F1ECE4] px-3 py-1 rounded-full font-['Poppins']"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div>
                <a
                  href="#consultation"
                  className="inline-flex items-center space-x-2 text-[13px] font-semibold text-[#7A695C] hover:text-[#171717] font-['Poppins'] transition-colors"
                >
                  <span>Book this service</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Design Consultation Section */}
      <div className="border-t border-[#E8E2D8]">
        <DesignConsultation />
      </div>

      {/* Clean FAQ: Borderless Hairline Rows */}
      <section className="max-w-[1050px] mx-auto px-4 sm:px-6 py-16 border-t border-[#E8E2D8]">
        <div className="mb-10">
          <span className="text-[11.5px] uppercase tracking-wider font-semibold text-[#7A695C] block mb-1">
            Questions & Answers
          </span>
          <h2 className="text-[#171717] font-['Poppins'] font-semibold text-[28px] sm:text-[32px] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-[#E8E2D8]">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-5">
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full text-left flex items-center justify-between font-['Poppins'] font-semibold text-[16px] text-[#171717] hover:text-[#7A695C] transition-colors"
              >
                <span>{faq.q}</span>
                <span className="ml-4 text-[#7A695C]">
                  {activeFaq === idx ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              {activeFaq === idx && (
                <p className="mt-3 text-[13.5px] text-[#6B655D] font-['Poppins'] leading-relaxed pr-8">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
