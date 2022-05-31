import React from 'react'
import Benz from "../../assets/benz.png"

function Home() {
  return (
    <div className='home bg-neutral-400 h-screen '>
        <div className=' text-right flex'>
            <div>
            <h3 className='text-3xl mr-12 mt-24 '>Know your Dream Car</h3>
            <h5 className='text-x ml-10 mr-24'>Get the manufacturer information
                 for  your dream car.
            </h5>

            </div>
            <div>
            <img src={Benz} alt='benz' className=' '/>
            </div>
            
            
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="rgb(239 68 68)" fill-opacity="1" 
          d="M0,160L120,181.3C240,203,480,245,720,218.7C960,192,1200,96,1320,48L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            
            </div>
        <div className='mx-24'>
        
        </div>
        
    </div>
  )
}

export default Home