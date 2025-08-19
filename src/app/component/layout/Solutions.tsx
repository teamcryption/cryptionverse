"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SolutionCard from "../ui/SolutionCard"; // Make sure the import path is correct

const Solutions = () => {
  const [scrolled, setScrolled] = useState(false);

  const solutionTitles = [
    {
      title: "AI Automation",
      slug: "Streamline workflows, reduce manual work, and boost efficiency with smart AI-powered automation.",
    },
    {
      title: "Business Software",
      slug: "Custom tools and ERP/CRM systems built around your operations and goals.",
    },
    {
      title: "Web Development",
      slug: "Modern, scalable, and fast websites tailored for businesses that want to grow.",
    },
    {
      title: "App Development",
      slug: "Native and cross-platform apps designed for performance and user experience.",
    },
    {
      title: "SaaS Products",
      slug: "From MVP to launch — scalable software-as-a-service solutions ready for growth",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true); // Add 'scrolled' state if the page is scrolled
      } else {
        setScrolled(false); // Remove 'scrolled' state if at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative bg-white py-20 container mx-auto">
      {/* Animated Background Shape */}
      <motion.div
        className="absolute inset-0 z-[-1] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#7F5FC4"
            fillOpacity="1"
            d="M0,160L1440,32L1440,320L0,320Z"
          ></path>
        </svg>
      </motion.div>

      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-black">
          Explore <span className="text-black-600">Solutions</span> and Discover
          How They Work and Boost Your Business
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover a wide range of solutions specifically designed to address
          your business challenges. Learn how our innovative offerings work to
          optimize processes and accelerate your business growth effectively.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-12">
        {/* Loop through solutions and display cards */}
        {solutionTitles.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }} // Initial state before scroll
            animate={{
              opacity: scrolled ? 1 : 0, // Fade in when scrolled
              y: scrolled ? 0 : 50, // Slide up when scrolled
            }}
            transition={{
              duration: 0.8, // Animation duration
              delay: index * 0.2, // Delay between cards
              ease: "easeInOut", // Smooth easing
            }}
          >
            <SolutionCard item={item} index={index} />
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Show More Solutions
        </button>
      </div>
    </section>
  );
};

export default Solutions;
