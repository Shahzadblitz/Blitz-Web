import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import ServicesSection from "./components/ServicesSection";
import LeadLocationSection from "./components/LeadLocationSection";
import GuaranteeSection from "./components/GuaranteeSection";
import GrowingBusiness from "./components/GrowingBusiness";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <ServicesSection />
      <LeadLocationSection />
      <GuaranteeSection />
      <GrowingBusiness />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
