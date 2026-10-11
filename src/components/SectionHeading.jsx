export default function SectionHeading({ eyebrow, title, accent, text }) {
  return (
    <header className="section-heading reveal">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>
        {title} {accent && <span className="accent">{accent}</span>}
      </h2>
      {text && <p>{text}</p>}
    </header>
  );
}
