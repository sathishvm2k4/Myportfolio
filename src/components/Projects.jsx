import { Link } from 'react-router-dom';
import projects from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <h2>Selected Work</h2>
        <p>Explore the key projects I built using Java, PHP, MySQL, and cloud technologies.</p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.tools}</span>
          </div>
        ))}
      </div>

      <Link className="project-link-button" to="/works" target="_blank" rel="noreferrer">
        Open Works Page
      </Link>
    </section>
  );
}
