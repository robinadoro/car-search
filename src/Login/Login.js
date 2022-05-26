import { async } from '@firebase/util'
import React, { useState } from 'react'
import './Login.css'


 function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
   
    const register = async() => {}
const signin = async() => {}
const signout = async() => {}
    return (
      <form>
        <h3>Sign Up</h3>
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
          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </div>
        
      </form>
    )
  }
  export default Login;  