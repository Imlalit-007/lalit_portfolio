import "../styles/Projects.css";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { projectsData } from "../components/ProjectCard/projectsData.js";

function Projects() {
  return (
    <div className='projects'>
      <div className='projects-heading'>
        <h4>My</h4>
        <h1>Projects</h1>
      </div>
      <div className='project-container'>
        {projectsData.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
