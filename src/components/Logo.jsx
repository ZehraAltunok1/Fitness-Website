export default function Logo() {
  return (
    <a href="#home" className="logo" aria-label="Fitness GYM home">
      <span className="logo-mark" aria-hidden="true">
        <i className="fa-solid fa-dumbbell" />
      </span>
      {/* lang="en" keeps the brand name from becoming "FİTNESS" under Turkish uppercase rules */}
      <span className="logo-text" lang="en">
        Fitness<span className="accent">GYM</span>
      </span>
    </a>
  );
}
