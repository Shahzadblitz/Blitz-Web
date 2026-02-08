import React, { useState } from 'react';
import { usStates } from '../data/mockData';
import { MapPin } from 'lucide-react';
import CountUp from 'react-countup';

const LeadLocationSection = () => {
  const [selectedState, setSelectedState] = useState('');

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#1976D2] rounded-3xl overflow-hidden px-8 md:px-14 py-14">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Receive Leads in your location today!
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Location Selector */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={18} className="text-white/80" />
                <span className="text-white/80 text-sm font-medium">Your location</span>
              </div>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full max-w-xs bg-white/10 backdrop-blur border border-white/30 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7941D] appearance-none cursor-pointer"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'white\'%3e%3cpath d=\'M7 10l5 5 5-5z\'/%3e%3c/svg%3e")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
              >
                <option value="" className="text-gray-900">- Select -</option>
                {usStates.map((state) => (
                  <option key={state} value={state} className="text-gray-900">{state}</option>
                ))}
              </select>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-block bg-[#F7941D] hover:bg-[#e8860f] text-white font-bold px-10 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 text-sm tracking-wider"
                >
                  GET LEADS NOW
                </a>
              </div>
            </div>

            {/* Right - Stats Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <p className="text-gray-500 text-sm font-medium mb-4">Average Lead / Client*</p>
              <div className="flex items-center justify-center mb-8">
                <svg width="80" height="80" viewBox="0 0 80 80" className="text-[#F7941D]">
                  <circle cx="40" cy="40" r="35" fill="none" stroke="#FFF3E0" strokeWidth="4" />
                  <circle cx="40" cy="40" r="35" fill="none" stroke="#F7941D" strokeWidth="4" strokeDasharray="180 220" strokeLinecap="round" />
                  <circle cx="40" cy="40" r="28" fill="none" stroke="#FFF3E0" strokeWidth="3" />
                  <circle cx="40" cy="40" r="28" fill="none" stroke="#F7941D" strokeWidth="3" strokeDasharray="140 180" strokeLinecap="round" />
                </svg>
              </div>
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1976D2]"></div>
                    <span className="text-sm text-gray-600">Average Return On Investment</span>
                  </div>
                  <span className="text-[#F7941D] font-extrabold text-xl">
                    <CountUp end={8.5} decimals={1} duration={2.5} suffix="X" enableScrollSpy scrollSpyOnce />
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F7941D]"></div>
                    <span className="text-sm text-gray-600">Average Leads Delivered per Month</span>
                  </div>
                  <span className="text-[#1976D2] font-extrabold text-xl">
                    <CountUp end={10} duration={2} enableScrollSpy scrollSpyOnce />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-600">Average conversion rate on inbound calls</span>
                  </div>
                  <span className="text-green-600 font-extrabold text-xl">
                    <CountUp end={60} duration={2} suffix="%" enableScrollSpy scrollSpyOnce />
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-xs mt-6 leading-relaxed">
                * More competitive areas of the country command higher Lead prices.<br/>
                The statistics may vary according to the season and movements in consumption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadLocationSection;
