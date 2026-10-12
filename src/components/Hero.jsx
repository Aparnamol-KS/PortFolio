import { useState } from 'react'
import { profile } from '../data/content'

// ============================================================================
// PROFILE PHOTO CONFIGURATION GUIDE FOR APARNAMOL:
// ----------------------------------------------------------------------------
// File location: Place your portrait photo at: src/assets/aparna.png
// If you use another format (e.g., aparna.jpg or profile.webp), change Line 10:
//   import profilePhoto from '../assets/YOUR_FILENAME.ext'
// ============================================================================
import profilePhoto from '../assets/aparna.png'

function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section className="hero" id="top" aria-labelledby="hero-name">
      <div className="container hero-grid">
        {/* Left Column: Dedicated Profile Photograph Container */}
        <div className="hero-visual">
          <div className="photo-card-container">
            <div className="photo-card-backdrop" aria-hidden="true" />
            <div className="photo-frame">
              {!imageError ? (
                <img
                  src={profilePhoto}
                  alt="Aparnamol K S - B.Tech in Artificial Intelligence & Data Science"
                  className="profile-photo-img"
                  onError={() => setImageError(true)}
                  loading="eager"
                />
              ) : (
                /* Elegant graceful fallback silhouette when photo is not found */
                <div className="photo-fallback" aria-label="Portrait avatar placeholder">
                  <div className="fallback-avatar-graphic">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="fallback-icon"
                      aria-hidden="true"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <p className="fallback-name">{profile.name}</p>
                  <p className="fallback-note">AI & Data Science · MITS</p>
                </div>
              )}

              {/* Restrained decorative glass caption over bottom */}
              <div className="photo-caption-tag">
                <span className="caption-dot" aria-hidden="true" />
                <span className="caption-text">MITS Kochi · 2022–2026</span>
              </div>
            </div>

            {/* Quick mini-spec underneath portrait */}
            <div className="photo-meta-strip">
              <div className="meta-item">
                <span className="meta-key">Specialisation</span>
                <span className="meta-val">AI & Data Science</span>
              </div>
              <div className="meta-item">
                <span className="meta-key">CGPA</span>
                <span className="meta-val meta-highlight">8.53</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Introduction & Primary Calls-to-Action */}
        <div className="hero-copy">
          <div className="hero-badge-wrap">
            {/* <span className="hero-status-pill">
              <span className="pulse-dot" aria-hidden="true" />
              {profile.status}
            </span> */}
          </div>

          <p className="eyebrow">{profile.role}</p>

          <h1 id="hero-name" className="hero-title">
            {profile.name}
          </h1>

          <p className="hero-headline">{profile.headline}</p>

          <p className="hero-summary lede">{profile.summary}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              Explore Projects
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17l9.2-9.2M17 17V8H8" />
              </svg>
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in Touch
            </a>
            {profile.resumeUrl && profile.resumeUrl !== '#' && (
              <a
                className="btn btn-ghost"
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="View Resume (opens in new tab)"
              >
                <span>View Resume</span>
                <svg
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>

          {/* Social Quick Links */}
          <div className="hero-socials" aria-label="Social links">
            <span className="hero-social-label">Connect:</span>
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label="GitHub Profile"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span>GitHub</span>
              </a>
            )}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label="LinkedIn Profile"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn</span>
              </a>
            )}
            <a
              href={`mailto:${profile.email}`}
              className="social-pill"
              aria-label="Email Aparnamol"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
