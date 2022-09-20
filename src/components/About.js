import { Icon } from "@iconify/react";

const About = () => {
  return (
    <div className='About py-5 container' id='about'>
      <h2 className='text-center mb-5 text-uppercase'>About me</h2>
      <div className='row justify-content-center'>
        <div className=' col-xl-3 col-lg-4 mb-3'>
          <img src='images/headshot.jpg' alt='Jake Burton' className='rounded' />
        </div>
        <div className="col-xl-9 col-lg-8 mb-3">
          <div className="card">
            <div className="card-header">
              <Icon icon='emojione:red-circle' width='10' className='me-2' />
              <Icon icon='twemoji:yellow-circle' width='10' className='me-2' />
              <Icon icon='twemoji:green-circle' width='10' className='me-2' />
            </div>
            <div className="card-body">
              <p>I'm Jake Burton, a professional software engineer in Greenville, SC. Since 2016, I have been learning as much as I can about computer science and how it can solve everyday problems. With nearly 5 years of professional experience, I still find it amazing how there is so much for me to learn.</p>
              <p>I am always looking to learn and challenge myself with new technologies. In my free time I enjoy video games, movies, sports(football and basketball), and spending time with my pets. I also enjoy trying new experiences, as I almost always feel invigorated when stepping out of my comfort zone.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;