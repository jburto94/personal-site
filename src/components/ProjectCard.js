import { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

const ProjectCard = ({ project }) => {
  const [showProject, setShowProject] = useState(false);

  const { title, image } = project;
  const projectModalClose = () => {
    setShowProject(false);
  }

  const handleProjectOpen = () => {
    setShowProject(true);
  }

  return (
    <div>
      <div className='ProjectCard bg-white p-2 text-center' onClick={handleProjectOpen}>
        <img src={image} alt={title} />
        <p className='my-3'>{title}</p>
      </div>

      <ProjectDetailsModal
        project={project}
        show={showProject}
        onHide={projectModalClose}
      />
    </div>
  );
};

export default ProjectCard;