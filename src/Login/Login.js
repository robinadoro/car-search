// import { async } from '@firebase/util'
import React, { useState } from 'react'
import {async, signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../components/Firebase/Firebase-config'



 function Login() {
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
   
    
const signin = async() => {
  try {
    const response = await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
    console.log(response)
  } catch (error) {
    console.log(error.message);
  }
}
// const signout = async() => {}
    return (
      <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => setSignInEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(event) => setSignInPassword(event.target.value)}
          />
        </div>
        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={signin}>
            Login
          </button>
        </div>
        
      </form>
    )
  }
  export default Login;  