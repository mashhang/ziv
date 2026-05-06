'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      e.currentTarget.reset();
    }, 1000);
  }

  const socials = [
    { label: 'YouTube', href: 'https://youtube.com/@madebykuro', handle: '@madebykuro' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@madebykuro', handle: '@madebykuro' },
    { label: 'Instagram', href: 'https://www.instagram.com/madebykuro', handle: '@madebykuro' },
    { label: 'Instagram Alt', href: 'https://www.instagram.com/damn._.kuro', handle: '@damn._.kuro' },
    { label: 'CapCut', href: 'https://mobile.capcutshare.com/sv2/ZSHvK3132/', handle: 'Templates' },
    { label: 'Pinterest', href: 'https://pin.it/6z3iUMBK9', handle: 'Save' },
    { label: 'Threads', href: 'https://www.threads.com/@madebykuro', handle: '@madebykuro' },
    { label: 'Facebook', href: 'https://www.facebook.com/share/18Z3QGKXfW/', handle: 'Follow' },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className={`mb-20 reveal ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-[clamp(32px,5vw,68px)] font-semibold text-white">Let's Connect</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Socials - Left */}
          <div className={`lg:col-span-5 space-y-2 reveal-left ${isVisible ? 'is-visible' : ''}`}>
            <p className="text-text-muted mb-8 leading-relaxed">
              True creativity is not copied, but built and defined by those who dare to shape their own vision.
            </p>

            <div className="space-y-0.5">
              {socials.map((s, i) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-3 border-l-2 border-transparent hover:border-gold hover:bg-surface/30 transition-all duration-300 group reveal-left ${isVisible ? 'is-visible' : ''}`}
                  style={{ transitionDelay: isVisible ? `${i * 0.04}s` : '0s' }}
                >
                  <div className="font-display font-semibold text-gold group-hover:text-gold-light transition-colors">
                    {s.label}
                  </div>
                  <div className="text-text-muted text-sm group-hover:text-text-primary transition-colors">
                    {s.handle}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form - Right */}
          <div className={`lg:col-span-7 reveal-right ${isVisible ? 'is-visible' : ''}`}>
            <div className="bg-surface border border-[#2e2e2e] p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4 text-gold">✓</div>
                  <h3 className="font-display text-2xl font-semibold text-white mb-2">Thank you!</h3>
                  <p className="text-text-muted mb-6">
                    Your message has been received. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-gold hover:text-gold-light font-semibold transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-sm text-text-muted uppercase tracking-widest font-medium mb-4">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="input-minimal"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-text-muted uppercase tracking-widest font-medium mb-4">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="input-minimal"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-text-muted uppercase tracking-widest font-medium mb-4">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="input-minimal resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gold text-obsidian hover:bg-gold-light disabled:bg-gold-dim font-semibold py-3 px-4 rounded transition-all duration-300"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
