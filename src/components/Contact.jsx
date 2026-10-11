import { BRAND } from '../data';
import { EMAIL_RE, PHONE_RE } from '../api';
import { useForm } from '../hooks';
import { useLang } from '../LanguageContext';
import DemoNote from './DemoNote';
import Field from './Field';
import SectionHeading from './SectionHeading';

const INITIAL = { name: '', email: '', phone: '', message: '' };

// Returns error keys from t.errors so messages follow the selected language.
function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'nameRequired';
  if (!EMAIL_RE.test(v.email)) e.email = 'email';
  if (v.phone && !PHONE_RE.test(v.phone)) e.phone = 'phone';
  if (v.message.trim().length < 10) e.message = 'message';
  return e;
}

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const { values, errors, status, onChange, onSubmit } = useForm(INITIAL, validate, 'contact');
  const err = (name) => errors[name] && t.errors[errors[name]];

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} accent={c.accent} text={c.text} />
        <div className="contact">
          <div className="contact-info reveal">
            <ul className="info-list">
              <li>
                <i className="fa-solid fa-location-dot" aria-hidden="true" />
                <span>{BRAND.address}</span>
              </li>
              <li>
                <i className="fa-solid fa-phone" aria-hidden="true" />
                <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`}>{BRAND.phone}</a>
              </li>
              <li>
                <i className="fa-solid fa-envelope" aria-hidden="true" />
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              </li>
              <li>
                <i className="fa-regular fa-clock" aria-hidden="true" />
                <span>{c.hours}</span>
              </li>
            </ul>
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12037.852231349814!2d28.985091699999998!3d41.03700175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zVGFrc2ltIE1leWRhbsSxLCDFnmVoaXQgTXVodGFyLCAzNDQzNSBCZXlvxJ9sdS_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1691253425271!5m2!1str!2str"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={c.mapTitle}
            />
          </div>

          <form className="card form-card reveal" onSubmit={onSubmit} noValidate>
            {status === 'sent' ? (
              <div className="form-success" role="status">
                <i className="fa-solid fa-circle-check" aria-hidden="true" />
                <h3>{c.sentTitle}</h3>
                <p>{c.sentText}</p>
              </div>
            ) : (
              <>
                <Field label={c.name} name="name" autoComplete="name" value={values.name} onChange={onChange} error={err('name')} />
                <div className="form-row">
                  <Field label={c.email} name="email" type="email" autoComplete="email" value={values.email} onChange={onChange} error={err('email')} />
                  <Field label={c.phoneOptional} name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={onChange} error={err('phone')} />
                </div>
                <Field label={c.message} name="message" as="textarea" rows={5} value={values.message} onChange={onChange} error={err('message')} />
                <button type="submit" className="btn btn-primary btn-block" disabled={status === 'sending'}>
                  {status === 'sending' ? c.sending : c.send}
                </button>
              </>
            )}
            <DemoNote />
          </form>
        </div>
      </div>
    </section>
  );
}
