import { TRAINERS } from '../data';
import { useLang } from '../LanguageContext';
import SectionHeading from './SectionHeading';

const initials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('');

export default function Trainers() {
  const { t } = useLang();
  const s = t.trainersSection;
  return (
    <section id="trainers" className="section">
      <div className="container">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} accent={s.accent} text={s.text} />
        <div className="grid grid-4">
          {TRAINERS.map((trainer, i) => (
            <article key={trainer.name} className="card trainer-card reveal">
              <div className="trainer-avatar" aria-hidden="true">
                <span>{initials(trainer.name)}</span>
                <i className={`fa-solid ${trainer.icon}`} />
              </div>
              <div className="trainer-body">
                <h3>{trainer.name}</h3>
                <p className="trainer-role">{t.trainers[i].role}</p>
                <p>{t.trainers[i].bio}</p>
                <a
                  href={trainer.instagram}
                  className="trainer-social"
                  aria-label={`${trainer.name} Instagram`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
