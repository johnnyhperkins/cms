import React, { useState } from 'react';
import '../../../styles/sidebar.scss';
import logo from '../../../images/borderbox-logo.svg';
import FormInput from './form_input';

const SideBar = () => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div
      className={'sidebar' + (isHidden ? ' hidden' : '')}>
      <button onClick={() => setIsHidden(!isHidden)} className='side-bar-toggle'>
        <i className='material-icons'>navigate_next</i>
      </button>
      <header>
        <img className='logo' src={logo} />
        <h3>Form title</h3>
      </header>
      <main>
        <FormInput />
      </main>
      <footer>
        <button>Save</button>
        <button>Cancel</button>
      </footer>
    </div>
  );
};

export default SideBar;