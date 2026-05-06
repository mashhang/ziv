'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const works = [
  // Graphic Arts
  { id: 1, category: 'Graphic Arts', title: 'Amen Hand Vexel', type: 'image', src: '/Graphic%20Arts/Amen%20Hand%20Vexel.jpg', width: 1080, height: 1080 },
  { id: 2, category: 'Graphic Arts', title: 'Angelica Ado', type: 'image', src: '/Graphic%20Arts/Angelica%20Ado.jpg', width: 1080, height: 1440 },
  // Promotional Design
  { id: 3, category: 'Promotional', title: 'Arabica Coffee Pack', type: 'image', src: '/Promotional/BRANDS/Arabica%20Coffee%20Beans%20Pack%201.png', width: 1080, height: 1350 },
  { id: 4, category: 'Promotional', title: 'Design Project', type: 'image', src: '/Promotional/PROJECTS/236444066_353822106454985_7961653053203269831_n.png', width: 1080, height: 1350 },
  // Visual Identity
  { id: 5, category: 'Visual Identity', title: 'Kuro - Gaze', type: 'image', src: '/Promotional/VISUAL%20IDENTITY/Kuro%20Song%20Cover%20Gaze.jpeg', width: 1080, height: 1080 },
  // Video Edits
  { id: 6, category: 'Video Edit', title: 'DTMG, Al James', type: 'video', src: '/Videos/DTMG%2C%20Al%20James%20-%20madebykuro.mp4', width: 1080, height: 1920 },
  { id: 7, category: 'Video Edit', title: 'Sacred Heart by Hev Abi', type: 'video', src: '/Videos/Sacred%20Heart%20by%20Hev%20Abi%20-%20madebykuro.mp4', width: 1080, height: 1920 },
  // Photography
  { id: 8, category: 'Photography', title: 'Street Shot', type: 'image', src: '/Photography/IMG_20250728_232321_445.webp', width: 1080, height: 1440 },
];

export function Projects() {
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
    <section id="works" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: 'rgb(255 255 255 / 3%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className={`flex justify-between items-end mb-20 reveal ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-[clamp(32px,5vw,68px)] font-semibold text-white">Works</h2>
          <a href="https://www.instagram.com/madebykuro" target="_blank" rel="noopener noreferrer"
             className="hidden md:block text-text-muted hover:text-gold transition-colors text-sm uppercase tracking-widest font-medium link-underline">
            View all →
          </a>
        </div>

        <div className="works-grid" ref={sectionRef}>
          {works.map((work, i) => (
            <div key={work.id} className={`works-item group reveal ${isVisible ? 'is-visible' : ''}`}
                 style={{ transitionDelay: isVisible ? `${i * 0.06}s` : '0s' }}>
              <div className="overflow-hidden border border-[#2e2e2e]">
                <div className="works-image-inner w-full">
                  {work.type === 'video' ? (
                    <video
                      src={work.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-auto object-cover"
                      style={{ display: 'block' }}
                    />
                  ) : (
                    <Image
                      src={work.src}
                      alt={work.title}
                      width={work.width}
                      height={work.height}
                      className="w-full h-auto"
                      style={{ display: 'block' }}
                    />
                  )}
                </div>
              </div>
              <div className="pt-6">
                <p className="text-text-faint text-xs uppercase tracking-widest font-medium mb-2">{work.category}</p>
                <h3 className="font-display text-[clamp(18px,2vw,28px)] font-semibold text-white group-hover:text-gold transition-colors duration-300 link-underline">
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 md:hidden reveal ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
          <a href="https://www.instagram.com/madebykuro" target="_blank" rel="noopener noreferrer"
             className="text-text-muted hover:text-gold text-sm uppercase tracking-widest font-medium transition-colors">
            View all on Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
