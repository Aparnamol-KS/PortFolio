import { useState } from 'react'
import { navLinks, profile } from '../data/content'

function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-logo" href="#top" onClick={close} aria-label="Go to top of portfolio">
          <span className="logo-text">{profile.name}</span>
          <span className="logo-dot" aria-hidden="true" />
        </a>

        {/* Mobile Navigation Toggle Button */}
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className={open ? 'nav-toggle-bar is-open' : 'nav-toggle-bar'} aria-hidden="true" />
        </button>

        {/* Navigation Links List */}
        <nav
          id="site-nav"
          className={open ? 'nav-links is-open' : 'nav-links'}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="nav-link-item"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="nav-cta-btn"
            onClick={close}
          >
            Say Hello
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
