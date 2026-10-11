import { useState } from 'react';
import { useLang } from '../LanguageContext';
import Field from './Field';

// Upper bounds and colors line up with t.bmi.categories.
const CATEGORIES = [
  { max: 18.5, tone: 'info' },
  { max: 25, tone: 'good' },
  { max: 30, tone: 'warn' },
  { max: Infinity, tone: 'bad' },
];

// The scale bar covers BMI 15–40.
const SCALE_MIN = 15;
const SCALE_MAX = 40;

export default function BmiCalculator() {
  const { t, lang } = useLang();
  const b = t.bmi;
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState(false);

  const calculate = (e) => {
    e.preventDefault();
    const h = Number(height) / 100;
    const w = Number(weight);
    if (!h || !w || h < 1 || h > 2.5 || w < 25 || w > 300) {
      setError(true);
      setBmi(null);
      return;
    }
    setError(false);
    setBmi(w / (h * h));
  };

  const categoryIndex = bmi === null ? -1 : CATEGORIES.findIndex((c) => bmi < c.max);
  const category = b.categories[categoryIndex];
  const position =
    bmi === null ? 0 : Math.min(100, Math.max(0, ((bmi - SCALE_MIN) / (SCALE_MAX - SCALE_MIN)) * 100));

  return (
    <section id="bmi" className="section section-alt">
      <div className="container bmi">
        <div className="bmi-text reveal">
          <span className="eyebrow">{b.eyebrow}</span>
          <h2>
            {b.title} <span className="accent">{b.accent}</span>
          </h2>
          <p>{b.text}</p>
          <table className="bmi-table">
            <thead>
              <tr>
                <th scope="col">{b.tableBmi}</th>
                <th scope="col">{b.tableCategory}</th>
              </tr>
            </thead>
            <tbody>
              {b.ranges.map((range, i) => (
                <tr key={range}>
                  <td>{range}</td>
                  <td>{b.categories[i].label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <form className="card form-card reveal" onSubmit={calculate} noValidate>
          <div className="form-row">
            <Field
              label={b.height}
              name="height"
              type="number"
              inputMode="decimal"
              placeholder="170"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <Field
              label={b.weight}
              name="weight"
              type="number"
              inputMode="decimal"
              placeholder="65"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          {error && <p className="form-message is-error" role="alert">{b.error}</p>}
          <button type="submit" className="btn btn-primary btn-block">
            {b.calculate}
          </button>

          {bmi !== null && (
            <div className="bmi-result" aria-live="polite">
              <p className="bmi-value">
                {bmi.toLocaleString(lang === 'tr' ? 'tr-TR' : 'en-GB', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                })}
                <span className={`tag tag-${CATEGORIES[categoryIndex].tone}`}>{category.label}</span>
              </p>
              <div className="bmi-scale" aria-hidden="true">
                <span className="bmi-marker" style={{ left: `${position}%` }} />
              </div>
              <p className="muted">{category.advice}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
