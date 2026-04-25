import { useState } from 'react';
import projects from '../data/projects';

export default function Works() {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);
  const selectedProject = projects.find((project) => project.id === selectedProjectId);

  return (
    <section className="works-page">
      <div className="works-header">
        <span>Works</span>
        <h2>Selected Projects</h2>
        <p>Click a project name on the left to preview the related image on the right.</p>
        <a className="works-back-button" href="/">
          Back to Home
        </a>
      </div>

      <div className="works-grid">
        <aside className="works-list">
          {projects.map((project) => (
            <button
              key={project.id}
              className={project.id === selectedProjectId ? 'works-item active' : 'works-item'}
              onClick={() => setSelectedProjectId(project.id)}
            >
              <span className="works-item-number">{project.id.split('-')[0]}</span>
              <div>
                <h3>{project.title}</h3>
                <p>{project.tools}</p>
              </div>
            </button>
          ))}
        </aside>

        <div className="works-preview">
          <div className="works-preview-card">
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <div className="works-preview-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
