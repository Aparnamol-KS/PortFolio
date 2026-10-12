import { education, experience } from '../data/content'

function ExperienceEducation() {
  return (
    <section className="section" id="experience" aria-labelledby="exp-edu-title">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">04 · Journey</p>
          <h2 id="exp-edu-title">Experience &amp; Education</h2>
          <p className="section-description">
            Hands-on technical internship experience and academic foundation in Artificial Intelligence &amp; Data Science.
          </p>
        </header>

        <div className="journey-grid">
          {/* Work / Internship Experience Column */}
          <div className="journey-column">
            <div className="column-header">
              <span className="column-icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </span>
              <h3 className="column-title">Internship Experience</h3>
            </div>

            <ol className="timeline">
              {experience.map((item) => (
                <li key={item.organization} className="timeline-item">
                  <div className="timeline-badge-dot" aria-hidden="true" />
                  <div className="timeline-meta">
                    <span className="timeline-period">{item.period}</span>
                    <span className="timeline-tag">{item.location}</span>
                  </div>
                  <h4 className="timeline-role">{item.role}</h4>
                  <p className="timeline-place">{item.organization}</p>
                  <p className="timeline-desc">{item.description}</p>

                  {item.highlights && (
                    <ul className="timeline-highlights">
                      {item.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}

                  {item.tech && (
                    <div className="timeline-tech">
                      <span className="tech-label">Stack:</span>
                      <ul className="chip-list chip-list-sm">
                        {item.tech.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Academic Education Column */}
          <div className="journey-column">
            <div className="column-header">
              <span className="column-icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </span>
              <h3 className="column-title">Academic Education</h3>
            </div>

            <ol className="timeline">
              {education.map((item) => (
                <li key={item.degree} className="timeline-item">
                  <div className="timeline-badge-dot" aria-hidden="true" />
                  <div className="timeline-meta">
                    <span className="timeline-period">{item.period}</span>
                    <span className="timeline-tag timeline-tag-accent">{item.grade}</span>
                  </div>
                  <h4 className="timeline-role">{item.degree}</h4>
                  <p className="timeline-place">{item.institution}</p>
                  <p className="timeline-location">{item.location}</p>
                  <p className="timeline-desc">{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceEducation
