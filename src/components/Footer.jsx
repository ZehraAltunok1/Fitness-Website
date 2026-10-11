import { BRAND, PROGRAMS, SECTION_IDS, SOCIALS } from '../data';
import { useLang } from '../LanguageContext';
import Logo from './Logo';

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>{f.tagline}</p>
          <div className="socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.url} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                <i className={`fa-brands ${s.icon}`} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4>{f.explore}</h4>
          <ul>
            {SECTION_IDS.filter((id) => id !== 'join').map((id) => (
              <li key={id}>
                <a href={`#${id}`}>{t.nav[id]}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>{f.programs}</h4>
          <ul>
            {PROGRAMS.map((p, i) => (
              <li key={p.id}>
                <a href="#programs">{t.programs[i].title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>{f.contact}</h4>
          <ul className="footer-contact">
            <li>{BRAND.address}</li>
            <li><a href={`tel:${BRAND.phone.replace(/\s/g, '')}`}>{BRAND.phone}</a></li>
            <li><a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {BRAND.name}. {f.rights}</p>
        <p>{f.credit}</p>
      </div>
    </footer>
  );
}
