import { useRef } from 'react';
import HeroCanvas from './HeroCanvas.jsx';
import { profile } from '../data/content.js';
import '../styles/Hero.css';

export default function Hero() {
  const heroRef = useRef(null);

  return (
    <header className="hero" id="top" ref={heroRef}>
      <HeroCanvas containerRef={heroRef} />

      <div className="wrap hero__inner">
        <p className="hero__eyebrow">
          {profile.role} &middot; {profile.location}
        </p>

        <h1 className="hero__word">
          {profile.firstName}
          <span className="accent">.</span>
        </h1>

        <p className="hero__sub">{profile.role}</p>
        <p className="hero__desc">{profile.heroDesc}</p>

        <div className="hero__scroll">
          <span>Scroll</span>
          <span className="hero__scroll-line" />
        </div>
      </div>
    </header>
  );
}
