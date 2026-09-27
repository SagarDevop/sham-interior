import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import SpecialistPage from './pages/SpecialistPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAF9F6] text-[#171717] font-['Poppins'] flex flex-col selection:bg-[#EAE0D2] selection:text-[#171717]">
        {/* Persistent Navigation Header */}
        <Navbar />

        {/* Dynamic Route Content — extra bottom padding on mobile for fixed bottom nav */}
        <main className="flex-1 w-full pb-16 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/specialist" element={<SpecialistPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Persistent Global Footer */}
        <Footer />

        {/* Fixed Bottom Navigation for mobile (hidden on md+) */}
        <MobileBottomNav />
      </div>
    </BrowserRouter>
  );
}
