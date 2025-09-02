"use client";
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { CSSTransition } from "react-transition-group"; // Import CSSTransition
import {
  ArrowUp,
  Code,
  Code2,
  GitGraphIcon,
  Lightbulb,
  Palette,
} from "lucide-react";

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(""); // State for the text being typed
  const [animationKey, setAnimationKey] = useState("builds"); // Initial animation key
  const textArray = ["builds", "Idiomgram", "Design"] as const; // Changeable words array
  const [email, setEmail] = useState(""); // State to store the email address

  // Array of Lottie animations corresponding to the text
  const lottieAnimations: Record<(typeof textArray)[number], any> = {
    builds: require("../../../../public/lottie/builds.json"),
    Idiomgram: require("../../../../public/lottie/Idiomgram.json"),
    Design: require("../../../../public/lottie/Design.json"),
  };

  useEffect(() => {
    let typingTimer: NodeJS.Timeout;
    let currentText = ""; // To accumulate the typed text
    let currentWordIndex = 0;

    const typeText = () => {
      if (currentWordIndex < textArray[textIndex].length) {
        currentText += textArray[textIndex].charAt(currentWordIndex);
        setDisplayedText(currentText);
        currentWordIndex++;
      } else {
        clearInterval(typingTimer);
        setTimeout(() => {
          setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
          currentText = ""; // Reset the text for the next word
          currentWordIndex = 0;
        }, 3000); // Wait for 1 second before changing the word
      }
    };

    typingTimer = setInterval(typeText, 100); // Typing speed set to 100ms per character

    return () => {
      clearInterval(typingTimer);
    };
  }, [textIndex]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending the email address to the server)
    console.log("Email submitted:", email);
  };

  const handleButtonClick = (animationName: string) => {
    setAnimationKey(animationName);
  };

  return (
    <section className="hero-section bg-white pb-10 ">
      <div className="container mx-auto px-8 text-center md:text-left flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-5xl md:text-[45px] font-[900] font-['roboto'] mb-4 text-black">
            We turn abstract ideas into
            <br /> tangible, high-impact <br />
            realities for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
              Company{" "}
            </span>
          </h1>
          <p className="text-[16px] mb-8 text-[#697586]">
            A focused product squad for discovery → design → delivery.
            <br />
            Clear communication, fast iterations.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex justify-center md:justify-start gap-4"
          >
            <button className="flex items-center gap-2 rounded-lg  bg-black px-4 py-4 font-semibold text-white transition-colors hover:border-indigo-600 hover:bg-gray-600 hover:text-white">
              <span>Schedule a call</span>
              <ArrowUp style={{ transform: "rotate(45deg)" }} />
            </button>
          </form>

          {/* Button to change animation */}
          <div className="mt-8 flex justify-start gap-4">
            <button
              onClick={() => handleButtonClick("Idiomgram")}
              className={` w-[187px] h-[138px] py-2 px-6  ${
                animationKey === "Idiomgram"
                  ? "bg-black text-white "
                  : "bg-black text-white"
              } text-left  rounded-[16px]`}
            >
              <div className="flex items-center gap-2">
                <Lightbulb color="white" size={30} />
                <span className="font-[700] text-[16px]">Ideation</span>
              </div>
              <p className="text-[12px]  line-height-[19px]  font-[400] text-white font-['SF Pro] mt-2">
                Discover the opportunity and shape the value proposition with
                fast discovery sprints.
              </p>
            </button>
            <button
              onClick={() => handleButtonClick("Design")}
              className=" w-[187px] h-[138px] py-2 px-6 bg-black text-left text-white rounded-[16px]"
            >
              <div className="flex items-center gap-2">
                <Palette color="white" size={30} />
                <span className="font-[700] text-[16px]">Design</span>
              </div>
              <p className="text-[12px]  line-height-[19px]  font-[400] text-white font-['SF Pro'] mt-2">
                Discover the opportunity and shape the value proposition with
                fast discovery sprints.
              </p>
            </button>
            <button
              onClick={() => handleButtonClick("builds")}
              className=" w-[187px] h-[138px] py-2 px-6 bg-black text-left text-white rounded-[16px]"
            >
              <div className="flex items-center gap-2">
                <Code2 color="white" size={30} />
                <span className="font-[700] text-[16px]">Development</span>
              </div>
              <p className="text-[12px] line-height-[19px] font-[400] text-white font-['SF Pro'] mt-2">
                Ship reliable software with CI/CD, quality gates, and
                observability build-in.
              </p>
            </button>
          </div>
        </div>

        {/* Image Section with Lottie Animation */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full h-full max-w-[400px] md:max-w-[600px]">
            {/* Lottie Animation with fade transition */}
            <CSSTransition
              in={true}
              timeout={2000} // Time for fade-in/fade-out transition
              classNames="fade"
              key={animationKey} // Change animation based on the animationKey
            >
              <Lottie
                animationData={lottieAnimations[animationKey]}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            </CSSTransition>
          </div>
        </div>
      </div>
      {/* <div className="container pt-12 mx-auto px-8 ">
        <img src={"/images/Content.png"} alt="Content" />
      </div> */}
    </section>
  );
};

export default HeroSection;
