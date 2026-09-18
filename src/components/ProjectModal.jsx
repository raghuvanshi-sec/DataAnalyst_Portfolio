import { useEffect, useRef } from 'react';
import ProjectVisual from './ProjectVisual.jsx';
import { profile } from '../data/content.js';
import { setupLineDraw, playVisualReveal } from '../utils/visualReveal.js';
import '../styles/ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  const closeBtnRef = useRef(null);
  const lastFocused = useRef(null);
  const visualRef = useRef(null);

  // opening the modal is itself the "reveal moment" for its chart
  useEffect(() => {
    if (!visualRef.current) return;
    setupLineDraw(visualRef.current);
    playVisualReveal(visualRef.current);
  }, [project]);

  // focus the close button on open, restore focus to the trigger on close,
  // and let Escape close the dialog
  useEffect(() => {
    lastFocused.current = document.activeElement;
    closeBtnRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      if (lastFocused.current?.focus) lastFocused.current.focus();
    };
  }, [onClose]);

  if (!project) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="proj-modal-backdrop is-open"
      onClick={handleBackdropClick}
    >
      <div
        className="proj-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="proj-modal-title"
      >
        <button
          className="proj-modal__close"
          type="button"
          aria-label="Close project details"
          onClick={onClose}
          ref={closeBtnRef}
        >
          &times;
        </button>

        <div className="proj-modal__visual" ref={visualRef}>
          <ProjectVisual type={project.visual} />
        </div>

        <div className="proj-modal__body">
          <p className="proj-modal__meta mono">{project.meta}</p>
          <h3 className="proj-modal__title" id="proj-modal-title">
            {project.name}
          </h3>

          <div className="proj-modal__desc">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="proj-modal__bullets">
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>

          <div className="proj__tags">
            {project.tags.map((tag) => (
              <span className="proj__tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className="proj-modal__actions">
            <a
              className="btn btn--primary"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code on GitHub ↗
            </a>
            <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
              Ask About This ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
