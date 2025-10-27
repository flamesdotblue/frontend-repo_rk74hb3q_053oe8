import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const FloatingShape = ({ color = '#FF6AD5', size = 80, rotate = 12, className = '' }) => (
  <motion.div
    aria-hidden
    className={`rounded-2xl border-4 border-black shadow-[6px_6px_0_#000] ${className}`}
    style={{ width: size, height: size, background: color }}
    initial={{ y: 10, rotate: -rotate, opacity: 0 }}
    animate={{ y: [10, -10, 10], rotate: rotate, opacity: 1 }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
  />
);

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-br from-pink-200 via-amber-200 to-cyan-200">
      {/* 3D Spline scene as full cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to boost contrast (won't block pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/60" />

      {/* Tiny grain for retro-pop feel */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-multiply"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.5) 1px, transparent 0)',
          backgroundSize: '6px 6px',
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-24 text-center">
        <motion.h1
          className="font-extrabold text-4xl leading-tight text-black drop-shadow-[2px_2px_0_#fff] sm:text-6xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          The Playful Web3 Network
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-lg font-medium text-neutral-800 sm:text-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
        >
          Fast, scalable, and delightfully tactile. Build on a chain that feels like a sticker book.
        </motion.p>

        {/* Highlighted phrases */}
        <motion.div
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <span className="rounded-full border-4 border-black bg-amber-300 px-4 py-2 text-sm font-bold shadow-[6px_6px_0_#000]">Zero Gas Spikes</span>
          <span className="rounded-full border-4 border-black bg-cyan-300 px-4 py-2 text-sm font-bold shadow-[6px_6px_0_#000]">Carbon Light</span>
          <span className="rounded-full border-4 border-black bg-pink-300 px-4 py-2 text-sm font-bold shadow-[6px_6px_0_#000]">Builder Friendly</span>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="#features"
            className="rounded-2xl border-4 border-black bg-black px-6 py-3 font-semibold text-white shadow-[6px_6px_0_#000] transition-transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-black/30"
          >
            Explore Features
          </a>
          <a
            href="#community"
            className="rounded-2xl border-4 border-black bg-white px-6 py-3 font-semibold text-black shadow-[6px_6px_0_#000] transition-transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-black/30"
          >
            Join Community
          </a>
        </motion.div>
      </div>

      {/* Floating geometric sticker shapes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <FloatingShape className="absolute left-4 top-24" color="#9EFFFA" size={90} rotate={-10} />
        <FloatingShape className="absolute right-8 top-40" color="#FFD166" size={70} rotate={8} />
        <FloatingShape className="absolute bottom-16 left-10" color="#FF6AD5" size={60} rotate={-6} />
      </div>
    </section>
  );
}
