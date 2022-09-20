import { Modal } from "react-bootstrap";
import { Icon } from "@iconify/react";

const ProjectDetailsModal = ({ project, show, onHide }) => {
  const { title, info, image, techStack, link, githubLink } = project;
  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby='project-modal'
      className='ProjectModal'
    >
      <div className='ProjectModalCard bg-white p-2'>
        <img src={image} alt={title} className='text-center' />
        <h4 className='mt-4 project-title'>{title}</h4>
        <p className='project-info'>{info}</p>
        <h5 className='stack-title mb-3'>Tech Stack</h5>
        <div className='d-flex flex-wrap'>
          {techStack.map(({tech, icon}) => (
            <div className='me-3 d-flex flex-column align-items-center' key={icon}>
              <Icon icon={icon} color='black' className='project-modal-icon' />
              <p className='text-center'>{tech}</p>
            </div>
          ))}
        </div>
        <div className='d-flex flex-wrap'>
          <a href={link} target='_blank' className='mb-3 me-4'>View it Live</a>
          <a href={githubLink} target='_blank'>View it on my Github</a>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;