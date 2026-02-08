import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/mockData';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1565C0] text-white text-sm py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-medium tracking-wide">Your #1 Solution for Home Services Lead Generation</span>
          <div className="hidden md:flex items-center gap-6">
            <span className="text-white/90 hover:text-white cursor-pointer transition-colors">Partner Support</span>
            <a href="tel:8553877272" className="flex items-center gap-2 font-bold hover:text-white/90 transition-colors">
              <Phone size={14} fill="white" />
              (855) 387-7272
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-0 shrink-0">
            <div className="flex items-center">
              <span className="text-[#1565C0] text-2xl font-black tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span className="inline-flex items-center">
                  <span className="border-l-[3px] border-[#1565C0] pl-1">I</span>nquirly
                </span>
              </span>
              <span className="text-gray-400 text-2xl font-light">.com</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 ml-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-[#F7941D] ${
                  link.active ? 'text-[#F7941D]' : 'text-gray-700'
                }`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} className="mt-0.5" />}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="#contact" className="text-[15px] font-medium text-gray-700 hover:text-[#F7941D] transition-colors">
              Contact
            </a>
            <a
              href="#login"
              className="bg-[#F7941D] hover:bg-[#e8860f] text-white font-bold text-sm px-7 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              LOGIN
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#F7941D] transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`block py-2 text-[15px] font-medium ${link.active ? 'text-[#F7941D]' : 'text-gray-700'}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="block py-2 text-[15px] font-medium text-gray-700">Contact</a>
            <a href="#login" className="inline-block bg-[#F7941D] text-white font-bold text-sm px-7 py-2.5 rounded-full mt-2">
              LOGIN
            </a>
            <div className="pt-3 border-t mt-3">
              <a href="tel:8553877272" className="flex items-center gap-2 text-[#1565C0] font-bold">
                <Phone size={14} /> (855) 387-7272
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
