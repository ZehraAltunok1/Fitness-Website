import { useEffect, useRef, useState } from 'react';
import { EMAIL_RE } from '../api';
import { useForm } from '../hooks';
import { useLang } from '../LanguageContext';
import DemoNote from './DemoNote';
import Field from './Field';

const ROLES = [
  { id: 'client', icon: 'fa-user' },
  { id: 'coach', icon: 'fa-dumbbell' },
  { id: 'admin', icon: 'fa-shield-halved' },
];

const INITIAL = { email: '', password: '' };

function validate(v) {
  const e = {};
  if (!EMAIL_RE.test(v.email)) e.email = 'email';
  if (!v.password) e.password = 'passwordRequired';
  return e;
}

export default function LoginModal({ open, onClose }) {
  const { t } = useLang();
  const l = t.login;
  const [role, setRole] = useState('client');
  const { values, errors, status, setStatus, onChange, onSubmit } = useForm(INITIAL, validate, 'login');
  const firstInput = useRef(null);
  const err = (name) => errors[name] && t.errors[errors[name]];

  useEffect(() => {
    if (!open) return undefined;
    setStatus('idle');
    firstInput.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.classList.add('no-scroll');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('no-scroll');
    };
  }, [open, onClose, setStatus]);

  if (!open) return null;

  const roleLabel = l.roles[role];

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal card" role="dialog" aria-modal="true" aria-labelledby="login-title">
        <button type="button" className="modal-close" aria-label={l.close} onClick={onClose}>
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>
        <h2 id="login-title">{l.title}</h2>
        <p className="muted">{l.subtitle}</p>

        <div className="role-tabs" role="tablist" aria-label={l.accountType}>
          {ROLES.map((r) => (
            <button
              key={r.id}
              type="button"
              role="tab"
              aria-selected={role === r.id}
              className={role === r.id ? 'is-active' : ''}
              onClick={() => setRole(r.id)}
            >
              <i className={`fa-solid ${r.icon}`} aria-hidden="true" /> {l.roles[r.id]}
            </button>
          ))}
        </div>

        {status === 'sent' ? (
          <div className="form-success" role="status">
            <i className="fa-solid fa-circle-check" aria-hidden="true" />
            <h3>{l.sentTitle(roleLabel)}</h3>
            <p>{l.sentText(roleLabel)}</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate>
            <Field label={l.email} name="email" type="email" autoComplete="email" ref={firstInput} value={values.email} onChange={onChange} error={err('email')} />
            <Field label={l.password} name="password" type="password" autoComplete="current-password" value={values.password} onChange={onChange} error={err('password')} />
            <button type="submit" className="btn btn-primary btn-block" disabled={status === 'sending'}>
              {status === 'sending' ? l.submitting : l.submit(roleLabel)}
            </button>
            {role === 'client' && (
              <p className="modal-footer muted">
                {l.newHere}{' '}
                <a href="#join" onClick={onClose}>{l.create}</a>
              </p>
            )}
          </form>
        )}
        <DemoNote />
      </div>
    </div>
  );
}
