import React from 'react'
import Benz from "../../assets/benz.png"

function Home() {
  return (
    <div className='home bg-neutral-400 h-screen '>
        <div className='py-9 text-right '>
            <h3 className='text-3xl mr-24 mt-24 p-2'>Know your Dream Car</h3>
            <h5 className='text-xl p-4 mr-12'>Get the manufacturer information
                 for  your dream car.
            </h5>
        </div>
        <div className='mx-24'>
            <img src={Benz} alt='benz' className='ml-24 mb-4 p-0'/>
        </div>
        
    </div>
  )
}

export default Home