import { experienceData } from "../data";
import { Icon } from "@iconify/react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div className='Experience py-5' id='experience'>
      <div className='container my-5'>
        <h2 className='mb-5 text-center text-uppercase'>Experience</h2>
        <VerticalTimeline>
          {experienceData.map(({ title, date, company, techStack }, i) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentArrowStyle={i % 2 !== 0 ? { borderRight: '7px solid white' } : {borderleft: '7px solid white'}}
              date={date}
              iconStyle={{ background: '#405d53', color: '#fff' }}
              icon={techStack.length > 0 ? <Icon icon="ic:baseline-work" /> : <Icon icon="ion:school" />}
            >
              <h3 className="vertical-timeline-element-title">{title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{company}</h4>
              <div className='mt-3'>
                {techStack.map(stack => (
                  <span className='badge rounded experience-badge me-2' key={stack}>{stack}</span>
                ))}
              </div>
            </VerticalTimelineElement>
          ))};

          <VerticalTimelineElement
            iconStyle={{ background: '#405d53', color: '#fff' }}
            icon={<Icon icon="bxs:hourglass-top" />}
          />
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experience;