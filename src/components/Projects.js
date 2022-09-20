import { projectsData } from "../data";
import ProjectCard from './ProjectCard';

const Projects = () => (
  <div className='Projects py-5' id='projects'>
    <div className='container'>
      <h2 className='mt-4 mb-5 text-uppercase text-center'>My Personal Projects</h2>
      <div className='row justify-content-center mb-3'>
        {projectsData.map(project => (
          <div className='col-xl-4 col-lg-6 mb-4' key={project.title}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;