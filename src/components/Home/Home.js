import React from 'react'
import Benz from "../../assets/benz.png"

function Home() {
  return (
    <div className='home bg-neutral-400'>
        <div className='py-9 text-right '>
            <h3 className='text-3xl'>Know your Dream Car</h3>
            <h5 className='text-xl'>Get the manufacturer information
                 for  your dream car.
            </h5>
        </div>
        <div>
            <img src={Benz} alt='benz' className='ml-44 p-8'/>
        </div>
        
    </div>
  )
}

export default Home