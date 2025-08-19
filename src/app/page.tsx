import React from "react";
import Header from "./component/layout/Header";
import Hero from "./component/layout/Hero";
import Footer from "./component/layout/Footer";
import TrustedSection from "./component/layout/Trusted";
import Solutions from "./component/layout/Solutions";
import Contact from "./component/layout/Contact";

function page() {
  return (
    <div className="bg-white">
      <div className=" bg-white">
        <Header />
        <Hero />
      </div>
      {/* <TrustedSection /> */}
      <Solutions />
      <Contact />
      <Footer />
    </div>
  );
}

export default page;
