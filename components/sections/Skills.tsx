'use client';

import { useEffect, useRef, useState } from 'react';

const tools = [
  { name: 'Canva', category: 'Design' },
  { name: 'Adobe Illustrator', category: 'Design' },
  { name: 'Adobe Photoshop', category: 'Design' },
  { name: 'CapCut', category: 'Video' },
  { name: 'Beat-Sync Editing', category: 'Video' },
  { name: 'Stop Motion', category: 'Video' },
  { name: 'Photography', category: 'Creative' },
  { name: 'Graphic Design', category: 'Creative' },
  { name: 'Promotional Design', category: 'Creative' },
  { name: 'Digital Design', category: 'Creative' },
  { name: 'Content Creation', category: 'Brand' },
  { name: 'Brand Identity', category: 'Brand' },
];

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className={`mb-20 reveal ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-[clamp(32px,5vw,68px)] font-semibold text-white">The Toolkit</h2>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {tools.map((tool, i) => (
            <li key={tool.name} className={`p-6 md:p-8 hover:bg-surface transition-all duration-300 group reveal border border-[#2e2e2e] ${isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: isVisible ? `${i * 0.04}s` : '0s' }}>
              <p className="text-text-faint text-xs uppercase tracking-widest font-medium mb-3">{tool.category}</p>
              <p className="font-display text-[clamp(16px,1.5vw,22px)] font-semibold text-white group-hover:text-gold transition-colors duration-300">
                {tool.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
