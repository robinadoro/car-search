import React from 'react'
import Blackman from "../../assets/blackman.png"

function About() {
  return (
    <div className='flex'>
        <div className=''>
            <h1 className='text-4xl text-center p-10 mt-9' >About Us</h1>
            <p className='ml-28'>lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br></br> 
Nemo fugit consectetur nihil labore assumenda accusamus <br></br> 
ratione aut cumque<br></br> 
incidunt ut ducimus in similique cum exercitationem dicta earum,<br></br> 
error placeat itaque culpa delectus alias doloribus odit expedita deserunt? <br></br> 
Ex repellendus iste consequuntur at et est architecto alias natus perspiciatis <br></br> 
corrupti a totam error quam</p>
        </div>
        <div className='ml-28 mt-20 w-auto h-auto p-10'>
            <img src={Blackman} alt="blackman" className=''/>
        </div>
    </div>
  )
}

export default About