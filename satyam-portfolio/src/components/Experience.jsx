import { useRef } from 'react';
import { experience } from '../data/content.js';
import useScrollRail from '../hooks/useScrollRail.js';
import '../styles/Experience.css';

export default function Experience() {
  const listRef = useRef(null);
  const { fillPercent, activeDots, dotRefs } = useScrollRail(
    listRef,
    experience.length
  );

  return (
    <section className="section" id="experience">
      <div className="wrap">
        <p className="eyebrow">My career journey</p>
        <h2 className="section-heading">
          <span className="muted-word">Professional</span>
          <br />
          <span className="accent">Experience</span>
        </h2>

        <div className="exp__list" ref={listRef}>
          <div className="exp__rail" />
          <div
            className="exp__rail-fill"
            style={{ height: `${fillPercent}%` }}
          />

          {experience.map((item, i) => (
            <div className="exp__item" key={`${item.org}-${item.date}`}>
              <span
                className={`exp__dot${activeDots[i] ? ' is-active' : ''}`}
                ref={(el) => (dotRefs.current[i] = el)}
              />
              <div>
                <div className="exp__date">{item.date}</div>
                <div className="exp__org">{item.org}</div>
                <div className="exp__loc">{item.loc}</div>
              </div>

              <div>
                <h3 className="exp__role">{item.role}</h3>
                <ul className="exp__bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="exp__tags">
                  {item.tags.map((tag) => (
                    <span className="exp__tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
