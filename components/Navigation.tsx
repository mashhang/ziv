'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const links = [
    { href: '#about', label: 'About', num: '01' },
    { href: '#works', label: 'Works', num: '02' },
    { href: '#skills', label: 'Skills', num: '03' },
    { href: '#contact', label: 'Contact', num: '04' },
  ];

  const socials = [
    { label: 'YouTube', href: 'https://youtube.com/@madebykuro' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@madebykuro' },
    { label: 'Instagram', href: 'https://www.instagram.com/madebykuro' },
    { label: 'Threads', href: 'https://www.threads.com/@madebykuro' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-8 flex justify-between items-center">
        <Link href="#hero" onClick={() => setIsOpen(false)}
              className="font-display text-lg font-bold text-white hover:text-gold transition-colors">
          madebykuro
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 text-white hover:text-gold transition-colors"
          aria-label="Toggle menu"
        >
          <span className="text-sm font-medium tracking-widest uppercase">
            {isOpen ? 'Close' : 'Menu'}
          </span>
          <div className="flex flex-col gap-1.5 w-6 h-5 justify-center">
            <span className={`block h-[2px] bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[11px]' : ''}`}></span>
            <span className={`block h-[2px] bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-[2px] bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[11px]' : ''}`}></span>
          </div>
        </button>
      </header>

      <div className={`fixed inset-0 z-40 bg-obsidian transition-all duration-500 flex flex-col justify-center px-8 md:px-16 lg:px-24 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="text-[23.5vw] font-display font-bold text-white opacity-[0.04] whitespace-nowrap select-none leading-none">
            Explore
          </span>
        </div>

        <nav className="relative z-10">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`group flex items-baseline gap-4 py-6 border-t border-[#2a2a2a] text-[#818181] hover:text-white transition-all duration-300 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: isOpen ? `${i * 0.05 + 0.1}s` : '0s' }}
            >
              <span className="text-xs opacity-40 font-mono">{link.num}</span>
              <span className="text-[clamp(36px,5vw,64px)] font-display font-semibold leading-none group-hover:text-gold transition-colors">
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        <div className={`relative z-10 mt-20 flex gap-8 transition-all duration-500 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: isOpen ? '0.4s' : '0s' }}>
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
               className="text-[#818181] hover:text-gold text-xs transition-colors uppercase tracking-widest font-medium">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
