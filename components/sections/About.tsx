'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  {
    title: 'Professional Work',
    content: 'Shaped by fast-paced creative environments where precision and strong visual communication matter. Experienced with Canva, Adobe Illustrator, and Adobe Photoshop — creating designs that require consistency and clarity.',
  },
  {
    title: 'Personal Brand',
    content: 'Building madebykuro (also known as damn._.kuro) as a space to explore creativity more freely. The brand reflects a creative vision built from experience, not imitation.',
  },
  {
    title: 'Content Creator',
    content: 'Active on Instagram, TikTok, and YouTube sharing reels and video edits inspired by Filipino hip-hop and OPM. Also capturing places and moments through photography with an intentional eye.',
  },
  {
    title: 'CapCut Templates',
    content: 'Specialized in beat-sync editing and stop motion, creating dynamic rhythm-driven CapCut templates that are easy to use and remix. Balancing motion, music, and visual flow to inspire other creators.',
  },
];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className={`lg:col-span-4 reveal-left ${isVisible ? 'is-visible' : ''}`}>
            <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">— About</p>
            <h2 className="font-display text-[clamp(32px,4vw,52px)] font-semibold text-white leading-tight mb-8">
              Behind the Craft
            </h2>
            <p className="text-text-muted leading-relaxed">
              A graphic artist and video editor building creative work through both professional design and a personal brand — madebykuro.
            </p>
          </div>

          <div className={`lg:col-span-8 reveal-right ${isVisible ? 'is-visible' : ''}`}>
            {services.map((item, i) => (
              <div key={i} className="border-t border-[#2e2e2e]">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left py-8 flex justify-between items-start group hover:text-gold transition-colors duration-300"
                >
                  <span className="font-display text-[clamp(20px,2.5vw,32px)] font-semibold text-white group-hover:text-gold transition-colors duration-300 leading-tight pr-4">
                    {item.title}
                  </span>
                  <span className="text-2xl text-text-muted group-hover:text-gold transition-colors ml-4 shrink-0 pt-0.5">
                    {openIndex === i ? '−' : '+'}
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-400 ${openIndex === i ? 'max-h-48 pb-8' : 'max-h-0'}`}>
                  <p className="text-text-muted leading-relaxed max-w-2xl">{item.content}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-[#2e2e2e]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
