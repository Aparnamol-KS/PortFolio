import { useState } from 'react'
import { contact, profile } from '../data/content'

function Contact() {
  const [copied, setCopied] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = data.get('name')
    const senderEmail = data.get('email')
    const subject = data.get('subject') || `Portfolio Inquiry from ${name}`
    const message = data.get('message')

    const mailSubject = encodeURIComponent(subject)
    const mailBody = encodeURIComponent(
      `Hello Aparnamol,\n\n${message}\n\n---\nFrom: ${name} (${senderEmail})`
    )

    // Opens user's default email client safely with pre-filled content
    window.location.href = `mailto:${profile.email}?subject=${mailSubject}&body=${mailBody}`
    setFormSubmitted(true)
    form.reset()
  }

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">{contact.eyebrow || '05 · Contact'}</p>
          <h2 id="contact-title">{contact.heading}</h2>
          <p className="section-description">{contact.intro}</p>
        </header>

        <div className="contact-grid">
          {/* Quick Direct Channels */}
          <div className="contact-channels">
            <h3 className="channels-title">Direct Channels</h3>

            <div className="contact-card">
              <div className="contact-card-icon" aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-card-info">
                <span className="contact-label">Email</span>
                <a
                  className="contact-value"
                  href={`mailto:${profile.email}`}
                  title="Send email"
                >
                  {profile.email}
                </a>
              </div>
              <button
                type="button"
                className="btn-icon"
                onClick={copyEmail}
                aria-label="Copy email address"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <span className="copy-feedback">Copied!</span>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
            </div>

            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-card contact-card-link"
              >
                <div className="contact-card-icon" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div className="contact-card-info">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">Connect on LinkedIn</span>
                </div>
                <svg
                  className="card-arrow"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17l9.2-9.2M17 17V8H8" />
                </svg>
              </a>
            )}

            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="contact-card contact-card-link"
              >
                <div className="contact-card-icon" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
                <div className="contact-card-info">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">Explore Code Repositories</span>
                </div>
                <svg
                  className="card-arrow"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17l9.2-9.2M17 17V8H8" />
                </svg>
              </a>
            )}

            <div className="contact-card">
              <div className="contact-card-icon" aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-card-info">
                <span className="contact-label">Location &amp; Availability</span>
                <span className="contact-value">{profile.location} · Open to Relocation &amp; Remote</span>
              </div>
            </div>
          </div>

          {/* Functional Email Client Form */}
          <div className="contact-form-panel">
            <h3 className="channels-title">Send a Direct Note</h3>
            <p className="form-subtext">
              Fills and opens your local email application addressed to Aparnamol.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group-row">
                <label className="form-field">
                  <span className="field-label">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="e.g. Maya Sharma"
                    required
                  />
                </label>
                <label className="form-field">
                  <span className="field-label">Your Email</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="e.g. maya@company.com"
                    required
                  />
                </label>
              </div>

              <label className="form-field">
                <span className="field-label">Subject</span>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Software Engineer Opportunity / Project Inquiry"
                  required
                />
              </label>

              <label className="form-field">
                <span className="field-label">Message</span>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Share details regarding your team, role, or project..."
                  required
                />
              </label>

              <button className="btn btn-primary" type="submit">
                <span>Compose in Email App</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>

              {formSubmitted && (
                <div className="form-status form-status-success">
                  Your mail app should have opened with this message draft. You can also email directly at{' '}
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                </div>
              )}

            
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
