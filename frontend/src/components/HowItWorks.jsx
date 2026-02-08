import React from 'react';
import { Target, DollarSign, UserCheck, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Target,
    title: 'Define what leads you want',
    description: 'Our portfolio of websites attracts potential clients with home service needs'
  },
  {
    icon: DollarSign,
    title: 'Define how much you want to pay',
    description: 'Dynamic pricing suited to your budget and location'
  },
  {
    icon: UserCheck,
    title: 'Receive exclusive leads only for you',
    description: 'All leads and calls are 100% exclusive and only routed to one partner'
  },
  {
    icon: BarChart3,
    title: 'Track the return of your investment',
    description: 'Login to your portal to view reports, listen to call recordings & more'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Real Customers, Real Revenue
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We focus on generating high-quality,<br />
            exclusive leads for home service companies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group text-center p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white border border-gray-100"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-[#FFF3E0] flex items-center justify-center group-hover:bg-[#F7941D] transition-colors duration-300">
                <step.icon size={28} className="text-[#F7941D] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm mb-5">
            Inquirly.com is the premier lead provider for home service companies in the United States
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#F7941D] hover:bg-[#e8860f] text-white font-bold px-10 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm tracking-wider"
          >
            GET STARTED
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
