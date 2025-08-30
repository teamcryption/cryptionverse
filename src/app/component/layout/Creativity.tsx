"use client";
import { ArrowUp } from "lucide-react";
import Image from "next/image";

const Creativity = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className=" container flex justify-between  mx-auto text-center mb-16">
        <h2 className="text-5xl font-[Manrope] font-semibold mb-4">
          Where creativity meets
          <br />
          success in our work
        </h2>
        <button className=" w-[150px] h-[50px] bg-white text-black rounded-lg font=[Poppins] flex items-center justify-center">
          <span> our Customers</span>
          <ArrowUp size={25} style={{ transform: "rotate(45deg)" }} />
        </button>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {/* Card 1 */}
        <div className="bg-transparent w-[384px] h-[464px] rounded-xl p-6">
          <div className="w-[384px] h-[384px] relative mb-4">
            <Image
              src="/creative/Image (4).png"
              alt="Image 1"
              layout="fill"
              objectFit="cover"
              className="rounded-xl w-[384px] h-[384px]"
            />
          </div>
          <p className="text-sm text-gray-400 mt-2">Design</p>
          <h3 className="text-xl font-semibold">UX review presentations</h3>
        </div>

        {/* Card 2 */}
        <div className="bg-transparent w-[384px] h-[464px] rounded-xl p-6">
          <div className="w-[384px] h-[384px] relative mb-4">
            <Image
              src="/creative/Image (5).png"
              alt="Image 2"
              layout="fill"
              objectFit="cover"
              className="rounded-xl w-[384px] h-[384px]"
            />
          </div>
          <p className="text-sm text-gray-400 mt-2">Product</p>
          <h3 className="text-xl font-semibold">Migrating to Linear 101</h3>
        </div>

        {/* Card 3 */}
        <div className="bg-transparent w-[384px] h-[464px] rounded-xl p-6">
          <div className="w-[384px] h-[384px] relative mb-4">
            <Image
              src="/creative/Image (6).png"
              alt="Image 3"
              layout="fill"
              objectFit="cover"
              className="rounded-xl w-[384px] h-[384px]"
            />
          </div>
          <p className="text-sm text-gray-400 mt-2">Software Engineering</p>
          <h3 className="text-xl font-semibold">Building your API stack</h3>
        </div>

        {/* Card 4 */}
        <div className="bg-transparent w-[384px] h-[464px] rounded-xl p-6">
          <div className="w-[384px] h-[384px] relative mb-4">
            <Image
              src="/creative/Image (7).png"
              alt="Image 4"
              layout="fill"
              objectFit="cover"
              className="rounded-xl w-[384px] h-[384px]"
            />
          </div>
          <p className="text-sm text-gray-400 mt-2">Design</p>
          <h3 className="text-xl font-semibold">Compas for Professional</h3>
        </div>
        {/* Card 4 */}
        <div className="bg-transparent w-[384px] h-[464px] rounded-xl p-6">
          <div className="w-[384px] h-[384px] relative mb-4">
            <Image
              src="/creative/Image (8).png"
              alt="Image 4"
              layout="fill"
              objectFit="cover"
              className="rounded-xl w-[384px] h-[384px]"
            />
          </div>
          <p className="text-sm text-gray-400 mt-2">Design</p>
          <h3 className="text-xl font-semibold">Compas for Professional</h3>
        </div>

        <div className="bg-transparent w-[384px] h-[464px] rounded-xl p-6">
          <div className="w-[384px] h-[384px] relative mb-4">
            <Image
              src="/creative/Image (9).png"
              alt="Image 4"
              layout="fill"
              objectFit="cover"
              className="rounded-xl w-[384px] h-[384px]"
            />
          </div>
          <p className="text-sm text-gray-400 mt-2">Design</p>
          <h3 className="text-xl font-semibold">Compas for Professional</h3>
        </div>
      </div>
    </section>
  );
};

export default Creativity;
