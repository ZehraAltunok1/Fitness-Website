import { PLANS } from '../data';
import { useLang } from '../LanguageContext';
import SectionHeading from './SectionHeading';

const formatPrice = (value) => new Intl.NumberFormat('tr-TR').format(value);

export default function Plans({ onChoosePlan }) {
  const { t } = useLang();
  const s = t.plansSection;
  return (
    <section id="plans" className="section">
      <div className="container">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} accent={s.accent} text={s.text} />
        <div className="grid grid-3 plans">
          {PLANS.map((plan, i) => {
            const text = t.plans[i];
            return (
              <article key={plan.id} className={`card plan-card reveal ${plan.featured ? 'is-featured' : ''}`}>
                {plan.featured && <span className="badge">{s.popular}</span>}
                <h3>{text.name}</h3>
                <p className="price">
                  <span className="currency">₺</span>
                  {formatPrice(plan.price)}
                  <span className="period">{s.perMonth}</span>
                </p>
                <ul className="check-list">
                  {text.features.map((feature) => (
                    <li key={feature}>
                      <i className="fa-solid fa-check" aria-hidden="true" /> {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#join"
                  className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'} btn-block`}
                  onClick={() => onChoosePlan(plan.id)}
                >
                  {s.choose} {text.name}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
