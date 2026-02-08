import React, { useState } from 'react';
import { services } from '../data/mockData';
import { ChevronRight } from 'lucide-react';

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-12 min-h-[500px]">
            {/* Left - Service Tabs */}
            <div className="lg:col-span-3 border-r border-gray-100 overflow-y-auto max-h-[500px] scrollbar-thin">
              <div className="py-2">
                {services.map((service, idx) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-full text-left px-5 py-3 text-sm font-medium transition-all duration-200 border-l-4 ${
                      idx === activeIndex
                        ? 'border-[#F7941D] text-gray-900 bg-orange-50/50 font-bold'
                        : 'border-transparent text-gray-400 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Center - Image */}
            <div className="lg:col-span-4 flex items-center justify-center p-6 bg-gray-50">
              <img
                src={activeService.image}
                alt={activeService.name}
                className="w-full h-[350px] object-cover rounded-2xl shadow-lg transition-all duration-500"
              />
            </div>

            {/* Right - Description */}
            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-center">
              <h3
                className="text-2xl md:text-3xl font-extrabold text-[#F7941D] mb-4"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {activeService.name}
              </h3>
              <div className="mb-4">
                <p className="text-gray-900 font-bold text-base">We Understand the Problem.</p>
                <p className="text-gray-900 font-bold text-base">Here's Your Solution</p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {activeService.description}
              </p>
              <a
                href={activeService.link}
                className="inline-flex items-center gap-1 text-[#F7941D] font-bold text-sm hover:gap-2 transition-all duration-300"
              >
                Read More <ChevronRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
