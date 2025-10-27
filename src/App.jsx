import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import CommunityCTA from './components/CommunityCTA';

export default function App() {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-white font-sans text-black">
      <Hero />
      <Features />
      <Roadmap />
      <CommunityCTA />

      {/* Footer with colorful accent bar */}
      <footer className="relative w-full bg-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-6 h-2 w-full rounded-full bg-gradient-to-r from-pink-400 via-amber-400 to-cyan-400" />
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm font-semibold text-neutral-900">
              © {new Date().getFullYear()} Playful Web3 — built for builders.
            </p>
            <nav className="flex flex-wrap items-center justify-center gap-4">
              <a href="#features" className="rounded-md px-2 py-1 text-sm font-bold hover:underline">
                Features
              </a>
              <a href="#roadmap" className="rounded-md px-2 py-1 text-sm font-bold hover:underline">
                Roadmap
              </a>
              <a href="#community" className="rounded-md px-2 py-1 text-sm font-bold hover:underline">
                Community
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
