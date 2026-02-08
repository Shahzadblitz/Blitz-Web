import React from 'react';
import CountUp from 'react-countup';

const GrowingBusiness = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left - Image with Stats */}
          <div className="relative">
            <img
              src="https://inquirly.com/admin/wp-content/uploads/2022/07/image-2.jpg"
              alt="Growing Your Business"
              className="w-full rounded-2xl shadow-xl"
            />
            {/* Stats overlay card */}
            <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-auto md:bottom-8 md:left-1/2 md:-translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-6 text-center max-w-xs mx-auto">
              <p className="text-gray-500 text-xs font-medium mb-1">Total Generated Leads</p>
              <p className="text-[#1976D2] font-extrabold text-3xl mb-3">
                <CountUp end={248535} duration={3} separator="," enableScrollSpy scrollSpyOnce />
              </p>
              <div className="border-t border-gray-100 pt-3">
                <p className="text-[#F7941D] font-extrabold text-xl">
                  $<CountUp end={2000} duration={2.5} separator="," enableScrollSpy scrollSpyOnce />+
                </p>
                <p className="text-gray-500 text-xs">Renovation Contracts Signed Monthly</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-[#F7941D] mb-4 leading-tight"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              In the Business of<br />Growing Your Business
            </h2>
            <p className="text-gray-900 font-bold text-base mb-4">
              We have generated leads for our partners that turned into $350,000 and even $600,000 jobs
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              We understand more than most that time is of the essence when it comes to home services, so we make sure that our leads are from homeowners or authorized decision makers who are actively seeking home services. This allows us to put you in touch with potential customers who are ready to take action, and we're confident in our ability to deliver results.
            </p>
            <p className="text-gray-400 text-sm">
              By partnering directly with our clients, our lead generation services have helped scale their businesses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowingBusiness;
