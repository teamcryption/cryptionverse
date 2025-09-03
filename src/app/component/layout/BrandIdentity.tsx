"use client";
import { ArrowUp } from "lucide-react";
// components/BrandIdentity.js
import Image from "next/image";

const BrandIdentity = () => {
  return (
    <>
      <div className="  bg-[#01A8E7] h-[828px] flex flex-col items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className=" text-5xl text-left w-full font-extrabold text-white font-['monore] mb-6">
            Brand Identity
          </h1>
          <div className=" w-full  bg-white rounded-lg shadow-xl flex flex-col lg:flex-row items-center justify-between">
            {/* Left Section */}

            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 p-8">
              <p className="text-[24px] tracking-wide font-['Manrope'] text-gray-700  font-[500] mb-4">
                Love the simplicity of the service and the prompt customer
                support. We can’t imagine working without it. Brand Identity
                design
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700 font-[manrope] font-[700] text-[24px]">
                <li>Brand strategy</li>
                <li>Motion graphic design</li>
                <li>Graphic Design</li>
                <li>Startup branding</li>
              </ul>
              <button className="flex flex-row items-center justify-center gap-2  bg-black text-white px-4 py-3 rounded-sm hover:bg-blue-800 transition duration-300 font-[manrope] text-[16px] w-[185px] h-[56px]">
                <span>Explore More</span>
                <ArrowUp size={24} style={{ transform: "rotate(45deg)" }} />
              </button>
            </div>

            {/* Right Section (Image) */}
            <div className="hidden lg:block w-1/3">
              <Image
                src="/images/Image (10).png" // Make sure the image is in the public/images directory
                alt="Brand Model"
                width={500}
                height={600}
                className="object-cover rounded-sm w-[480px] h-[568px] min-h-[448px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="  bg-[#ffffff] h-[828px] flex flex-col items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className=" text-[82px] text-left w-full font-[800] text-black font-['manrope'] mb-4">
            UI/UX Design
          </h1>
          <div className=" w-full  bg-white rounded-lg shadow-xl flex flex-col lg:flex-row items-center justify-between">
            {/* Left Section */}

            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 px-10">
              <p className="text-[24px] tracking-wide font-['Manrope'] text-gray-700  font-[500] mb-4">
                Love the simplicity of the service and the prompt customer
                support. We can’t imagine working without it. Brand Identity
                design
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700 font-[manrope] font-[700] text-[24px]">
                <li>Brand strategy</li>
                <li>Motion graphic design</li>
                <li>Graphic Design</li>
                <li>Startup branding</li>
              </ul>
              <button className="flex flex-row items-center justify-center gap-2  bg-black text-white px-4 py-3 rounded-sm hover:bg-blue-800 transition duration-300 font-[manrope] text-[16px] w-[185px] h-[56px]">
                <span>Explore More</span>
                <ArrowUp size={24} style={{ transform: "rotate(45deg)" }} />
              </button>
            </div>

            {/* Right Section (Image) */}
            <div className="hidden lg:block w-1/3">
              <Image
                src="/images/Image (13).png" // Make sure the image is in the public/images directory
                alt="Brand Model"
                width={500}
                height={600}
                className="object-cover rounded-sm w-[480px] h-[568px] min-h-[448px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="  bg-[#FF7536] h-[828px] flex flex-col items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className=" text-[82px] text-left w-full font-[800] text-black font-['manrope'] mb-4">
            Web Design
          </h1>
          <div className=" w-full  bg-white rounded-lg shadow-xl flex flex-col lg:flex-row items-center justify-between">
            {/* Left Section */}

            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 p-8">
              <p className="text-[24px] tracking-wide font-['Manrope'] text-gray-700  font-[500] mb-4">
                Love the simplicity of the service and the prompt customer
                support. We can’t imagine working without it. Brand Identity
                design
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700 font-[manrope] font-[700] text-[24px]">
                <li>Brand strategy</li>
                <li>Motion graphic design</li>
                <li>Graphic Design</li>
                <li>Startup branding</li>
              </ul>
              <button className="flex flex-row items-center justify-center gap-2  bg-black text-white px-4 py-3 rounded-sm hover:bg-blue-800 transition duration-300 font-[manrope] text-[16px] w-[185px] h-[56px]">
                <span>Explore More</span>
                <ArrowUp size={24} style={{ transform: "rotate(45deg)" }} />
              </button>
            </div>

            {/* Right Section (Image) */}
            <div className="hidden lg:block w-1/3">
              <Image
                src="/images/Image (12).png" // Make sure the image is in the public/images directory
                alt="Brand Model"
                width={500}
                height={600}
                className="object-cover rounded-sm w-[480px] h-[568px] min-h-[448px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="  bg-[#000000] h-[828px] flex flex-col items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className=" text-[82px] text-left w-full font-[800] text-white font-['manrope'] mb-4">
            Webflow
          </h1>
          <div className=" w-full  bg-white rounded-lg shadow-xl flex flex-col lg:flex-row items-center justify-between">
            {/* Left Section */}

            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 p-8">
              <p className="text-[24px] tracking-wide font-['Manrope'] text-gray-700  font-[500] mb-4">
                Love the simplicity of the service and the prompt customer
                support. We can’t imagine working without it. Brand Identity
                design
              </p>
              <ul className="list-disc pl-5 mb-6 text-gray-700 font-[manrope] font-[700] text-[24px]">
                <li>Brand strategy</li>
                <li>Motion graphic design</li>
                <li>Graphic Design</li>
                <li>Startup branding</li>
              </ul>
              <button className="flex flex-row items-center justify-center gap-2  bg-black text-white px-4 py-3 rounded-sm hover:bg-blue-800 transition duration-300 font-[manrope] text-[16px] w-[185px] h-[56px]">
                <span>Explore More</span>
                <ArrowUp size={24} style={{ transform: "rotate(45deg)" }} />
              </button>
            </div>

            {/* Right Section (Image) */}
            <div className="hidden lg:block w-1/3">
              <Image
                src="/images/Image (11).png" // Make sure the image is in the public/images directory
                alt="Brand Model"
                width={500}
                height={600}
                className="object-cover rounded-sm w-[480px] h-[568px] min-h-[448px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandIdentity;
