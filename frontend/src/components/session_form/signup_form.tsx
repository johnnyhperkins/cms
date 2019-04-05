import React, { useState } from 'react';

function Signup() {
  return (
    <div className='signup-container'>
      <h2>Sign Up</h2>
      <form>
        <input
          type='text'
          placeholder='Email'/>
        <input
          type='text'
          placeholder='Username'/>
        <input
          type='password'
          placeholder='Password'/>
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup;