import { skills } from '../data/content.js';
import '../styles/Marquee.css';

export default function Marquee() {
  // rendered twice so the -50% translate loops seamlessly
  const loop = [...skills, ...skills];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((skill, i) => (
          <span className="marquee__item" key={`${skill}-${i}`}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
