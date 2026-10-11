import { useState } from 'react';
import { SCHEDULE, TRAINERS } from '../data';
import { useLang } from '../LanguageContext';
import SectionHeading from './SectionHeading';

// JS weeks start on Sunday; the schedule starts on Monday.
const todayIndex = () => (new Date().getDay() + 6) % 7;

export default function Schedule() {
  const { t } = useLang();
  const s = t.schedule;
  const today = todayIndex();
  const [day, setDay] = useState(today);

  return (
    <section id="schedule" className="section section-alt">
      <div className="container">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} accent={s.accent} text={s.text} />

        <div className="schedule reveal">
          <div className="day-tabs" role="tablist" aria-label={s.title + ' ' + s.accent}>
            {s.days.map((name, i) => (
              <button
                key={name}
                type="button"
                role="tab"
                id={`day-tab-${i}`}
                aria-selected={day === i}
                aria-controls="day-panel"
                className={day === i ? 'is-active' : ''}
                onClick={() => setDay(i)}
              >
                <span className="day-full">{name}</span>
                <span className="day-short" aria-hidden="true">{s.short[i]}</span>
                {i === today && <span className="today-dot" title={s.today} />}
              </button>
            ))}
          </div>

          <ul id="day-panel" className="class-list" role="tabpanel" aria-labelledby={`day-tab-${day}`}>
            {SCHEDULE[day].map((cls) => (
              <li key={cls.time + cls.type} className="class-row">
                <time className="class-time">{cls.time}</time>
                <div className="class-info">
                  <h3>
                    {s.classes[cls.type]}
                    <span className={`level level-${cls.level}`}>{s.levels[cls.level]}</span>
                  </h3>
                  <p>
                    <span>
                      <i className="fa-regular fa-user" aria-hidden="true" /> {TRAINERS[cls.trainer].name}
                    </span>
                    <span>
                      <i className="fa-regular fa-clock" aria-hidden="true" /> {cls.minutes} {s.minutes}
                    </span>
                  </p>
                </div>
                <a href="#join" className="btn btn-outline class-book">
                  {s.book}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
