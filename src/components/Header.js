import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <header className='Header'>
      <div className='container d-flex align-items-center justify-content-center flex-column'>
        <Icon icon="fa-solid:laptop-code" color="white" width="150" />
        <h1 className='text-center text-white my-4'>Jake Burton</h1>
      </div>
    </header>
  );
};

export default Header;