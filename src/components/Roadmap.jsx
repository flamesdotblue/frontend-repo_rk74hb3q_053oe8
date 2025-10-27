import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    q: 'Q1',
    title: 'Testnet Alpha',
    points: ['Core protocol hardening', 'Explorer v1', 'Developer toolkits'],
    color: 'bg-fuchsia-300',
  },
  {
    q: 'Q2',
    title: 'Incentivized Testnet',
    points: ['Validator onboarding', 'Wallet integrations', 'Grants kickoff'],
    color: 'bg-teal-300',
  },
  {
    q: 'Q3',
    title: 'Mainnet Launch',
    points: ['Contracts live', 'Bridges online', 'Ecosystem partners'],
    color: 'bg-violet-300',
  },
  {
    q: 'Q4',
    title: 'Scale + Grow',
    points: ['Sharding upgrades', 'Global events', 'DAO proposals'],
    color: 'bg-amber-300',
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative w-full bg-gradient-to-br from-cyan-50 to-pink-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-6 inline-block rounded-xl border-4 border-black bg-white px-5 py-2 text-3xl font-extrabold text-black shadow-[6px_6px_0_#000]">
          Roadmap
        </h2>
        <p className="mb-6 max-w-2xl text-neutral-800">Swipe through the quarters — each milestone pops like a sticker.</p>

        <div className="relative">
          <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-2">
            {items.map((it, idx) => (
              <motion.div
                key={it.q}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -8, rotate: idx % 2 === 0 ? -1 : 1 }}
                className={`${it.color} min-w-[280px] snap-start rounded-3xl border-4 border-black p-5 shadow-[10px_10px_0_#000]`}
              >
                <div className="mb-2 inline-flex items-center gap-2">
                  <span className="rounded-full border-4 border-black bg-white px-3 py-1 text-sm font-extrabold text-black shadow-[4px_4px_0_#000]">
                    {it.q}
                  </span>
                  <span className="text-base font-extrabold text-black">{it.title}</span>
                </div>
                <ul className="ml-4 list-disc text-sm font-medium text-neutral-900">
                  {it.points.map((p) => (
                    <li key={p} className="py-1">{p}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
