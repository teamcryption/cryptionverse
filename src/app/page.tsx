import React from "react";
import Header from "./component/layout/Header";
import Hero from "./component/layout/Hero";
import Footer from "./component/layout/Footer";
import TrustedSection from "./component/layout/Trusted";
import Solutions from "./component/layout/Solutions";
import Contact from "./component/layout/Contact";
import TestimonialsSection from "./component/layout/Testimonials";
import Creativity from "./component/layout/Creativity";
import Example from "./component/layout/Header2";
import BrandIdentity from "./component/layout/BrandIdentity";
import AwardSection from "./component/layout/AwardSection";
import TeamCarousel from "./component/layout/TeamSection";
import PricingComponent from "./component/layout/PricingSection";
import FAQ from "./component/layout/Faq";

function page() {
  return (
    <div className="bg-white">
      <div className=" bg-white">
        {/* <Header /> */}
        <Example />
        <Hero />
      </div>
      <TrustedSection />
      <Creativity />
      <TestimonialsSection />

      <BrandIdentity />
      <AwardSection />
      <TeamCarousel />
      <PricingComponent />
      <FAQ />
      {/* <Solutions /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default page;
