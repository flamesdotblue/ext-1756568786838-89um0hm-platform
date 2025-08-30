import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_60%_at_10%_10%,rgba(255,153,0,0.15),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center py-14 md:py-20">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-xs font-medium rounded-full border border-white/10 bg-white/5 px-3 py-1 w-fit">
              <span className="size-1.5 rounded-full bg-orange-500" />
              Friendly robotics in your browser
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              Say hello to your playful mini robot
            </h1>
            <p className="text-white/70 text-base sm:text-lg max-w-prose">
              A minimalist, interactive 3D companion with subtle orange glow. Explore, play, and integrate into your modern web experiences.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a id="get-started" href="#features" className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors">Explore features</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/5 transition-colors">Contact us</a>
            </div>
          </div>
          <div className="relative h-[55vh] sm:h-[60vh] md:h-[70vh] rounded-xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
