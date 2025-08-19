import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section pt-40  text-white py-20">
      <div className="container mx-auto px-8 text-center">
        <h1 className="text-4xl font-bold mb-4 w-2/4 mx-auto">
          We Build Tools <span className="text-yellow-400">⧫</span> to Create
          What’s Next on the Web
        </h1>
        <p className="text-lg mb-8 w-3/5 mx-auto">
          Pimjo empowers developers, designers, startups, and businesses with
          intuitive tools and impactful products that streamline workflows,
          speed up design and development, and guide every step from concept to
          launch— helping you build web projects and solutions with clarity,
          confidence, and the right resources.
        </p>
        <div className="flex justify-center gap-8">
          <a
            href="/products"
            className="bg-white text-purple-700 font-semibold px-6 py-2 rounded-full"
          >
            PRODUCTS
          </a>
          <a
            href="/about"
            className="bg-transparent border-2 border-white text-white font-semibold px-6 py-2 rounded-full"
          >
            ABOUT
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
