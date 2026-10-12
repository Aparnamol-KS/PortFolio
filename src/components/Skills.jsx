import { skillGroups } from '../data/content'

function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">02 · Technical Toolkit</p>
          <h2 id="skills-title">Skills &amp; Technologies</h2>
          <p className="section-description">
            A practical overview of programming languages, frameworks, AI/ML tools, and databases I actively use in my projects.
          </p>
        </header>

        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="card skill-card" key={group.title}>
              <div className="skill-card-top">
                <span className="skill-category-badge">{group.category}</span>
                <h3 className="skill-group-title">{group.title}</h3>
              </div>
              <ul className="chip-list" aria-label={`${group.title} skills`}>
                {group.items.map((item) => (
                  <li className="chip-item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
