"use client";

import React from "react";

export default function DarkFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0B0D10] text-[#C6CBD3]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Brand */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3 select-none">
            {/* Minimal chain/arrow logo to match the feel of the screenshot */}
            {/* <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#0E1116] ring-1 ring-white/10">
              <svg viewBox="0 0 80 80" className="w-10 h-10" aria-hidden="true">
                <g
                  fill="none"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.9"
                >
                  <path d="M18 40a14 14 0 0 1 14-14h10" />
                  <path d="M62 40a14 14 0 0 1-14 14H38" />
                  <path d="M32 40h16" />
                </g>
                <path d="M58 18l12 7-12 7z" fill="#17B7D7" />
              </svg>
            </span>
            <div className="leading-tight">
              <div className="tracking-[0.08em] text-white font-semibold text-[15px]">
                CRYPTION VERSE
              </div>
              <div className="tracking-[0.4em] text-xs text-white/70">
                AUSTRALIA
              </div>
            </div> */}

            <img
              src="/Cryption verse for dark bg.png"
              className="h-10 w-auto md:h-12 mb-[10px]"
              alt="Cryption Verse Australia"
            />
          </div>

          {/* Primary nav */}
          <nav className="mt-2">
            <ul className="flex flex-wrap items-center gap-8 text-sm text-[#A5ACB8]">
              {[
                "Overview",
                "Features",
                "Pricing",
                "Careers",
                "Help",
                "Privacy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-150"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 pt-6">
          <p className="text-sm text-[#9AA2AE]">
            © {year} Cryption Verse. All rights reserved.
          </p>

          <ul className="flex items-center gap-8 text-sm text-[#A5ACB8]">
            {[
              { label: "Terms", href: "#" },
              { label: "Privacy", href: "#" },
              { label: "Cookies", href: "#" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
