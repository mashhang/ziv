'use client';

import { useEffect, useState } from 'react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden px-6 md:px-12 lg:px-24 pt-24">
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
        <span className="text-[calc(16px+19.5vw)] font-display font-bold text-white opacity-[0.04] whitespace-nowrap leading-none">
          kuro
        </span>
      </div>

      <div className="relative z-10 max-w-5xl w-full">
        <p className={`text-text-muted text-xs font-medium uppercase tracking-[0.3em] mb-8 reveal ${isVisible ? 'is-visible' : ''}`}
           style={{ transitionDelay: '0.1s' }}>
          madebykuro — Graphic Artist & Video Editor
        </p>

        <h1 className={`font-display text-[clamp(38px,6vw,104px)] font-semibold leading-[1.1] text-white mb-8 reveal ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '0.25s' }}>
          Graphic design, video
          <span className="hidden sm:inline"> →</span>
          <br />
          <em className="text-stroke-gold not-italic">madebykuro</em>
        </h1>

        <p className={`text-text-muted text-lg max-w-xl leading-relaxed mb-12 reveal ${isVisible ? 'is-visible' : ''}`}
           style={{ transitionDelay: '0.4s' }}>
          Better made than borrowed, created from experience, not imitation.
        </p>

        <div className={`flex flex-wrap gap-4 reveal ${isVisible ? 'is-visible' : ''}`}
             style={{ transitionDelay: '0.55s' }}>
          <a href="#works" className="px-8 py-3 bg-gold text-obsidian hover:bg-gold-light font-semibold rounded transition-colors duration-300">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 border border-[#4a4a4a] text-white hover:border-gold hover:text-gold font-semibold rounded transition-all duration-300">
            Let's Connect
          </a>
        </div>
      </div>

      <div className={`absolute bottom-10 left-6 md:left-12 lg:left-24 reveal ${isVisible ? 'is-visible' : ''}`}
           style={{ transitionDelay: '0.8s' }}>
        <div className="flex flex-col items-center gap-3">
          <span className="text-text-muted text-xs font-medium tracking-widest uppercase leading-none">Scroll</span>
          <div className="w-[1px] h-8 bg-[#4a4a4a]"></div>
        </div>
      </div>
    </section>
  );
}
