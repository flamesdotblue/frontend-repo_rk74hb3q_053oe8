import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Wallet, Globe } from 'lucide-react';

const features = [
  {
    title: 'Blazing Throughput',
    text: 'Low-latency transactions with finality that feels instant.',
    color: 'bg-pink-300',
    border: 'border-pink-500',
    icon: Rocket,
  },
  {
    title: 'Secure by Design',
    text: 'Rigorous security and predictable fees for peace of mind.',
    color: 'bg-amber-300',
    border: 'border-amber-500',
    icon: Shield,
  },
  {
    title: 'Wallet Native',
    text: 'Seamless onboarding flows designed for everyone.',
    color: 'bg-cyan-300',
    border: 'border-cyan-500',
    icon: Wallet,
  },
  {
    title: 'Open & Global',
    text: 'Permissionless, interoperable, and built for the world.',
    color: 'bg-lime-300',
    border: 'border-lime-500',
    icon: Globe,
  },
];

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i) => ({ y: 0, opacity: 1, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-gradient-to-br from-white to-sky-50 py-20">
      <div className="absolute -top-10 left-0 right-0 mx-auto h-20 max-w-5xl rounded-full bg-gradient-to-r from-pink-300/40 via-amber-300/40 to-cyan-300/40 blur-2xl" />

      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-6 inline-block rounded-xl border-4 border-black bg-white px-5 py-2 text-3xl font-extrabold text-black shadow-[6px_6px_0_#000]">
          Features
        </h2>
        <p className="mb-10 max-w-2xl text-neutral-800">Every block is a sticker. Each card pops with its own color, icon, and motion.</p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group relative rounded-3xl border-4 border-black ${f.color} p-5 shadow-[10px_10px_0_#000] transition-transform`}
            >
              <div className={`absolute -right-2 -top-2 h-6 w-6 rotate-12 rounded-md border-4 ${f.border} bg-white`} />
              <div className="mb-4 inline-flex items-center justify-center rounded-2xl border-4 border-black bg-white p-3 shadow-[6px_6px_0_#000]">
                <f.icon className="h-6 w-6 text-black" aria-hidden />
              </div>
              <h3 className="text-xl font-extrabold text-black">{f.title}</h3>
              <p className="mt-2 text-sm font-medium text-neutral-900">{f.text}</p>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-4 ring-transparent transition group-hover:ring-black/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
