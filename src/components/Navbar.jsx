import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-md bg-gradient-to-br from-orange-500 to-amber-700" />
          <span className="text-lg font-semibold tracking-tight">MiniBot</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#get-started" className="inline-flex items-center rounded-md bg-white text-black px-3 py-1.5 font-medium hover:bg-white/90 transition-colors">Get started</a>
        </nav>
        <button className="md:hidden inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md border border-white/10 hover:bg-white/5">Menu</button>
      </div>
    </header>
  );
}
