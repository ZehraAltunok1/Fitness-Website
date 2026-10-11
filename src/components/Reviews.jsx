import { REVIEWS } from '../data';
import { useLang } from '../LanguageContext';
import SectionHeading from './SectionHeading';

const initials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

export default function Reviews() {
  const { t } = useLang();
  const s = t.reviewsSection;
  return (
    <section id="reviews" className="section">
      <div className="container">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} accent={s.accent} />
        <div className="grid grid-3">
          {REVIEWS.map((review, i) => {
            const name = review.name || s.anonymous;
            return (
              <figure key={i} className="card review-card reveal">
                <div className="stars" aria-label={s.stars}>
                  {Array.from({ length: 5 }, (_, n) => (
                    <i key={n} className="fa-solid fa-star" aria-hidden="true" />
                  ))}
                </div>
                <blockquote>“{t.reviews[i]}”</blockquote>
                <figcaption>
                  {review.image ? (
                    <img src={review.image} alt="" className="avatar" loading="lazy" />
                  ) : (
                    <span className="avatar avatar-initials" aria-hidden="true">
                      {initials(name)}
                    </span>
                  )}
                  <span>
                    <strong>{name}</strong>
                    <small>{s.member}</small>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
