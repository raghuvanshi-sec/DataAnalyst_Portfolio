import { useEffect, useRef, useState } from 'react';
import { profile, stats } from '../data/content.js';
import { animateCountUp, startsWithDigit } from '../utils/countUp.js';
import '../styles/About.css';

export default function About() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const statGridRef = useRef(null);
  const statCardRefs = useRef([]);

  // fade in + count up the stat cards, once, the first time they scroll
  // into view — contained within each card's own box, staggered slightly
  useEffect(() => {
    const grid = statGridRef.current;
    const cards = statCardRefs.current.filter(Boolean);
    if (!grid || cards.length === 0) return undefined;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const reveal = (card, delay) => {
      setTimeout(() => {
        card.classList.add('is-visible');
        const numEl = card.querySelector('.stat__num');
        if (numEl && startsWithDigit(numEl.textContent)) {
          animateCountUp(numEl);
        }
      }, reduceMotion ? 0 : delay);
    };

    if (reduceMotion || !('IntersectionObserver' in window)) {
      cards.forEach((card) => reveal(card, 0));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, i) => reveal(card, i * 90));
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
    <section className="section" id="about">
      <div className="wrap about__grid">
        <div>
          <p className="eyebrow">About me</p>
          <h2 className="about__heading">
            From data
            <br />
            <span className="accent">to decisions.</span>
          </h2>

          <p className="about__p">
            I&rsquo;m a <b>Computer Science undergraduate</b> specializing in data
            analytics and applied machine learning — with hands-on experience
            across Python, SQL, Excel, and Power BI.
          </p>
          <p className="about__p">
            My work lives at the intersection of messy real-world data and
            business decisions. I build systems that don&rsquo;t just run — they{' '}
            <b>explain themselves</b>, from SHAP-backed fraud scores to a cleaned
            dataset a COO can actually act on.
          </p>
          <p className="about__p">
            Actively seeking entry-level roles in{' '}
            <b>data analytics, business intelligence, or applied machine learning</b>,
            where turning ambiguous data into a clear recommendation is the job.
          </p>

          <div className="about__stats" ref={statGridRef}>
            {stats.map((stat, i) => (
              <div
                className="stat"
                key={stat.label}
                ref={(el) => (statCardRefs.current[i] = el)}
              >
                <div className="stat__num mono">{stat.num}</div>
                <div className="stat__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <figure className="photo">
          {photoFailed ? (
            <div className="photo__fallback" aria-hidden="true">
              SR
            </div>
          ) : (
            <img
              className="photo__img"
              src={profile.photo}
              alt={`Portrait of ${profile.fullName}`}
              loading="lazy"
              onError={() => setPhotoFailed(true)}
            />
          )}
          <figcaption className="photo__plate">
            <div className="photo__name">{profile.fullName}</div>
            <div className="photo__role">{profile.role}</div>
            <div className="photo__meta">
              {profile.location} &middot; {profile.degreeLine}
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
