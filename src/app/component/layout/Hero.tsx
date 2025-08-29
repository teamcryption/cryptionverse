"use client";
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { CSSTransition } from "react-transition-group"; // Import CSSTransition

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(""); // State for the text being typed
  const textArray = ["builds", "Idiomgram", "Design"]; // Changeable words array
  const [email, setEmail] = useState(""); // State to store the email address

  // Array of Lottie animations corresponding to the text
  const lottieAnimations = {
    builds: require("../../../../public/lottie/builds.json"), // Replace with correct paths
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

  return (
    <section className="hero-section bg-white py-20 mt-25">
      <div className="container mx-auto px-8 text-center md:text-left flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-6xl font-bold mb-4 text-black">
            Decrypt ideas.
            <br /> Encrypt{" "}
            <CSSTransition
              in={true}
              timeout={1000} // Time for fade-in/fade-out transition
              classNames="fade"
              key={displayedText}
            >
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6a00ff] via-[#c042f5] to-[#ff7a18]">
                {displayedText}
              </span>
            </CSSTransition>
            .
          </h1>
          <p className="text-lg mb-8 text-black">
            Research → Strategy → UI/UX → Code. <br /> One unified team, from
            spark to shipped.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex justify-center md:justify-start gap-4"
          >
            <input
              type="email"
              placeholder="Add your email address"
              value={email}
              onChange={handleEmailChange}
              className="px-6 py-2 rounded-full text-black w-60 md:w-72"
              required
            />
            <button
              type="submit"
              className="bg-black text-white font-semibold px-6 py-4 rounded-se-lg rounded-ee-lg"
            >
              Get Started for Free
            </button>
          </form>
        </div>

        {/* Image Section with Lottie Animation */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-100 h-100 max-w-[400px] md:max-w-[600px]">
            {/* Lottie Animation with fade transition */}
            <CSSTransition
              in={true}
              timeout={2000} // Time for fade-in/fade-out transition
              classNames="fade"
              key={textIndex} // Change animation based on the textIndex
            >
              <Lottie
                animationData={lottieAnimations[textArray[textIndex]]}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            </CSSTransition>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
