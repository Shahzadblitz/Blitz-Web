import React from 'react';
import { Shield, MapPin, PhoneCall } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-[#0D47A1] overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D47A1]/95 via-[#0D47A1]/85 to-[#0D47A1]/60" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold leading-tight mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Grow Your Home Service Business with Real Customers — Not Just Clicks
              <br />
              <span className="inline-block mt-2">
                <span className="text-white">Local Leads.</span>{' '}
                <span className="text-white">Real Calls.</span>{' '}
                <span className="text-white">Zero Guesswork.</span>
              </span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Built specifically for contractors, franchises, and local pros — we connect you with real people actively searching for help in your area.
            </p>

            {/* Bullet Points */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F7941D]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Shield size={18} className="text-[#F7941D]" />
                </div>
                <span className="text-white/90 text-base">We're your growth partner, not just a lead vendor.</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F7941D]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={18} className="text-[#F7941D]" />
                </div>
                <div>
                  <span className="text-white font-bold text-base">50K+ Leads Generated Monthly</span>
                  <br />
                  <span className="text-white/70 text-sm">Real leads, not just clicks.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F7941D]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <PhoneCall size={18} className="text-[#F7941D]" />
                </div>
                <span className="text-white/90 text-base">Find out how many leads we generated near you last month.</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href="#contact"
                className="bg-[#F7941D] hover:bg-[#e8860f] text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 text-sm tracking-wide"
              >
                Check Lead Volume in Your Area
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-full hover:bg-white hover:text-[#0D47A1] transition-all duration-300 text-sm tracking-wide"
              >
                Get Leads Now
              </a>
            </div>

            <p className="text-white/50 text-xs">
              * No setup fees. No contract required. Cancel at any time – no cancellation charges.
            </p>
          </div>

          {/* Right - Map / Laptop Preview */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <img
                src="https://inquirly.com/admin/wp-content/uploads/2025/05/Desktop.gif"
                alt="Lead Generation Map"
                className="w-full max-w-lg rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
