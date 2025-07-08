'use client';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <h1 className="text-5xl font-extrabold tracking-tight">🚀 Coming Soon</h1>
        <p className="text-lg text-gray-300">We’re building something amazing at Cryption Verse.</p>
        <motion.div
          className="h-1 w-40 bg-purple-500 mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: '10rem' }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </motion.div>
    </main>
  );
}
