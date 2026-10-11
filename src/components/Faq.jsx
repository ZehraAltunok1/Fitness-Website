import { useLang } from '../LanguageContext';
import SectionHeading from './SectionHeading';

export default function Faq() {
  const { t } = useLang();
  const s = t.faqSection;
  return (
    <section id="faq" className="section section-alt">
      <div className="container">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} accent={s.accent} text={s.text} />
        <div className="faq-list reveal">
          {t.faq.map((item, i) => (
            <details key={i} className="faq-item" open={i === 0}>
              <summary>
                {item.q}
                <i className="fa-solid fa-plus" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
