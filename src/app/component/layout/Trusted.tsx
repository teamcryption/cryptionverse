"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Make sure to import the swiper styles

const TrustedSection = () => {
  return (
    <section className="trusted-section py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl text-gray-400 font-semibold mb-6">
          Partners Who Achieved{" "}
          <span className="text-purple-600">Business</span> Success with Our
          <br />
          Custom Solutions
        </h2>
        <p className="text-lg mb-10 text-gray-600">
          Trusted by Industry Leaders
        </p>

        <Swiper
          spaceBetween={20} // Space between slides
          slidesPerView={6} // Number of slides to show at once
          loop={true} // Enable infinite looping
          autoplay={{
            delay: 1000, // Auto-slide every 2 seconds
            disableOnInteraction: false, // Continue autoplay after interaction
          }}
          breakpoints={{
            640: { slidesPerView: 2 }, // 2 slides on small screens
            768: { slidesPerView: 3 }, // 3 slides on medium screens
            1024: { slidesPerView: 7 }, // 4 slides on large screens
          }}
          className="swiper-container"
        >
          <SwiperSlide>
            <img
              src="/pertner/apple.png"
              alt="Statepay"
              className="w-full max-w-[60px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/pertner/google.png"
              alt="Fastpay"
              className="w-full max-w-[60px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/pertner/brand-asset-management.png"
              alt="Sumer"
              className="w-full max-w-[60px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/pertner/communication.png"
              alt="MePayer"
              className="w-full max-w-[60px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/pertner/logo.png"
              alt="Crypto Invest Hub"
              className="w-full max-w-[60px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/pertner/slack.png"
              alt="Digit"
              className="w-full max-w-[60px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="pertner/spotify.png"
              alt="Tether.ba"
              className="w-full max-w-[60px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/pertner/brand-asset-management.png"
              alt="Sumer"
              className="w-full max-w-[60px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/pertner/communication.png"
              alt="MePayer"
              className="w-full max-w-[60px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/pertner/logo.png"
              alt="Crypto Invest Hub"
              className="w-full max-w-[60px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/pertner/slack.png"
              alt="Digit"
              className="w-full max-w-[60px]"
            />
          </SwiperSlide>
        </Swiper>

        <p className="mt-10">
          <a
            href="/get-started"
            className="bg-purple-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-purple-700 transition-colors"
          >
            Get Started Today
          </a>
        </p>
      </div>
    </section>
  );
};

export default TrustedSection;
