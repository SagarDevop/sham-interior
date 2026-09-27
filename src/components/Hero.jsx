import React, { useState } from 'react';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=85',
      titleLine1: 'Beautiful Spaces.',
      titleLine2: 'Thoughtfully Designed.',
    },
    {
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=85',
      titleLine1: 'Interior Design &',
      titleLine2: 'Decoration Solutions',
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=85',
      titleLine1: 'Customized Interiors',
      titleLine2: 'in Kangra',
    },
  ];

  return (
    <section id="home" className="w-full max-w-[1320px] mx-auto px-3 sm:px-6 pt-0 sm:pt-1 pb-6 sm:pb-12">
      {/* Hero Image Container: Sleeker mobile height to prevent excessive scroll */}
      <div className="relative w-full h-[250px] sm:h-[340px] md:h-[420px] lg:h-[480px] rounded-[18px] sm:rounded-[28px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] group">
        {/* Hero Background Image */}
        <img
          src={heroSlides[activeSlide].image}
          alt="We Create Amazing Designs"
          className="w-full h-full object-cover object-center transition-all duration-700 brightness-[0.80] contrast-[1.04]"
        />

        {/* Ambient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30 pointer-events-none" />

        {/* Centered Hero Heading */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white font-['Poppins'] font-bold text-[24px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[1.12] tracking-tight max-w-[740px] drop-shadow-md">
            <span>{heroSlides[activeSlide].titleLine1}</span>
            <br />
            <span>{heroSlides[activeSlide].titleLine2}</span>
          </h1>
        </div>

        {/* Slide Pagination Indicator Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-1.5 sm:space-x-2 z-10">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-2 transition-all duration-300 rounded-full ${
                activeSlide === idx
                  ? 'w-7 bg-[#F1E2CC]'
                  : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
