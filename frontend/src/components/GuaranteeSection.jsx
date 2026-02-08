import React from 'react';
import { Flame } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-[#1565C0] mb-6 leading-tight"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              We guarantee<br />
              high-quality, exclusive<br />
              leads in your area
            </h2>
            <div className="mb-4">
              <p className="text-gray-900 font-bold text-base">We Understand the Problem.</p>
              <p className="text-gray-900 font-bold text-base">Here's Your Solution</p>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
              We know that when you succeed, we succeed, and that is why we only sell our leads to one company. This way, you never have to compete or bid for a lead - they are exclusive to you. In addition, our marketing experts are always working to optimize and improve our campaigns, so that you can receive the highest quality leads possible.
            </p>
          </div>

          {/* Right - Image with Card */}
          <div className="relative">
            <img
              src="https://inquirly.com/admin/wp-content/uploads/2022/07/image-1.jpg"
              alt="Exclusive Leads"
              className="w-full rounded-2xl shadow-xl"
            />
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 md:left-8 bg-white rounded-xl shadow-2xl p-5 max-w-[220px] animate-float">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-600 text-xs font-bold">+1 New Lead</span>
              </div>
              <div className="mb-2">
                <p className="text-gray-400 text-xs">Client Budget</p>
                <p className="text-gray-900 font-extrabold text-xl">$15,000</p>
              </div>
              <div className="flex items-center gap-2 bg-[#FFF3E0] rounded-lg px-3 py-2">
                <Flame size={16} className="text-[#F7941D]" />
                <div>
                  <p className="text-xs font-bold text-gray-900">Fire Restoration</p>
                  <p className="text-xs text-gray-500">Miami, FL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
