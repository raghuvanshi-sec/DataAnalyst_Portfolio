import { useEffect, useRef } from 'react';
import { capabilities } from '../data/content.js';
import '../styles/Capabilities.css';

export default function Capabilities() {
  const gridRef = useRef(null);

  // a single scan-line sweep the first time the grid comes into view —
  // contained entirely within the grid's own box via overflow:hidden
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return undefined;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reduceMotion || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            grid.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="capabilities">
      <div className="wrap">
        <p className="eyebrow">What I do</p>
        <h2 className="section-heading">
          <span className="muted-word">Core</span>
          <br />
          <span className="accent">Capabilities</span>
        </h2>

        <div className="cap__grid" ref={gridRef}>
          <div className="cap__scan" aria-hidden="true" />
          {capabilities.map((cap) => (
            <div className="cap__item" key={cap.num}>
              <span className="cap__num mono">{cap.num}</span>
              <div className="cap__title">{cap.title}</div>
              <p className="cap__desc">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
