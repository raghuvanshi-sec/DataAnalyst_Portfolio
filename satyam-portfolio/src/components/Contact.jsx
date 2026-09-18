import { profile } from '../data/content.js';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <section className="section cta" id="contact">
      <div className="wrap">
        <p className="eyebrow is-centered">Open to opportunities</p>

        <h2 className="cta__heading">
          <span className="muted-word">Let&rsquo;s</span>
          <br />
          <span className="muted-word">Work</span>
          <br />
          <span className="accent">Together.</span>
        </h2>

        <p className="cta__desc">
          Actively seeking entry-level roles in data analytics, business
          intelligence, or applied machine learning. Whether it&rsquo;s a startup
          or an enterprise team, I&rsquo;d love to hear from you.
        </p>

        <div className="cta__btns">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            Send a Message ↗
          </a>
          <a
            className="btn btn--ghost"
            href={profile.resumeUrl}
            download="Satyam_Raghuvanshi_Resume.pdf"
          >
            Download Resume
          </a>
        </div>

        <div className="cta__contacts">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.phoneHref}>{profile.phone}</a>
        </div>
      </div>
    </section>
  );
}
