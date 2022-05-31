import React,{useState} from 'react'
// import { async } from '@firebase/util'
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
      <form className='mt-4 ml-48 mr-48 p-2 text-center border-2 bg-blue-200 rounded-md'>
        <div className="mb-3">
          <label>Enter your names</label>
          <br></br>
          <input
            type="text"
            className=" p-3"
            placeholder="Enter names"
          />
        </div>
        
        <div className="mb-3">
          <label>Email address</label>
          <br></br>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => setSignUpEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <br></br>
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
