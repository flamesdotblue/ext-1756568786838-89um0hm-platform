import React from 'react';
import { Rocket, Cpu, Shield } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Instant integration',
    desc: 'Drop the Spline canvas into your hero and get an interactive 3D robot with zero heavy setup.',
  },
  {
    icon: Cpu,
    title: 'Lightweight & responsive',
    desc: 'Optimized layout with responsive sizing to keep motion smooth across devices.',
  },
  {
    icon: Shield,
    title: 'Accessible by design',
    desc: 'Clear contrast, keyboard focus on controls, and unobtrusive overlays that never block interaction.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 border-t border-white/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Why this mini robot</h2>
          <p className="mt-3 text-white/70">Built for modern product sites: playful, technical, and minimal—without getting in the way.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center size-10 rounded-lg bg-gradient-to-br from-orange-500/80 to-amber-600/80 text-black">
                  <Icon className="size-5" />
                </span>
                <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
