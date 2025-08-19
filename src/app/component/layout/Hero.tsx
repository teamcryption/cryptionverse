import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section pt-40  text-white py-20 text-black">
      <div className="container mx-auto px-8 text-center">
        <h1 className="text-4xl font-bold mb-4 lg:w-3/5 sm:w-2/3 mx-auto text-black">
          Launching Soon: Cryption Verse <br />
          AI, Automation & Modern Web — built for growth.
        </h1>
        <p className="text-lg mb-8 lg:w-3/5 sm:w-1/1 mx-auto text-black">
          We’re building custom business software, AI agents, and modern web
          experiences to help brands move faster and smarter.
        </p>
        <div className="flex justify-center gap-8">
          <a
            href="/products"
            className="bg-black text-white font-semibold px-6 py-2 rounded-full"
          >
            PRODUCTS
          </a>
          <a
            href="/about"
            className="bg-gray-600 border-2 border-white text-white font-semibold px-6 py-2 rounded-full"
          >
            ABOUT
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
