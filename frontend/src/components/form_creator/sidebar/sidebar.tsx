import React from 'react';
import './sidebar.scss';

export default () => {
  return (
    <div className='sidebar'>
      <header>
        <h3>Form title</h3>
        <button>
          Close
        </button>
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