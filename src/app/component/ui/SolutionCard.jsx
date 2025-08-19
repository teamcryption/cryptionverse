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
} from "lucide-react"; // Import desired icons

const SolutionCard = ({ title, index }) => {
  // Function to choose icons based on the title
  const getIcon = (title) => {
    switch (title) {
      case "Mobile Banking Solutions":
        return <CreditCard className="mx-auto mb-6 text-blue-600" />;
      case "Remittance Solutions":
        return <DollarSign className="mx-auto mb-6 text-blue-600" />;
      case "Digital Wallet Solutions":
        return <Globe className="mx-auto mb-6 text-blue-600" />;
      case "Payment Gateway Solutions":
        return <Shield className="mx-auto mb-6 text-blue-600" />;
      case "Currency Exchange Solutions":
        return <Code className="mx-auto mb-6 text-blue-600" />;
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
        {getIcon(title)}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-3">
          Discover how this solution can help streamline your business
          operations.
        </p>
        <button className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:from-blue-600 hover:to-purple-600 focus:outline-none">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default SolutionCard;
