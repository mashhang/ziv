export function Marquee() {
  const textA = "Graphic Design → Video Editing → CapCut Templates → Photography → Beat-Sync → Stop Motion → ";
  const textB = "madebykuro → damn._.kuro → Filipino Artist → OPM → Hip-Hop → ";

  return (
    <section className="py-12 overflow-hidden" style={{ background: 'rgb(255 255 255 / 3%)' }}>
      <div className="overflow-hidden mb-6">
        <div className="inline-block animate-marquee whitespace-nowrap">
          <span className="text-[clamp(24px,4vw,64px)] font-display font-semibold text-text-muted pr-8">
            {textA}
          </span>
          <span className="text-[clamp(24px,4vw,64px)] font-display font-semibold text-text-muted pr-8" aria-hidden="true">
            {textA}
          </span>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="inline-block animate-marquee-reverse whitespace-nowrap">
          <span className="text-[clamp(24px,4vw,64px)] font-display font-semibold text-stroke-gold pr-8">
            {textB}
          </span>
          <span className="text-[clamp(24px,4vw,64px)] font-display font-semibold text-stroke-gold pr-8" aria-hidden="true">
            {textB}
          </span>
        </div>
      </div>
    </section>
  );
}
