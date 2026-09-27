import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Award, Trophy } from 'lucide-react';

export default function Testimonial() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "Friendly workers and great work. Provides many designs and customised your according 👍",
      author: 'Ketan Sharma',
      role: 'Customer (July 24, 2025)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 5,
    },
  ];

  return (
    <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Testimonial Card */}
        <div className="lg:col-span-7 bg-[#F7EBDD] rounded-[24px] sm:rounded-[28px] p-8 sm:p-12 relative shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-[#EAE0D2]">
          <span className="text-[12px] uppercase tracking-wider font-semibold text-[#7A695C] font-['Poppins']">
            Testimonials
          </span>
          <h2 className="text-[#171717] font-['Poppins'] font-semibold text-[28px] sm:text-[32px] tracking-tight mt-1 mb-6">
            What Client says!!
          </h2>

          <div className="flex space-x-1 mb-4 text-[#C49752]">
            {[...Array(testimonials[currentIdx].rating)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>

          <p className="text-[#171717] font-['Poppins'] text-[15px] sm:text-[16.5px] leading-[1.65] italic mb-8">
            "{testimonials[currentIdx].quote}"
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-[#E8DDCE]">
            <div className="flex items-center space-x-3.5">
              <img
                src={testimonials[currentIdx].avatar}
                alt={testimonials[currentIdx].author}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <div>
                <h4 className="text-[#171717] font-['Poppins'] font-semibold text-[14.5px]">
                  {testimonials[currentIdx].author}
                </h4>
                <p className="text-[#77736D] font-['Poppins'] text-[12px]">
                  {testimonials[currentIdx].role}
                </p>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex space-x-2">
              <button
                onClick={() =>
                  setCurrentIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
                }
                aria-label="Previous Testimonial"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#FAF9F6] text-[#171717] flex items-center justify-center shadow-sm transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() =>
                  setCurrentIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
                }
                aria-label="Next Testimonial"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#FAF9F6] text-[#171717] flex items-center justify-center shadow-sm transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Ratings and Atmosphere Image */}
        <div className="lg:col-span-5 space-y-5">
          <div className="relative rounded-[22px] overflow-hidden aspect-[4/3] shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <img
              src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
              alt="Interior lighting fixture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-[14px] p-3.5 flex items-center justify-between border border-white/60">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#F1E2CC] flex items-center justify-center text-[#7A695C]">
                  <Trophy size={20} />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#171717] font-['Poppins']">
                    Google Rating 5.0 / 5
                  </p>
                  <p className="text-[11px] text-[#77736D] font-['Poppins']">
                    12 Public Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Ratings Card */}
          <div className="bg-white rounded-[20px] p-5 border border-[#ECE6DE] flex items-center justify-between shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
            <div className="flex items-center space-x-3.5">
              <div className="w-11 h-11 rounded-full bg-[#FAF5EE] border border-[#EFEAE2] flex items-center justify-center text-[#7A695C]">
                <Award size={22} />
              </div>
              <div>
                <p className="text-[18px] font-bold text-[#171717] font-['Poppins'] leading-tight">
                  Justdial Listing
                </p>
                <p className="text-[12px] text-[#77736D] font-['Poppins']">
                  ~5.0 Rating • 21+ Reviews
                </p>
              </div>
            </div>
            <span className="text-[12px] font-semibold text-[#7A695C] bg-[#F1E2CC] px-3 py-1 rounded-full font-['Poppins']">
              GST Verified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
