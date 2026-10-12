import { profile } from '../data/content'

function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    profile.github ? { href: profile.github, label: 'GitHub', external: true } : null,
    profile.linkedin ? { href: profile.linkedin, label: 'LinkedIn', external: true } : null,
    { href: `mailto:${profile.email}`, label: 'Email', external: false },
  ].filter(Boolean)

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-copyright">
            © {currentYear} {profile.name}. Designed &amp; built for software engineering and AI roles.
          </p>
        </div>

        <ul className="footer-links" aria-label="Social and contact links">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#top" className="back-to-top" title="Back to top">
              ↑ Top
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
