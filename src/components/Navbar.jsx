import { useEffect, useState } from 'react';
import { NAV_IDS } from '../data';
import { LANGUAGES } from '../i18n';
import { useLang } from '../LanguageContext';
import Logo from './Logo';

function LanguageSwitch() {
  const { lang, setLang, t } = useLang();
  return (
    <div className="lang-switch" role="group" aria-label={t.nav.language}>
      {LANGUAGES.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          className={lang === code ? 'is-active' : ''}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function Navbar({ active, onLogin }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Logo />

        <nav id="main-nav" className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Main">
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'is-active' : ''}
              aria-current={active === id ? 'true' : undefined}
              onClick={close}
            >
              {t.nav[id]}
            </a>
          ))}
          <div className="nav-actions-mobile">
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => {
                close();
                onLogin();
              }}
            >
              {t.nav.login}
            </button>
            <a href="#join" className="btn btn-primary" onClick={close}>
              {t.nav.join}
            </a>
          </div>
        </nav>

        <div className="nav-actions">
          <LanguageSwitch />
          <button type="button" className="btn btn-ghost" onClick={onLogin}>
            <i className="fa-regular fa-user" aria-hidden="true" /> {t.nav.login}
          </button>
          <a href="#join" className="btn btn-primary">
            {t.nav.join}
          </a>
        </div>

        <div className="nav-mobile-controls">
          <LanguageSwitch />
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
