import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function Careers() {
  const [appliedRole, setAppliedRole] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', portfolio: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    {
      id: 1,
      number: '1',
      title: 'Interior Decorator & Site Lead',
      type: 'Full Time • On Site',
      desc: 'Supervising interior decoration projects, wall panel installations, and modular kitchen fit-outs in Kangra.',
    },
    {
      id: 2,
      number: '2',
      title: 'Modular Kitchen & Panel Technician',
      type: 'Full Time • On Site',
      desc: 'Expert installation of PVC wall panels, charcoal louvers, PVC marble sheets, and modular cabinetry.',
    },
    {
      id: 3,
      number: '3',
      title: 'POP & Gypsum Ceiling Specialist',
      type: 'Full Time • On Site',
      desc: 'Crafting high-quality POP and gypsum false ceiling solutions with integrated lighting coves.',
    },
  ];

  const handleApply = (role) => {
    setAppliedRole(role);
    setShowModal(true);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
    }, 2000);
  };

  return (
    /* Medium/small width matching the About and Project sections */
    <section id="careers" className="w-full max-w-[920px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-7 sm:mb-9">
        <h2 className="text-[#171717] font-['Poppins'] font-semibold text-[24px] sm:text-[28px] tracking-tight">
          Join Sham Interior Decorator
        </h2>
        <p className="text-[#77736D] font-['Poppins'] text-[13px] mt-1 max-w-xl">
          We are always looking for skilled craftsmen and interior decorators to deliver exceptional work across Kangra.
        </p>
      </div>

      {/* Stacked Job Cards */}
      <div className="space-y-3.5">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-[16px] p-4 sm:p-5 border border-[#ECE6DE] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-[#D8CFBF] transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            {/* Left: Number + Details */}
            <div className="flex items-start sm:items-center space-x-3.5 sm:space-x-4">
              {/* Soft Beige Circle Badge */}
              <div className="w-10 h-10 rounded-full bg-[#F1E2CC] flex items-center justify-center shrink-0 text-[#7A695C] font-['Poppins'] font-bold text-[15px]">
                {job.number}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                  <h3 className="text-[#171717] font-['Poppins'] font-semibold text-[15px]">
                    {job.title}
                  </h3>
                  <span className="text-[11px] font-medium text-[#7A695C] bg-[#FAF5EE] px-2 py-0.5 rounded-full border border-[#EFE8DD]">
                    {job.type}
                  </span>
                </div>
                <p className="text-[#77736D] font-['Poppins'] text-[12px] max-w-xl leading-relaxed">
                  {job.desc}
                </p>
              </div>
            </div>

            {/* Right: Apply Now Pill Button */}
            <div className="pt-1 md:pt-0 shrink-0">
              <button
                onClick={() => handleApply(job.title)}
                className="w-full sm:w-auto bg-[#7A695C] hover:bg-[#68584C] text-white text-[12px] font-medium font-['Poppins'] px-5 py-1.5 rounded-full transition-all duration-200 shadow-xs"
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Application Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-[20px] p-6 sm:p-7 max-w-md w-full shadow-2xl border border-[#ECE6DE]">
            {submitted ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-[#F1E2CC] text-[#7A695C] flex items-center justify-center mx-auto mb-3">
                  <Check size={24} />
                </div>
                <h4 className="text-[17px] font-semibold text-[#171717] font-['Poppins']">
                  Application Submitted!
                </h4>
                <p className="text-[12.5px] text-[#77736D] mt-1 font-['Poppins']">
                  Thank you for applying for {appliedRole}. Our talent team will be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-[17px] font-semibold text-[#171717] font-['Poppins']">
                      Apply for {appliedRole}
                    </h4>
                    <p className="text-[11.5px] text-[#77736D] font-['Poppins']">
                      Join our multidisciplinary architectural studio
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="text-[#77736D] hover:text-[#171717] text-sm"
                  >
                    ✕
                  </button>
                </div>

                <div>
                  <label className="block text-[11.5px] font-medium text-[#171717] mb-1 font-['Poppins']">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full text-[12.5px] px-3.5 py-1.5 rounded-[9px] border border-[#DDD6CB] focus:outline-none focus:border-[#7A695C]"
                  />
                </div>

                <div>
                  <label className="block text-[11.5px] font-medium text-[#171717] mb-1 font-['Poppins']">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full text-[12.5px] px-3.5 py-1.5 rounded-[9px] border border-[#DDD6CB] focus:outline-none focus:border-[#7A695C]"
                  />
                </div>

                <div>
                  <label className="block text-[11.5px] font-medium text-[#171717] mb-1 font-['Poppins']">
                    Portfolio / LinkedIn URL
                  </label>
                  <input
                    required
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    placeholder="https://behance.net/yourname"
                    className="w-full text-[12.5px] px-3.5 py-1.5 rounded-[9px] border border-[#DDD6CB] focus:outline-none focus:border-[#7A695C]"
                  />
                </div>

                <div className="pt-2 flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-1.5 text-[12px] rounded-full text-[#77736D] hover:bg-[#F2ECE4]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-1.5 text-[12px] font-medium rounded-full bg-[#7A695C] text-white hover:bg-[#68584C]"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
