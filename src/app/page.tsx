import React from "react";
import Header from "./component/layout/Header";
import Hero from "./component/layout/Hero";
import Footer from "./component/layout/Footer";
import TrustedSection from "./component/layout/Trusted";
import Solutions from "./component/layout/Solutions";
import Contact from "./component/layout/Contact";
import { useToast } from "@/components/ui/use-toast";
import { Toast } from "@/components/ui/toast";

function page() {
  return (
    <div className="bg-white">
      <div className=" bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500">
        <Header />
        <Hero />
      </div>
      <TrustedSection />
      <Solutions />
      <Contact />
      <Footer />
      <Toast />
    </div>
  );
}

export default page;
