"use client";
import React from "react";
import Button from "../ui/Social";
import { MapPin, PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 text-gray-700 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 px-6">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-purple-700 mb-4">
            <img src="/card.png" className="w-15 h-13" alt="Logo" />
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Cryption Verse is a secure and reliable platform for all your
            encryption needs.
          </p>
          {/* Social media icons */}
          <div className="mt-6">
            <Button />
          </div>
        </div>

        {/* Center Section - Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-purple-700 mb-4">
            Quick Links
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start space-x-8">
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section - Location & Contact */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-purple-700 mb-4">
            Our Locations
          </h3>
          <div className="flex lg:flex-row flex-col items-center md:items-start space-x-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 justify-center md:justify-start">
                <MapPin className="text-purple-600" />
                <p className="text-sm text-gray-600">Bangladesh</p>
              </div>
              <p className="text-sm text-gray-600">Dhaka, Bangladesh 123</p>
              <div className="flex items-center space-x-2 justify-center md:justify-start">
                <PhoneCall className="text-purple-600" />
                <p className="font-primary text-dark-1 hover:text-primary font-medium transition-colors">
                  +61 430 052 221
                </p>
              </div>
            </div>
            <div className="space-y-4 ">
              <div className="flex items-center space-x-2 justify-center md:justify-start">
                <MapPin className="text-purple-600" />
                <p className="text-sm text-gray-600">Australia</p>
              </div>
              <p className="text-sm text-gray-600">Sydney, Australia 456</p>
              <div className="flex items-center space-x-2 justify-center md:justify-start">
                <PhoneCall className="text-purple-600" />
                <p className="text-sm text-gray-600">+61 430 052 221</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="text-center mt-12">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Cryption Verse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
