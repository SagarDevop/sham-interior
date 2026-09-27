import React, { useState } from 'react';
import { Check, Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential Interior',
    budget: '$50k - $100k',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#FAF9F6]">
      {/* Editorial Header */}
      <section className="max-w-[1180px] mx-auto px-4 sm:px-6 pt-12 pb-14 border-b border-[#E8E2D8]">
        <span className="text-[12px] uppercase tracking-widest font-semibold text-[#7A695C] font-['Poppins'] block mb-3">
          Inquire & Connect
        </span>
        <h1 className="text-[#171717] font-['Poppins'] font-bold text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] tracking-tight max-w-3xl">
          Let’s discuss your interior decoration project.
        </h1>
        <p className="text-[#77736D] font-['Poppins'] text-[15px] sm:text-[16px] max-w-2xl mt-4 leading-relaxed">
          Whether you need a modular kitchen, PVC wall paneling, charcoal louvers, false ceiling work, or full interior decoration in Kangra, we welcome your inquiry.
        </p>
      </section>

      {/* Open 2-Column Content (No Clunky Boxes!) */}
      <section className="max-w-[1180px] mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Studio Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[11.5px] uppercase tracking-wider font-semibold text-[#7A695C] block mb-2">
                Business Address
              </span>
              <h2 className="text-[#171717] font-['Poppins'] font-semibold text-[26px] leading-tight mb-3">
                Sham Interior Decorator
              </h2>
              <p className="text-[#6B655D] font-['Poppins'] text-[13.5px] leading-relaxed">
                Shop No. 8, Near Fauji Dhaba, Tharu, Nagrota Bagwan, Kangra, Himachal Pradesh – 176047
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#E8E2D8] text-[13.5px] font-['Poppins'] text-[#6B655D]">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-[#7A695C] shrink-0" />
                <span>+91 98159 74416</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-[#7A695C] shrink-0" />
                <span>Monday – Sunday: 9:00 AM – 7:00 PM</span>
              </div>
            </div>

            {/* Atelier Photography */}
            <div className="rounded-[22px] overflow-hidden aspect-[4/3] bg-[#EAE5DE]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Sham Interior Decorator"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Clean Editorial Inquiry Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-14 h-14 rounded-full bg-[#F1E2CC] text-[#7A695C] flex items-center justify-center mx-auto mb-4">
                  <Check size={28} />
                </div>
                <h3 className="text-[#171717] font-['Poppins'] font-semibold text-[24px]">
                  Inquiry Received
                </h3>
                <p className="text-[#77736D] font-['Poppins'] text-[14px] mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Sham Interior Decorator. We will get in touch with you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[13px] font-medium text-[#7A695C] hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-[#171717] font-['Poppins'] font-semibold text-[22px] sm:text-[24px] mb-1">
                    Send an Inquiry
                  </h3>
                  <p className="text-[#77736D] font-['Poppins'] text-[13px]">
                    Tell us about your space, carpet area, and design requirements.
                  </p>
                </div>

                <div>
                  <label className="block text-[11.5px] uppercase tracking-wider font-semibold text-[#171717] mb-2 font-['Poppins']">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full text-[13.5px] px-0 py-2.5 border-b border-[#D8CEBC] focus:border-[#171717] focus:outline-none bg-transparent placeholder:text-[#A8A29A]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11.5px] uppercase tracking-wider font-semibold text-[#171717] mb-2 font-['Poppins']">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full text-[13.5px] px-0 py-2.5 border-b border-[#D8CEBC] focus:border-[#171717] focus:outline-none bg-transparent placeholder:text-[#A8A29A]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11.5px] uppercase tracking-wider font-semibold text-[#171717] mb-2 font-['Poppins']">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98159 74416"
                      className="w-full text-[13.5px] px-0 py-2.5 border-b border-[#D8CEBC] focus:border-[#171717] focus:outline-none bg-transparent placeholder:text-[#A8A29A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11.5px] uppercase tracking-wider font-semibold text-[#171717] mb-2 font-['Poppins']">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full text-[13.5px] px-0 py-2.5 border-b border-[#D8CEBC] focus:border-[#171717] focus:outline-none bg-transparent"
                    >
                      <option>Interior Design & Decoration</option>
                      <option>Modular Kitchen</option>
                      <option>PVC & Louver Wall Panels</option>
                      <option>POP & Gypsum False Ceiling</option>
                      <option>Customized Interior Solutions</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11.5px] uppercase tracking-wider font-semibold text-[#171717] mb-2 font-['Poppins']">
                      Service Requirement
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full text-[13.5px] px-0 py-2.5 border-b border-[#D8CEBC] focus:border-[#171717] focus:outline-none bg-transparent"
                    >
                      <option>Starting from ₹60/sq.ft. (POP/Gypsum)</option>
                      <option>Starting from ₹80/sq.ft. (PVC Wall Panels)</option>
                      <option>Modular Kitchen Quotation</option>
                      <option>Full Home Interior Decoration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11.5px] uppercase tracking-wider font-semibold text-[#171717] mb-2 font-['Poppins']">
                    Project Scope & Ambition *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your property, carpet area, aesthetic goals, and intended timeline..."
                    className="w-full text-[13.5px] px-0 py-2.5 border-b border-[#D8CEBC] focus:border-[#171717] focus:outline-none bg-transparent placeholder:text-[#A8A29A]"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="bg-[#7A695C] hover:bg-[#68584C] text-white text-[13px] font-medium font-['Poppins'] px-8 py-3 rounded-full transition-colors shadow-xs flex items-center space-x-2"
                  >
                    <span>Submit Inquiry</span>
                    <Send size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
