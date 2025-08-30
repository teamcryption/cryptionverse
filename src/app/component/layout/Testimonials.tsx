"use client";
import React from "react";
import Image from "next/image";
import { ArrowBigUp, ArrowUp, ChevronUp, LucideAArrowUp } from "lucide-react";

// Testimonial Data
const testimonials = [
  {
    name: "Alisa Hester",
    position: "PM, Hourglass",
    company: "Web Design Agency",
    testimonial: "“Love the product! It changed the way I approach design.”",
    image: "/testimonial/person-1.jpg",
  },
  {
    name: "Rich Wilson",
    position: "COO, Command+R",
    company: "Web Development Agency",
    testimonial: "“We’ve really sped up our workflow using Untitled.”",
    image: "/testimonial/person-2.jpg",
  },
  {
    name: "Annie Stanley",
    position: "Designer, Catalog",
    company: "UX Agency",
    testimonial: "“Untitled has helped me bring my vision to life.”",
    image: "/testimonial/person-4.jpg",
  },
  {
    name: "Johnny D.",
    position: "PM, Sisyphus",
    company: "Machine Learning",
    testimonial: "“The best investment we made for our team.”",
    image: "/testimonial/person-3.jpg",
  },
  {
    name: "Emily Clark",
    position: "CEO, Visionary",
    company: "Marketing Agency",
    testimonial: "“Incredible experience! Would recommend it to anyone.”",
    image: "/testimonial/person-1.jpg",
  },
  {
    name: "Jacob Miller",
    position: "CTO, TechWorks",
    company: "Tech Solutions",
    testimonial: "“Untitled has improved our internal processes immensely.”",
    image: "/testimonial/person-3.jpg",
  },
];

// Duplicate testimonials for continuous sliding
const loopTestimonials = [...testimonials, ...testimonials];

export default function TestimonialSlider() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-5xl font-[Manrope] font-bold text-black-700 mb-4">
            Customers adore it—see <br /> for yourself!
          </h2>
          <button className=" w-[150px] h-[50px] bg-black text-white rounded-lg font=[Poppins] flex items-center justify-center ">
            <span> our Customers</span>
            <ArrowUp size={25} style={{ transform: "rotate(45deg)" }} />
          </button>
        </div>
        {/* Hover group to pause animation */}
        <div className="group relative overflow-hidden py-10">
          {/* Faded edges (optional, remove if you want hard edges) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

          {/* Marquee Track */}
          <div className="marquee will-change-transform">
            <ul className="flex items-center gap-[16px] md:gap-[32px]">
              {loopTestimonials.map((testimonial, index) => (
                <li key={index} className="shrink-0">
                  <div className="relative w-[360px] h-[480px] bg-gray-100 rounded-lg shadow-lg">
                    {/* Full-width Image */}
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover w-full h-full rounded-lg"
                      width={320}
                      height={320}
                    />
                    {/* Overlay Details */}
                    <div className="absolute bottom-5 left-5  right-5 bg-[#0000002c] bg-opacity-20 backdrop-filter backdrop-blur-[4px] text-white p-4 rounded-[16px]">
                      {/* Star Rating */}
                      <div className="flex justify-start mb-2">
                        <span className="text-yellow-400">★★★★★</span>
                      </div>
                      <h3 className="text-xl font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm">{testimonial.position}</p>
                      <p className="text-xs">{testimonial.company}</p>
                      <p className="mt-4 text-base">
                        {testimonial.testimonial}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Local CSS for animation */}
      <style jsx>{`
        .marquee {
          display: inline-block;
          min-width: max-content;
          animation: slide-left 30s linear infinite;
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
