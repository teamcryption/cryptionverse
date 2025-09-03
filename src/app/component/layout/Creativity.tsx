"use client";
import { ArrowUp } from "lucide-react";
import Image from "next/image";

const Creativity = () => {
  return (
    <section className="container mx-auto bg-white text-black py-30  ">
      <div className=" container flex justify-between  mx-auto text-center mb-16">
        <h2 className="text-[66px] line-height-[0px] text-base/15 font-['Manrope'] font-semibold mb-4 text-left">
          Where creativity meets
          <br />
          success in our work
        </h2>
        <button className=" w-[204px] h-[48px] bg-black text-white rounded-[8px] font=[Poppins] flex items-center justify-center gap-2">
          <span> Start your project</span>
          <ArrowUp size={24} style={{ transform: "rotate(45deg)" }} />
        </button>
      </div>
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {/* Card 1 */}
        <div className="bg-transparent w-[384px] h-[464px] rounded-xl p-0">
          <div className="w-[384px] h-[384px] relative mb-4">
            <Image
              src="/creative/Image (4).png"
              alt="Image 1"
              layout="fill"
              objectFit="cover"
              className="rounded-xl w-[384px] h-[384px]"
            />
          </div>
          <p className="text-[14px] font-['manrope'] text-gray-500 mt-2">
            Design
          </p>
          <div className="flex items-center gap-2 justify-between w-full">
            <h3 className="text-[24px] font-['manrope'] font-[600] text-black">
              UX review presentations
            </h3>
            <ArrowUp size={24} style={{ transform: "rotate(45deg)" }} />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-transparent w-[384px] h-[464px] rounded-xl p-0">
          <div className="w-[384px] h-[384px] relative mb-4">
            <Image
              src="/creative/Image (5).png"
              alt="Image 2"
              layout="fill"
              objectFit="cover"
              className="rounded-xl w-[384px] h-[384px]"
            />
          </div>
          <p className="text-[14px] font-['manrope'] text-gray-500 mt-2">
            Product
          </p>
          <div className="flex items-center gap-2 justify-between w-full">
            <h3 className="text-[24px] font-['manrope'] font-[600] text-black">
              Migrating to Linear 101
            </h3>
            <ArrowUp size={24} style={{ transform: "rotate(45deg)" }} />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-transparent w-[384px] h-[464px] rounded-xl p-0">
          <div className="w-[384px] h-[384px] relative mb-4">
            <Image
              src="/creative/Image (6).png"
              alt="Image 3"
              layout="fill"
              objectFit="cover"
              className="rounded-xl w-[384px] h-[384px]"
            />
          </div>
          <p className="text-[14px] font-['manrope'] text-gray-500 mt-2">
            Software Engineering
          </p>
          <div className="flex items-center gap-2 justify-between w-full">
            <h3 className="text-[24px] font-['manrope'] font-[600] text-black">
              Building your API stack
            </h3>
            <ArrowUp size={24} style={{ transform: "rotate(45deg)" }} />
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-transparent w-[384px] h-[464px] rounded-xl p-0">
          <div className="w-[384px] h-[384px] relative mb-4">
            <Image
              src="/creative/Image (7).png"
              alt="Image 4"
              layout="fill"
              objectFit="cover"
              className="rounded-xl w-[384px] h-[384px]"
            />
          </div>
          <p className="text-[14px] font-['manrope'] text-gray-500 mt-2">
            Design
          </p>
          <div className="flex items-center gap-2 justify-between w-full">
            <h3 className="text-[24px] font-['manrope'] font-[600] text-black">
              Compas for Professional
            </h3>
            <ArrowUp size={24} style={{ transform: "rotate(45deg)" }} />
          </div>
        </div>
        {/* Card 4 */}
        <div className="bg-transparent w-[384px] h-[464px] rounded-xl p-0">
          <div className="w-[384px] h-[384px] relative mb-4">
            <Image
              src="/creative/Image (8).png"
              alt="Image 4"
              layout="fill"
              objectFit="cover"
              className="rounded-xl w-[384px] h-[384px]"
            />
          </div>
          <p className="text-[14px] font-['manrope'] text-gray-500 mt-2">
            Design
          </p>
          <div className="flex items-center gap-2 justify-between w-full">
            <h3 className="text-[24px] font-['manrope'] font-[600] text-black">
              Compas for Professional
            </h3>
            <ArrowUp size={24} style={{ transform: "rotate(45deg)" }} />
          </div>
        </div>

        <div className="bg-transparent w-[384px] h-[464px] rounded-xl p-0">
          <div className="w-[384px] h-[384px] relative mb-4">
            <Image
              src="/creative/Image (9).png"
              alt="Image 4"
              layout="fill"
              objectFit="cover"
              className="rounded-xl w-[384px] h-[384px]"
            />
          </div>
          <p className="text-[14px] font-['manrope'] text-gray-500 mt-2">
            Design
          </p>
          <div className="flex items-center gap-2 justify-between w-full">
            <h3 className="text-[24px] font-['manrope'] font-[600] text-black">
              Compas for Professional
            </h3>
            <ArrowUp size={24} style={{ transform: "rotate(45deg)" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creativity;
