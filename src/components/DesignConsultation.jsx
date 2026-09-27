import React, { useState } from 'react';
import { Check, Calendar } from 'lucide-react';

export default function DesignConsultation() {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', propertyType: 'Residential', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const packages = [
    {
      id: 1,
      number: '1',
      title: 'PVC Wall Panels & Wall Decor',
      type: 'Starting from ₹80/sq.ft.',
      desc: 'Decorative wall panels, 3D panels, charcoal louver panels, PVC marble sheets, and wooden-texture wallpapers.',
    },
    {
      id: 2,
      number: '2',
      title: 'POP & Gypsum False Ceiling',
      type: 'Starting from ₹60/sq.ft.',
      desc: 'Gypsum boards and false ceiling solutions for residential and commercial rooms (observed range ₹60–₹150/sq.ft.).',
    },
    {
      id: 3,
      number: '3',
      title: 'Complete Interior & Modular Kitchen',
      type: 'Customized Solutions',
      desc: 'Turnkey interior decoration, modular kitchens, living room paneling, and custom space layout design in Nagrota Bagwan.',
    },
  ];

  const handleBook = (pkgTitle) => {
    setSelectedService(pkgTitle);
    setShowModal(true);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
    }, 2200);
  };

  return (
    <section id="consultation" className="w-full max-w-[920px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-7 sm:mb-9">
        <h2 className="text-[#171717] font-['Poppins'] font-semibold text-[24px] sm:text-[28px] tracking-tight">
          Get an Interior Quote
        </h2>
        <p className="text-[#77736D] font-['Poppins'] text-[13px] mt-1 max-w-xl">
          Schedule a consultation for modular kitchens, wall paneling, false ceilings, or full home decoration in Kangra.
        </p>
      </div>

      {/* Stacked Service Cards */}
      <div className="space-y-3.5">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-[16px] p-4 sm:p-5 border border-[#ECE6DE] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-[#D8CFBF] transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            {/* Left: Number + Details */}
            <div className="flex items-start sm:items-center space-x-3.5 sm:space-x-4">
              {/* Soft Beige Circle Badge */}
              <div className="w-10 h-10 rounded-full bg-[#F1E2CC] flex items-center justify-center shrink-0 text-[#7A695C] font-['Poppins'] font-bold text-[15px]">
                {pkg.number}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                  <h3 className="text-[#171717] font-['Poppins'] font-semibold text-[15px]">
                    {pkg.title}
                  </h3>
                  <span className="text-[11px] font-medium text-[#7A695C] bg-[#FAF5EE] px-2 py-0.5 rounded-full border border-[#EFE8DD]">
                    {pkg.type}
                  </span>
                </div>
                <p className="text-[#77736D] font-['Poppins'] text-[12px] max-w-xl leading-relaxed">
                  {pkg.desc}
                </p>
              </div>
            </div>

            {/* Right: Book Consultation Pill Button */}
            <div className="pt-1 md:pt-0 shrink-0">
              <button
                onClick={() => handleBook(pkg.title)}
                className="w-full sm:w-auto bg-[#7A695C] hover:bg-[#68584C] text-white text-[12px] font-medium font-['Poppins'] px-5 py-2 rounded-full transition-all duration-200 shadow-xs flex items-center justify-center space-x-1.5"
              >
                <Calendar size={13} />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Consultation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-[20px] p-6 sm:p-7 max-w-md w-full shadow-2xl border border-[#ECE6DE]">
            {submitted ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-[#F1E2CC] text-[#7A695C] flex items-center justify-center mx-auto mb-3">
                  <Check size={24} />
                </div>
                <h4 className="text-[17px] font-semibold text-[#171717] font-['Poppins']">
                  Consultation Booked!
                </h4>
                <p className="text-[12.5px] text-[#77736D] mt-1 font-['Poppins']">
                  Thank you! Our lead interior consultant will connect with you within 24 hours to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-[17px] font-semibold text-[#171717] font-['Poppins']">
                      Book Design Consultation
                    </h4>
                    <p className="text-[11.5px] text-[#7A695C] font-['Poppins'] font-medium">
                      {selectedService}
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
                    Your Name
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

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11.5px] font-medium text-[#171717] mb-1 font-['Poppins']">
                      Email
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
                      Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full text-[12.5px] px-3.5 py-1.5 rounded-[9px] border border-[#DDD6CB] focus:outline-none focus:border-[#7A695C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11.5px] font-medium text-[#171717] mb-1 font-['Poppins']">
                    Project Scope / Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your space, carpet area, and target timeline..."
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
                    Confirm Booking
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
