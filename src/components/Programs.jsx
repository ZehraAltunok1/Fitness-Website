import { PROGRAMS } from '../data';
import { useLang } from '../LanguageContext';
import SectionHeading from './SectionHeading';

export default function Programs({ onChooseGoal }) {
  const { t } = useLang();
  const s = t.programsSection;
  return (
    <section id="programs" className="section">
      <div className="container">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} accent={s.accent} text={s.text} />
        <div className="grid grid-4">
          {PROGRAMS.map((program, i) => {
            const text = t.programs[i];
            return (
              <article key={program.id} className="card program-card reveal">
                <div className="card-media">
                  <img src={program.image} alt="" loading="lazy" />
                </div>
                <div className="card-body">
                  <h3>{text.title}</h3>
                  <p>{text.text}</p>
                  <ul className="check-list">
                    {text.points.map((point) => (
                      <li key={point}>
                        <i className="fa-solid fa-check" aria-hidden="true" /> {point}
                      </li>
                    ))}
                  </ul>
                  <a href="#join" className="card-link" onClick={() => onChooseGoal(program.id)}>
                    {s.cta} <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
