"use client";
import Image from "next/image";

const AwardSection = () => {
  return (
    <div className="bg-white container mx-auto px-4 py-8">
      <div className="flex  items-center justify-between p-6 bg-white  rounded-md">
        <div className="flex flex-col justify-center items-start">
          <div className="flex flex-col items-center space-x-2">
            <span className="text-7xl font-bold text-gray-400">4.9</span>
            <br />
            <div className="flex space-x-1 text-red-500">
              <span className="text-[#EF4444]">⭐⭐⭐⭐⭐</span>
            </div>
          </div>
          <p className="mt-2 text-gray-600 text-[41px]">
            Akta Award has been given for our
            <br /> outstanding client satisfaction.
          </p>
          <div className="mt-4 text-[74px] font-semibold text-gradient">
            <span className="text-black">Our</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
              Awards
            </span>
          </div>
          <div className="mt-2 text-[22px] text-gray-500">
            <p>Clutch, Upwork, Fiverr</p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/images/Image (14).png"
            alt="Akta Award Logo"
            width={100}
            height={100}
            className="rounded-lg  w-[460px] h-[430px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AwardSection;
