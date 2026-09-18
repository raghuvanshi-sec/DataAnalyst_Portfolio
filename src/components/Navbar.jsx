import { navLinks, profile } from '../data/content.js';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <a className="logo" href="#top">
          {profile.firstName}
          <span className="accent">.</span>
        </a>

        <ul className="nav__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a
          className="nav__resume"
          href={profile.resumeUrl}
          download="Satyam_Raghuvanshi_Resume.pdf"
        >
          Resume ↗
        </a>
      </div>
    </nav>
  );
}
