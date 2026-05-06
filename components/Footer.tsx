export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-sm">
        <a href="#hero" className="text-text-muted hover:text-gold transition-colors flex items-center gap-2 group">
          <span className="inline-block group-hover:-translate-y-0.5 transition-transform duration-300">↑</span>
          Back to Top
        </a>

        <p className="text-text-muted">
          © {currentYear} madebykuro
        </p>

        <div className="flex gap-6">
          {[
            { label: 'YouTube', href: 'https://youtube.com/@madebykuro' },
            { label: 'TikTok', href: 'https://www.tiktok.com/@madebykuro' },
            { label: 'Instagram', href: 'https://www.instagram.com/madebykuro' },
            { label: 'Pinterest', href: 'https://pin.it/6z3iUMBK9' },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
               className="text-text-muted hover:text-gold transition-colors text-xs uppercase tracking-widest">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
