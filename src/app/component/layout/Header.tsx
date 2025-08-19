"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../ui/Social";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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
    <header
      className={`  fixed w-full top-0 left-0 z-50 transition-all ${
        scrolled ? "py-2  rounded" : "py-4" // Reduce padding when scrolling
      }`}
    >
      <div
        className={` mx-auto px-4 flex ${
          scrolled
            ? " transition-all justify-evenly  ease-in-out bg-gray-700 rounded-full max-w-4xl"
            : " transition-all justify-between  ease-in-out max-w-7xl"
        } items-center `}
      >
        {/* Logo */}
        <div
          className={`text-2xl font-bold text-white space-x-2 transition-all ${
            scrolled ? "text-xl" : "text-2xl" // Reduce font size when scrolled
          }`}
        >
          <Link href="/">
            <img src="/card.png" className="w-15 h-13" alt="Logo" />
          </Link>
        </div>

        {/* Navigation Menu for Desktop */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-black font-serif">
            Home
          </Link>
          <Link href="/" className="text-white hover:text-black font-serif">
            Products
          </Link>
          <Link href="/" className="text-white hover:text-black font-serif">
            About
          </Link>
          <Link href="/" className="text-white hover:text-black font-serif">
            Contact
          </Link>
        </nav>

        {/* Right-side Social Icons */}
        <div className="flex space-x-4">
          <Button />
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" className="text-white hover:text-blue-500">
              Home
            </Link>
            <Link href="/products" className="text-white hover:text-blue-500">
              Products
            </Link>
            <Link href="/about" className="text-white hover:text-blue-500">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-500">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
