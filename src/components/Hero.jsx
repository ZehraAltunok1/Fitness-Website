import { HERO_IMAGE, HIGHLIGHT_ICONS } from '../data';
import { useLang } from '../LanguageContext';

export default function Hero({ onLogin }) {
  const { t } = useLang();
  return (
    <section id="home" className="hero" style={{ '--hero-image': `url(${HERO_IMAGE})` }}>
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1>
            {t.hero.title} <span className="accent">{t.hero.accent}</span>
          </h1>
          <p>{t.hero.text}</p>
          <div className="hero-cta">
            <a href="#join" className="btn btn-primary btn-lg">
              {t.hero.start} <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </a>
            <a href="#programs" className="btn btn-outline btn-lg">
              {t.hero.explore}
            </a>
          </div>
          <p className="hero-login">
            {t.hero.memberQuestion}{' '}
            <button type="button" className="link-btn" onClick={onLogin}>
              {t.hero.portal}
            </button>
          </p>
        </div>
      </div>

      <div className="container">
        <ul className="highlights">
          {t.highlights.map((item, i) => (
            <li key={i} className="highlight">
              <i className={`fa-solid ${HIGHLIGHT_ICONS[i]}`} aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
