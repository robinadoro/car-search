// import { async } from '@firebase/util'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../components/Firebase/Firebase-config'
import './Login.css'



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
      <form className='mt-4 ml-48 mr-48 p-2 text-center border-2 bg-neutral-400 '>       
        <div className="mb-3">
          <label className=''>Enter your Email address</label>
          <br></br>
          <input
            type="email"
            className="form-control rounded-md "
            placeholder="email"
            onChange={(event) => setSignInEmail(event.target.value)}
            
          />
        </div>
        <div className="mb-3">
        
          <label className='p-4'>Password</label>
          <br></br>
          <input
            type="password"
            className="form-control rounded-md"
            placeholder="Enter password"
            onChange={(event) => setSignInPassword(event.target.value)}
          />
        </div>
        
        <div className="d-grid ">
          <button type="submit" className="bg-red-600 text-white rounded-md p-2" onClick={signin}>
            Login
          </button>
        </div>
        
      </form>
    )
  }
  export default Login;  