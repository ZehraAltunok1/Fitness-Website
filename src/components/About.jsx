import { FOUNDER } from '../data';
import { useLang } from '../LanguageContext';

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <section id="about" className="section section-alt">
      <div className="container about">
        <div className="about-text reveal">
          <span className="eyebrow">{a.eyebrow}</span>
          <h2>
            {a.title} <span className="accent">{a.accent}</span>
            {a.titleEnd}
          </h2>
          {a.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <a href="#contact" className="btn btn-primary">
            {a.cta}
          </a>
        </div>

        <figure className="team-card reveal">
          <img src={FOUNDER.image} alt={FOUNDER.name} loading="lazy" />
          <figcaption>
            <strong>{FOUNDER.name}</strong>
            <span>{a.founder}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
