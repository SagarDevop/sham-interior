import React from 'react';

export default function Stats() {
  const statistics = [
    { number: '5.0 ★', label: 'Google Rating' },
    { number: '12', label: 'Google Reviews' },
    { number: '5.0 ★', label: 'Justdial Rating' },
    { number: '21+', label: 'Justdial Reviews' },
  ];

  return (
    /* Clean white statistics band sitting directly beneath the full-width video section */
    <section className="w-full bg-white border-b border-[#EDE7DF] py-6 sm:py-12">
      <div className="max-w-[920px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {statistics.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center"
            >
              <span className="text-[#171717] font-['Poppins'] font-bold text-[26px] sm:text-[38px] leading-tight tracking-tight mb-0.5">
                {stat.number}
              </span>
              <span className="text-[#77736D] font-['Poppins'] font-medium text-[11px] sm:text-[13px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
