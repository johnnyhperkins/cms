import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('hi');
  const [password, setPassword] = useState('');

  const handleInput(field: string) {
    return (e) => {
      if (field === 'username') {
        setUsername(e.target.value);
      } else if (field === 'password') {
        setPassword(e.target.value)
      }
    };
  }

  return (
    <div className='login-container'>
      <h2>Log In</h2>
      <form>
        <input
          type="text"
          placeholder='Username'
          value='test' />
        <input
          type='password'
          placeholder='Password'/>
        <button>Log In</button>
      </form>
    </div>
  )
}

export default Login;