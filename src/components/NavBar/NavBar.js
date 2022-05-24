import React from 'react'
import {NavLink} from "react-router-dom"


const linkStyles = {
  
  display:"inline-block",
  // width:"90px",
  padding:"27px",
  margin:"3 9px 9px",
  // background:"blue",
  textDecoration:"none",
  color:"white",
  

}

// Define the NavBar component

function NavBar(){
  return(
    <div className='bg-red-600 flex justify-between  space-x-4'>
      <div></div>
      <div className="flex justify-between mx-6 mr-5">
      <NavLink to="/"
      exact 
      style={linkStyles}
      // activeStyle={{background:"darkblue",}}
      >
        Home

      </NavLink>
      <NavLink to="/About"
      exact
      style={linkStyles}
      activeStyle={{background:"darkblue",}}
      
      >
        About
      </NavLink>

      <NavLink 
      to="/CarDetails"
      exact
      style={linkStyles}
      activeStyle={{backround:"darkblue",}}
      >
        Search Car
      </NavLink>
      <NavLink 
      to="/ContactUs"
      exact
      style={linkStyles}
      activeStyle={{backround:"darkblue",}}
      >
        Contact Us
      </NavLink>
      <NavLink to="/Login" 
      exact
      style={linkStyles}
      activeStyle={{background:"darkblue",}}
      
      className="ml-7">
        Login
      </NavLink>
      </div>


    </div>
  )
}
export default NavBar;  