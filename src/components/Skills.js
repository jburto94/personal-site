import { Icon } from '@iconify/react';
import { skillsData } from '../data.js';

const Skills = () => {
  return (
    <div className='Skills py-5 bg-dark' id='skills'>
      <div className='container'>
        <h2 className='text-white text-center text-uppercase my-5'>Skills</h2>
        <ul className='list-inline text-center mx-auto skill-icons mb-5'>
          {skillsData.map(({ skill, icon }) => (
            <li className='list-inline-item mx-4 text-center skill-container mb-3 =py-3' key={icon}>
              <Icon icon={icon} color='white' className='skill-icon' />
              <p className='text-center text-white mb-0'>{skill}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;