function Header() {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-content">
          <p className="hero-eyebrow">Portfolio</p>
          <h1 className="hero-title">Tashif Khan</h1>
          <p className="hero-description">
            React portfolio website showcasing completed projects, roles,
            outcomes, and experience.
          </p>

          <div className="contact-list">
            <a href="mailto:tashifmkhan@outlook.com" className="contact-link">
              tashifmkhan@outlook.com
            </a>
            <a href="tel:+16133016400" className="contact-link">
              +1 (613) 301-6400
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;