import React from 'react';
import { motion } from 'framer-motion';

export default function CommunityCTA() {
  return (
    <section id="community" className="relative w-full bg-gradient-to-tr from-lime-100 via-white to-rose-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Join community */}
          <motion.a
            href="#join"
            whileHover={{ y: -6, scale: 1.02 }}
            className="rounded-3xl border-4 border-black bg-lime-300 p-6 shadow-[10px_10px_0_#000] focus:outline-none focus:ring-4 focus:ring-black/30"
          >
            <h3 className="text-2xl font-extrabold text-black">Join the Community</h3>
            <p className="mt-2 text-sm font-medium text-neutral-900">Hop into chats, events, and town halls around the globe.</p>
            <div className="mt-4 inline-block rounded-xl border-4 border-black bg-black px-4 py-2 text-sm font-bold text-white shadow-[6px_6px_0_#000]">
              Join Now
            </div>
          </motion.a>

          {/* Create wallet */}
          <motion.a
            href="#wallet"
            whileHover={{ y: -6, scale: 1.02 }}
            className="rounded-3xl border-4 border-black bg-sky-300 p-6 shadow-[10px_10px_0_#000] focus:outline-none focus:ring-4 focus:ring-black/30"
          >
            <h3 className="text-2xl font-extrabold text-black">Create a Wallet</h3>
            <p className="mt-2 text-sm font-medium text-neutral-900">Spin up your first address and start exploring dApps.</p>
            <div className="mt-4 inline-block rounded-xl border-4 border-black bg-white px-4 py-2 text-sm font-bold text-black shadow-[6px_6px_0_#000]">
              Get Wallet
            </div>
          </motion.a>

          {/* Build */}
          <motion.a
            href="#build"
            whileHover={{ y: -6, scale: 1.02 }}
            className="rounded-3xl border-4 border-black bg-rose-300 p-6 shadow-[10px_10px_0_#000] focus:outline-none focus:ring-4 focus:ring-black/30"
          >
            <h3 className="text-2xl font-extrabold text-black">Build Something Fun</h3>
            <p className="mt-2 text-sm font-medium text-neutral-900">Tooling, templates, and grants to get your idea live.</p>
            <div className="mt-4 inline-block rounded-xl border-4 border-black bg-black px-4 py-2 text-sm font-bold text-white shadow-[6px_6px_0_#000]">
              Start Building
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
