import React,{useState} from 'react'
import { async } from '@firebase/util'
import {auth} from '../components/Firebase/Firebase-config'
import{createUserWithEmailAndPassword} from 'firebase/auth'
 function SignUp () {

    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const signup = async() => {
      try {
        const response = await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
        console.log(response)
      } catch (error) {
        console.log(error.message);
      }

    }
  
    return (
      <form>
        <h3>Register</h3>
        <div className="mb-3">
          <label>Enter your names</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter names"
          />
        </div>
        
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => setSignUpEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            onChange={(event) => setSignUpPassword(event.target.value)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={signup}>
            Sign Up
          </button>
        </div>
        
      </form>
    )
  }
  export default SignUp;
