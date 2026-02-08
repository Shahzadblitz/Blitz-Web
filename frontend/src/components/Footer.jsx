import React from 'react';
import { footerLinks } from '../data/mockData';
import { Phone, Facebook, Linkedin, ArrowUp } from 'lucide-react';

const CTABanner = () => (
  <section className="py-8">
    <div className="max-w-6xl mx-auto px-6">
      <div className="relative bg-[#1976D2] rounded-2xl overflow-hidden px-10 py-10 md:py-12">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=60)' }}
        />
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
            Ready to grow your<br />home service business?
          </h2>
          <div className="text-right">
            <p className="text-white/80 text-sm mb-3">Call our Advertising Specialists</p>
            <a
              href="tel:8553877272"
              className="inline-flex items-center gap-2 bg-[#F7941D] hover:bg-[#e8860f] text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 text-sm"
            >
              <Phone size={16} />
              (855) 387-7272
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <CTABanner />
      <footer className="bg-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top row */}
          <div className="flex items-center justify-between mb-8">
            <a href="#" className="flex items-center">
              <span className="text-[#1565C0] text-2xl font-black tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span className="border-l-[3px] border-[#1565C0] pl-1">I</span>nquirly
              </span>
              <span className="text-gray-400 text-2xl font-light">.com</span>
            </a>
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-[#1976D2] hover:bg-[#1565C0] text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <ArrowUp size={20} />
            </button>
          </div>

          <div className="border-t border-gray-100 pt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Description */}
              <div className="lg:col-span-1">
                <p className="text-gray-500 text-sm leading-relaxed">
                  Inquirly is your premier lead provider for home service companies in the United States. We focus on generating high-quality, exclusive client leads for damage restoration, roofing, plumbing, and bathroom remodeling companies.
                </p>
              </div>

              {/* Links Column 1 */}
              <div>
                {footerLinks.col1.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-gray-600 text-sm py-1.5 hover:text-[#1976D2] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Links Column 2 */}
              <div>
                {footerLinks.col2.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-gray-600 text-sm py-1.5 hover:text-[#1976D2] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Address + Social */}
              <div>
                <p className="text-gray-600 text-sm">2645 Executive Park Dr</p>
                <p className="text-gray-600 text-sm">Suite 113</p>
                <p className="text-gray-900 text-sm font-bold mt-1">Weston, FL 33331</p>
                <p className="text-gray-600 text-sm mt-2">(855) 387-7272</p>
                <div className="flex items-center gap-3 mt-4">
                  <a href="#" className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-[#1976D2] transition-colors">
                    <Facebook size={16} />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-[#1976D2] transition-colors">
                    <Linkedin size={16} />
                  </a>
                </div>
                <a href="#" className="text-gray-400 text-sm mt-3 block hover:text-[#1976D2] transition-colors">
                  Client Login
                </a>
              </div>

              {/* Badges */}
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4 text-center w-32">
                  <svg width="40" height="40" viewBox="0 0 48 48" className="mx-auto mb-2">
                    <circle cx="24" cy="24" r="20" fill="#4285F4" />
                    <text x="24" y="29" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">G</text>
                  </svg>
                  <p className="text-xs text-gray-500">Google Partner</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-100 mt-10 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2020-2026 All Rights Reserved. Inquirly Inc.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
