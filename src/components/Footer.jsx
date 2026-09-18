import { profile } from '../data/content.js';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__row">
        <span className="logo footer__logo">
          {profile.firstName}
          <span className="accent">.</span>
        </span>
        <span>
          &copy; {new Date().getFullYear()} {profile.fullName}. All rights
          reserved.
        </span>
        <span>
          {profile.role} &middot; {profile.location}
        </span>
      </div>
    </footer>
  );
}
