"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    name: "Amélie Laurent",
    role: "Founder & CEO",
    image: "/images/Image (15).png",
  },
  {
    name: "Nikolas Gibbons",
    role: "Engineering Manager",
    image: "/images/Image (16).png",
  },
  {
    name: "Sienna Hewitt",
    role: "Product Manager",
    image: "/images/Image (17).png",
  },
  {
    name: "Lily-Rose Chedjou",
    role: "Frontend Developer",
    image: "/images/Image (18).png",
  },
];

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <section className="container relative mx-auto bg-[#EEF2F6] p-12 py-30">
      <div className="md:flex md:items-start md:justify-between mb-8">
        <div className="text-left">
          <h2 className="text-7xl font-bold">
            The group you’ll <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
              collaborate
            </span>{" "}
            with
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            We’re a 100% remote team spread all across the world. Join us!
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-lg bg-black px-4 py-3 font-semibold text-white transition-colors hover:border-indigo-600 hover:bg-indigo-600 hover:text-white">
            <span>View More</span>{" "}
            <ArrowUp style={{ transform: "rotate(45deg)" }} />
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="flex items-center justify-center space-x-8 overflow-x-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex-none w-[280px] h-[380px]  rounded-lg "
            >
              <div>
                <Image
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-[280px] h-[296px] rounded-lg"
                  width={128}
                  height={128}
                />
              </div>
              <h3 className="text-xl font-semibold text-left">{member.name}</h3>
              <p className="text-sm text-left text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Arrow buttons aligned with "View More" button */}
      </div>
      <div className="absolute bottom-6 left-10 flex items-center space-x-6 transform -translate-y-1/2 ">
        <button
          onClick={handlePrev}
          className="bg-white p-3 rounded-full text-white"
        >
          <ChevronLeft size={25} color="black" />
        </button>
        <button
          onClick={handleNext}
          className="bg-white p-3 rounded-full text-white"
        >
          <ChevronRight size={25} color="black" />
        </button>
      </div>
    </section>
  );
}
