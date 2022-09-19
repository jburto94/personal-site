import { Icon } from '@iconify/react';
import TypingText from './TypingText';

const Header = () => {
  return (
    <header className='Header'>
      <div className='container d-flex align-items-center justify-content-center flex-column'>
        <Icon icon="fa-solid:laptop-code" color="white" width="150" />
        <h1 className='text-center text-white my-4'>Jake Burton</h1>
        <TypingText />
      </div>
    </header>
  );
};

export default Header;