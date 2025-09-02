"use client";
import { ArrowUp } from "lucide-react";
// components/BrandIdentity.js
import Image from "next/image";

const BrandIdentity = () => {
  return (
    <>
      <div className="  bg-[#01A8E7] min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className=" text-5xl text-left w-full font-extrabold text-white font-['monore] mb-6">
            Brand Identity
          </h1>
          <div className=" w-full  bg-white rounded-lg shadow-xl flex flex-col lg:flex-row items-center justify-between">
            {/* Left Section */}

            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 p-8">
              <p className="text-lg text-gray-700 mb-4">
                Love the simplicity of the service and the prompt customer
                support. We can’t imagine working without it. Brand Identity
                design
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>Brand strategy</li>
                <li>Motion graphic design</li>
                <li>Graphic Design</li>
                <li>Startup branding</li>
              </ul>
              <button className="flex flex-row items-center gap-1 bg-black text-white px-4 py-3 rounded-sm hover:bg-blue-800 transition duration-300 font-[Poppins]">
                <span>Explore More</span>
                <ArrowUp size={25} style={{ transform: "rotate(45deg)" }} />
              </button>
            </div>

            {/* Right Section (Image) */}
            <div className="hidden lg:block w-1/3">
              <Image
                src="/images/Image (10).png" // Make sure the image is in the public/images directory
                alt="Brand Model"
                width={500}
                height={600}
                className="object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="  bg-[#ffffff] min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className=" text-5xl text-left w-full font-extrabold text-black font-['monore] mb-6">
            UI/UX Design
          </h1>
          <div className=" w-full  bg-white rounded-lg shadow-xl flex flex-col lg:flex-row items-center justify-between">
            {/* Left Section */}

            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 p-8">
              <p className="text-lg text-gray-700 mb-4">
                Love the simplicity of the service and the prompt customer
                support. We can’t imagine working without it. Brand Identity
                design
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>Brand strategy</li>
                <li>Motion graphic design</li>
                <li>Graphic Design</li>
                <li>Startup branding</li>
              </ul>
              <button className="flex flex-row items-center gap-1 bg-black text-white px-4 py-3 rounded-sm hover:bg-blue-800 transition duration-300 font-[Poppins]">
                <span>Explore More</span>
                <ArrowUp size={25} style={{ transform: "rotate(45deg)" }} />
              </button>
            </div>

            {/* Right Section (Image) */}
            <div className="hidden lg:block w-1/3">
              <Image
                src="/images/Image (13).png" // Make sure the image is in the public/images directory
                alt="Brand Model"
                width={500}
                height={600}
                className="object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="  bg-[#FF7536] min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className=" text-5xl text-left w-full font-extrabold text-black font-['monore] mb-6">
            Web Design
          </h1>
          <div className=" w-full  bg-white rounded-lg shadow-xl flex flex-col lg:flex-row items-center justify-between">
            {/* Left Section */}

            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 p-8">
              <p className="text-lg text-gray-700 mb-4">
                Love the simplicity of the service and the prompt customer
                support. We can’t imagine working without it. Brand Identity
                design
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>Brand strategy</li>
                <li>Motion graphic design</li>
                <li>Graphic Design</li>
                <li>Startup branding</li>
              </ul>
              <button className="flex flex-row items-center gap-1 bg-black text-white px-4 py-3 rounded-sm hover:bg-blue-800 transition duration-300 font-[Poppins]">
                <span>Explore More</span>
                <ArrowUp size={25} style={{ transform: "rotate(45deg)" }} />
              </button>
            </div>

            {/* Right Section (Image) */}
            <div className="hidden lg:block w-1/3">
              <Image
                src="/images/Image (12).png" // Make sure the image is in the public/images directory
                alt="Brand Model"
                width={500}
                height={600}
                className="object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="  bg-[#000000] min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className=" text-5xl text-left w-full font-extrabold text-white font-['monore] mb-6">
            Webflow
          </h1>
          <div className=" w-full  bg-white rounded-lg shadow-xl flex flex-col lg:flex-row items-center justify-between">
            {/* Left Section */}

            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 p-8">
              <p className="text-lg text-gray-700 mb-4">
                Love the simplicity of the service and the prompt customer
                support. We can’t imagine working without it. Brand Identity
                design
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>Brand strategy</li>
                <li>Motion graphic design</li>
                <li>Graphic Design</li>
                <li>Startup branding</li>
              </ul>
              <button className="flex flex-row items-center gap-1 bg-black text-white px-4 py-3 rounded-sm hover:bg-blue-800 transition duration-300 font-[Poppins]">
                <span>Explore More</span>
                <ArrowUp size={25} style={{ transform: "rotate(45deg)" }} />
              </button>
            </div>

            {/* Right Section (Image) */}
            <div className="hidden lg:block w-1/3">
              <Image
                src="/images/Image (11).png" // Make sure the image is in the public/images directory
                alt="Brand Model"
                width={500}
                height={600}
                className="object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandIdentity;
