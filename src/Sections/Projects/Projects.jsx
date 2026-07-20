import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import GitHubIcon from '@mui/icons-material/Github';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

import './Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: ' portfoilio v2',
      details: 'personal portfoilio',
      technology: 'React.js, Vite',
    },
    {
      id: 2,
      title: 'broadcast screen',
      details: 'broadcasting screens application',
      technology: 'React.js, Vite',
    },
    {
      id: 3,
      title: 'title',
      details: 'details',
      technology: 'technology',
    },
  ];
  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <h1>/ projects</h1>

        <div className="project-container">
          <ul className="project-grid">
            <li className="project-card">
              <div className="card-header">
                <FolderOpenIcon />
              </div>
              <span className="external-links">
                <a
                  class="github-icon"
                  href="https://github.com/marycamara"
                  target="_blank"
                  rel="noopener norferrer"
                >
                  <GitHubIcon />
                  <DriveFolderUploadIcon />
                </a>
              </span>
            </li>
          </ul>
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title} </h3>
              <p>{project.details}</p>
              <p>{project.technology}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
