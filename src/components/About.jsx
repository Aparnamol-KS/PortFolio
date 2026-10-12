import { about } from '../data/content'

function About() {
  // Support both multi-element arrays and newline-separated strings
  const paragraphs = about.body.flatMap((item) =>
    typeof item === 'string' ? item.split(/\n\s*\n/) : [item]
  )

  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container section-split">
        <header className="section-header">
          <p className="eyebrow">{about.eyebrow || '01 · Profile'}</p>
          <h2 id="about-title">{about.heading}</h2>
          <p className="section-subtext">
            Background, core engineering principles, and current technical pursuits.
          </p>

          {about.stats && (
            <div className="about-stats-grid" aria-label="Education and Academic Highlights">
              {about.stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </header>

        <div className="prose">
          {paragraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          <div className="about-card-callout">
            <h3 className="callout-title">Core Focus &amp; Approach</h3>
            <p className="callout-text">
              I prioritize clean code structure, modular architecture, and intuitive human-AI interfaces. Rather than treating AI as an isolated model, I integrate it into cohesive full-stack web applications that solve real-world tasks with reliability and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
