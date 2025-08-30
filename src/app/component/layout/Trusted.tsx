"use client";
import Image from "next/image";
import React from "react";

/**
 * Screenshot-style logo strip:
 * - Continuous RTL auto-slide
 * - Pause on hover
 * - Even spacing, clean white background
 * - Mobile → fewer logos visible; desktop → all visible
 *
 * Swap the src paths to your own assets.
 */
const logos = [
  { src: "/pertner/apple.png", alt: "Apple" },
  { src: "/pertner/spotify.png", alt: "Spotify" },
  { src: "/pertner/slack.png", alt: "Slack" },
  { src: "/pertner/brand-asset-management.png", alt: "Dropbox" },
  { src: "/pertner/communication.png", alt: "Webflow" },
  { src: "/pertner/google.png", alt: "Zoom" },
];

// Helper: duplicate once for seamless loop
const loopLogos = [...logos, ...logos];

export default function TrustedSection() {
  return (
    <section className="bg-white">
      <div className=" container mx-auto w-full">
        {/* Hover group to pause animation */}
        <div className="group relative overflow-hidden py-10">
          {/* Faded edges (optional, remove if you want hard edges) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

          {/* Marquee track */}
          <div className="marquee will-change-transform">
            <ul className="flex items-center gap-16 md:gap-24">
              {loopLogos.map((logo, i) => (
                <li key={i} className="shrink-0">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={300}
                    height={300}
                    className="h-8 w-20 md:h-20"
                    priority={i < 6} // first set gets priority for instant paint
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Local CSS for animation */}
      <style jsx>{`
        /* Adjust speed by changing 28s; longer = slower */
        .marquee {
          display: inline-block;
          min-width: max-content;
          animation: slide-left 28s linear infinite;
        }
        /* Pause on hover of the whole strip */
        .group:hover .marquee {
          animation-play-state: paused;
        }
        /* Make the loop seamless by translating exactly half the width (we rendered the content twice) */
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
