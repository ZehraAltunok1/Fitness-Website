import { useEffect } from 'react';
import { PLANS, PROGRAMS } from '../data';
import { EMAIL_RE, PHONE_RE } from '../api';
import { useForm } from '../hooks';
import { useLang } from '../LanguageContext';
import DemoNote from './DemoNote';
import Field from './Field';

const INITIAL = {
  name: '',
  email: '',
  phone: '',
  birthDate: '',
  gender: '',
  goal: '',
  plan: 'standard',
  password: '',
  password2: '',
  terms: false,
};

function age(isoDate) {
  const birth = new Date(isoDate);
  const now = new Date();
  let years = now.getFullYear() - birth.getFullYear();
  const m = now.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) years -= 1;
  return years;
}

// Returns error keys from t.errors so messages follow the selected language.
function validate(v) {
  const e = {};
  if (v.name.trim().split(/\s+/).length < 2) e.name = 'fullName';
  if (!EMAIL_RE.test(v.email)) e.email = 'email';
  if (!PHONE_RE.test(v.phone)) e.phone = 'phone';
  if (!v.birthDate) e.birthDate = 'birthDate';
  else if (age(v.birthDate) < 16) e.birthDate = 'age';
  if (!v.gender) e.gender = 'select';
  if (!v.goal) e.goal = 'goal';
  if (v.password.length < 8 || !/\d/.test(v.password) || !/[a-zA-Z]/.test(v.password)) e.password = 'password';
  if (v.password2 !== v.password) e.password2 = 'passwordMatch';
  if (!v.terms) e.terms = 'terms';
  return e;
}

export default function Join({ selectedPlan, selectedGoal }) {
  const { t } = useLang();
  const j = t.join;
  const { values, errors, status, setStatus, setField, onChange, onSubmit } = useForm(INITIAL, validate, 'signup');
  const err = (name) => errors[name] && t.errors[errors[name]];

  useEffect(() => {
    if (selectedPlan) setField('plan', selectedPlan);
  }, [selectedPlan, setField]);

  useEffect(() => {
    if (selectedGoal) setField('goal', selectedGoal);
  }, [selectedGoal, setField]);

  return (
    <section id="join" className="section join">
      <div className="container join-inner">
        <div className="join-text reveal">
          <span className="eyebrow">{j.eyebrow}</span>
          <h2>
            {j.title} <span className="accent">{j.accent}</span>
          </h2>
          <p>{j.text}</p>
          <ul className="check-list">
            {j.perks.map((perk) => (
              <li key={perk}>
                <i className="fa-solid fa-check" aria-hidden="true" /> {perk}
              </li>
            ))}
          </ul>
        </div>

        <form className="card form-card reveal" onSubmit={onSubmit} noValidate>
          {status === 'sent' ? (
            <div className="form-success" role="status">
              <i className="fa-solid fa-circle-check" aria-hidden="true" />
              <h3>{j.sentTitle}</h3>
              <p>{j.sentText}</p>
              <button type="button" className="btn btn-outline" onClick={() => setStatus('idle')}>
                {j.again}
              </button>
            </div>
          ) : (
            <>
              <h3 className="form-title">{j.formTitle}</h3>
              <Field label={j.name} name="name" autoComplete="name" value={values.name} onChange={onChange} error={err('name')} />
              <div className="form-row">
                <Field label={j.email} name="email" type="email" autoComplete="email" value={values.email} onChange={onChange} error={err('email')} />
                <Field label={j.phone} name="phone" type="tel" autoComplete="tel" placeholder="+90 5xx xxx xx xx" value={values.phone} onChange={onChange} error={err('phone')} />
              </div>
              <div className="form-row">
                <Field label={j.birthDate} name="birthDate" type="date" autoComplete="bday" value={values.birthDate} onChange={onChange} error={err('birthDate')} />
                <Field label={j.gender} name="gender" as="select" value={values.gender} onChange={onChange} error={err('gender')}>
                  <option value="" disabled>{j.select}</option>
                  {Object.entries(j.genders).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </Field>
              </div>
              <div className="form-row">
                <Field label={j.goal} name="goal" as="select" value={values.goal} onChange={onChange} error={err('goal')}>
                  <option value="" disabled>{j.select}</option>
                  {PROGRAMS.map((p, i) => (
                    <option key={p.id} value={p.id}>{t.programs[i].title}</option>
                  ))}
                </Field>
                <Field label={j.plan} name="plan" as="select" value={values.plan} onChange={onChange}>
                  {PLANS.map((p, i) => (
                    <option key={p.id} value={p.id}>{t.plans[i].name}</option>
                  ))}
                </Field>
              </div>
              <div className="form-row">
                <Field label={j.password} name="password" type="password" autoComplete="new-password" value={values.password} onChange={onChange} error={err('password')} />
                <Field label={j.password2} name="password2" type="password" autoComplete="new-password" value={values.password2} onChange={onChange} error={err('password2')} />
              </div>
              <div className={`checkbox ${errors.terms ? 'has-error' : ''}`}>
                <input id="field-terms" type="checkbox" name="terms" checked={values.terms} onChange={onChange} />
                <label htmlFor="field-terms">{j.terms}</label>
                {errors.terms && <span className="field-error" role="alert">{err('terms')}</span>}
              </div>
              <button type="submit" className="btn btn-primary btn-block" disabled={status === 'sending'}>
                {status === 'sending' ? j.submitting : j.submit}
              </button>
            </>
          )}
          <DemoNote />
        </form>
      </div>
    </section>
  );
}
