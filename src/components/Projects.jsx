import { projects, profile } from '../data/content'

function ProjectLinks({ github, demo, title }) {
  // Use project-specific github if provided, otherwise fallback to profile github URL
  const repoUrl = github && github.trim() !== '' ? github : profile.github
  const hasDemo = Boolean(demo && demo.trim() !== '')

  if (!repoUrl && !hasDemo) {
    return (
      <div className="card-links card-links-empty">
        <span className="code-badge">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <span>Repository on request</span>
        </span>
      </div>
    )
  }

  return (
    <div className="card-links">
      {repoUrl && (
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-link btn-link-github"
          aria-label={`View GitHub repository for ${title}`}
        >
          <svg
            width="15"
            height="15"
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
      {hasDemo && (
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="btn-link btn-link-accent"
          aria-label={`Open live demo for ${title}`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          <span>Live Demo</span>
        </a>
      )}
    </div>
  )
}

function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">03 · Selected Works</p>
          <h2 id="projects-title">Featured Projects</h2>
          <p className="section-description">
            Practical applications highlighting AI integration, Retrieval-Augmented Generation, audio/video processing, and full-stack development.
          </p>
        </header>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="card project-card" key={project.title}>
              <div className="project-card-header">
                <div className="project-meta">
                  <span className="project-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="project-timeframe">{project.timeframe}</span>
                </div>
                {project.category && (
                  <span className="project-category-tag">{project.category}</span>
                )}
              </div>

              <h3 className="project-title">{project.title}</h3>

              <p className="project-desc">{project.description}</p>

              <div className="project-tags-wrap">
                <ul className="chip-list" aria-label={`Technologies used in ${project.title}`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>

              <ProjectLinks
                github={project.github}
                demo={project.demo}
                title={project.title}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
