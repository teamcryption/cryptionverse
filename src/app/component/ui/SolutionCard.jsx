"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  DollarSign,
  Globe,
  Shield,
  Code,
  BarChart2,
  Box,
  Bot,
  SquareCode,
  Smartphone,
  ChartBarBig,
} from "lucide-react"; // Import desired icons

const SolutionCard = ({ item, index }) => {
  // Function to choose icons based on the title
  const getIcon = (icon) => {
    switch (icon) {
      case "AI Automation":
        return <Bot className="mx-auto mb-6 text-blue-600" />;
      case "Business Software":
        return <SquareCode className="mx-auto mb-6 text-blue-600" />;
      case "Web Development":
        return <Globe className="mx-auto mb-6 text-blue-600" />;
      case "App Development":
        return <Smartphone className="mx-auto mb-6 text-blue-600" />;
      case "SaaS Products":
        return <ChartBarBig className="mx-auto mb-6 text-blue-600" />;
      case "Card Issuing Solution":
        return <BarChart2 className="mx-auto mb-6 text-blue-600" />;
      case "Crowdfunding Solutions":
        return <Box className="mx-auto mb-6 text-blue-600" />;
      default:
        return <CreditCard className="mx-auto mb-6 text-blue-600" />;
    }
  };

  return (
    <motion.div
      className="bg-gray-50 shadow-lg rounded-xl overflow-hidden transition transform hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="p-6 text-center">
        {/* Display icon based on title */}
        {getIcon(item?.title)}
        <h3 className="text-xl font-semibold text-gray-800">{item?.title}</h3>
        <p className="text-sm text-gray-500 mt-3">{item?.slug}</p>
        <button className="mt-6 px-8 py-3 bg-black text-white font-semibold rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:from-blue-600 hover:to-purple-600 focus:outline-none">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default SolutionCard;
