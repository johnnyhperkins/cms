import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Signup from './session_form/signup_form'
import Login from './session_form/login_form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Login/>
         <Signup/>
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;
