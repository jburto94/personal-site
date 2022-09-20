import { Icon } from "@iconify/react"

const Footer = () => (
  <div className='py-5 Footer'>
    <div className='container my-5'>
      <div class='d-flex justify-content-center mb-4'>
        <a href='https://github.com/jburto94' target='_blank' className='me-5 text-white'><Icon icon="akar-icons:github-fill" inline={true} className='footer-icon' /></a>
        <a href='mailto:jakeburtondev@gmail.com' className='text-white'><Icon icon="clarity:email-line" inline={true} className='footer-icon' /></a>
      </div>
      <p className='text-center'>Copyright &copy; Jake Burton</p>
    </div>
  </div>
);

export default Footer;