'use client';

import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Marquee } from '@/components/sections/Marquee';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-obsidian">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Marquee />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
