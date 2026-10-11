import { POSTS } from '../data';
import { useLang } from '../LanguageContext';
import SectionHeading from './SectionHeading';

export default function Blog() {
  const { t } = useLang();
  const s = t.blogSection;
  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString(s.locale, { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <section id="blog" className="section">
      <div className="container">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} accent={s.accent} text={s.text} />
        <div className="grid grid-3">
          {POSTS.map((post, i) => {
            const text = t.posts[i];
            return (
              <article key={post.url} className="card blog-card reveal">
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="card-media" tabIndex={-1}>
                  <img src={post.image} alt="" loading="lazy" />
                </a>
                <div className="card-body">
                  <p className="meta">
                    <i className="fa-regular fa-calendar" aria-hidden="true" />{' '}
                    <time dateTime={post.date}>{formatDate(post.date)}</time> · Admin
                  </p>
                  <h3>
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      {text.title}
                    </a>
                  </h3>
                  <p>{text.text}</p>
                  <a href={post.url} target="_blank" rel="noopener noreferrer" className="card-link">
                    {s.readMore} <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
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
