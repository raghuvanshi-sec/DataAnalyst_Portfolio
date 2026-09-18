import { useEffect, useRef, useState } from 'react';
import ProjectVisual from './ProjectVisual.jsx';
import ProjectModal from './ProjectModal.jsx';
import { projects } from '../data/content.js';
import { setupLineDraw, playVisualReveal, prefersReducedMotion } from '../utils/visualReveal.js';
import '../styles/Projects.css';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const cardRefs = useRef([]);

  // one-time reveal per card, triggered the moment it scrolls into view —
  // mirrors the "data appearing" motif used in the hero and stats sections
  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    cards.forEach((card) => setupLineDraw(card));

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      cards.forEach((card) => playVisualReveal(card));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playVisualReveal(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <p className="eyebrow">Selected work</p>
        <h2 className="section-heading">
          <span className="muted-word">Featured</span>
          <br />
          <span className="accent">Projects</span>
        </h2>

        <div className="proj__grid">
          {projects.map((proj, i) => (
            <button
              className="proj__card"
              type="button"
              key={proj.id}
              ref={(el) => (cardRefs.current[i] = el)}
              aria-haspopup="dialog"
              onClick={() => setActiveProject(proj)}
            >
              <ProjectVisual type={proj.visual} />
              <div className="proj__body">
                <h3 className="proj__name">{proj.name}</h3>
                <p className="proj__desc">{proj.tagline}</p>
                <div className="proj__tags">
                  {proj.tags.map((tag) => (
                    <span className="proj__tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="proj__foot">
                  <span className="proj__open-hint">View details →</span>
                  <a
                    className="proj__github-link"
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    // keep the GitHub link from also triggering the modal
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
