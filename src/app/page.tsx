'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-purple-950 text-white px-4">
      
      {/* Logo Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/cryption%20Verse%20logo.png"
          alt="Cryption Verse Logo"
          width={120}
          height={120}
          className="mb-6"
        />
      </motion.div>

      {/* Main Title */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold tracking-tight text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        🚀 Coming Soon
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg md:text-xl text-gray-300 mt-4 text-center max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        We&apos;re building something revolutionary at <span className="text-purple-400 font-semibold">Cryption Verse</span> — combining software, AI, and marketing innovation.
      </motion.p>

      {/* Animated Bar */}
      <motion.div
        className="mt-10 h-1 w-0 bg-purple-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: '80%' }}
        transition={{ duration: 1.5, delay: 1 }}
      />

      {/* Footer */}
      <motion.p
        className="mt-16 text-sm text-gray-500 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        © {new Date().getFullYear()} Cryption Verse. All rights reserved.
      </motion.p>
    </main>
  );
}
