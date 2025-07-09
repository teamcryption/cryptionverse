"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white p-6">
      {/* Animated Logo / Title */}
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🚀 Cryption Verse
      </motion.h1>

      {/* Subtitle Animation */}
      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-center mt-4 text-gray-300 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Building intelligent web & software experiences, driven by automation, creativity & next-gen technology.
      </motion.p>

      {/* Glowing Loading Bar */}
      <motion.div
        className="h-2 w-60 sm:w-80 md:w-96 bg-purple-500 rounded-full mt-10 shadow-lg shadow-purple-500/40"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, delay: 1 }}
      />

      {/* Additional Info Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {[
          {
            title: "Creative Solutions",
            desc: "Websites, apps & digital experiences crafted with passion and innovation.",
          },
          {
            title: "AI-Powered Tech",
            desc: "We integrate automation and intelligence to deliver smart results.",
          },
          {
            title: "Future Ready",
            desc: "Leveraging bleeding-edge tech to future-proof your business.",
          },
        ].map((card, idx) => (
          <motion.div
            key={idx}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 hover:scale-105 transition-transform duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-xl font-semibold text-purple-300 mb-2">{card.title}</h3>
            <p className="text-sm text-gray-300">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Message */}
      <motion.p
        className="mt-16 text-sm text-gray-400 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        © {new Date().getFullYear()} Cryption Verse. All rights reserved.
      </motion.p>
    </main>
  );
}
