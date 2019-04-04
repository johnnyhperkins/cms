import React, { useState } from 'react';
import '../../../styles/sidebar.scss';
import logo from '../../../images/borderbox-logo.svg';

const SideBar = () => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div 
    className={'sidebar' + (isHidden ? ' hidden' : '')}>
        <button onClick={() => setIsHidden(!isHidden)}>
          <i className='material-icons'>navigate_next</i>
        </button>
      <header>
        <img className='logo' src={logo} />
        <h3>Form title</h3>
      </header>
      <main>
        <p>Hello</p>
      </main>
      <footer>
        <p>Bye</p>
      </footer>
    </div>
  );
};

export default SideBar;