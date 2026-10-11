import { useLang } from '../LanguageContext';

export default function DemoNote() {
  const { t } = useLang();
  return (
    <p className="demo-note">
      <i className="fa-solid fa-circle-info" aria-hidden="true" /> {t.demoNote}
    </p>
  );
}
