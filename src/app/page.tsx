import React from "react";
import Header from "./component/layout/Header";
import Hero from "./component/layout/Hero";
import Footer from "./component/layout/Footer";
import TrustedSection from "./component/layout/Trusted";
import Solutions from "./component/layout/Solutions";
import Contact from "./component/layout/Contact";
import TestimonialsSection from "./component/layout/Testimonials";
import Creativity from "./component/layout/Creativity";

function page() {
  return (
    <div className="bg-white">
      <div className=" bg-white">
        <Header />
        <Hero />
      </div>
      <TrustedSection />
      <TestimonialsSection />
      <Creativity />
      <Solutions />
      <Contact />
      <Footer />
    </div>
  );
}

export default page;
