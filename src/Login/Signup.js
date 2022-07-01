import React,{useState, useRef} from 'react'
// import { async } from '@firebase/util'
import {auth} from '../components/Firebase/Firebase-config'
import{createUserWithEmailAndPassword} from 'firebase/auth'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 function SignUp () {


    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();


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
      <Container className='d-flex align items-center justify-content-center'
      style={{minHeight:"100vh"}}
      >
        <form className='mt-4 ml-48 mr-48 p-2 text-center 
        border-2 bg-neutral-400
        rounded-md'
        style={{maxWidth:'400vh'}}>
        
        
        <div className="mb-3">
          <label>Email address</label>
          <br></br>
          <input
            type="email"
            required
            className="rounded-md"
            placeholder="Enter email"
            ref={emailRef}
            onChange={(event) => setSignUpEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <br></br>
          <input
            type="password"
            required
            className="rounded-md"
            ref={passwordRef}
            placeholder="Enter your password"
            onChange={(event) => setSignUpPassword(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <br></br>
          <input
            type="password"
            ref={passwordConfirmRef}
            required
            className="rounded-md"
            placeholder="Confirm your password"
            onChange={(event) => setSignUpPassword(event.target.value)}
          />
        </div>
        <div className="d-grid">
        <Link to="/user">
        <button type="submit" className="bg-red-600 text-white rounded-md p-2" onClick={signup}>
            Register
          </button>

        </Link>
          
        </div>

        <h4>Already have an account? Log In</h4>
        
      </form>

      </Container>
      
    )
  }
  export default SignUp;
