import React from 'react'
import Carsearch from "../../assets/carsearch.png"

function CarDetails() {
  return (
    <div className='bg-red-600 h-screen'>
        <div className=''>
          <h1 className='text-center p-5 text-3xl'>Search Car</h1>          
        </div>
        <div className='flex'>
          <>
          <img src={Carsearch} alt="car" className='w-80 ml-9'/>
          </>
          <div className="">
          <input type="text" className='h-10 p-3 ml-72 mt-12' placeholder="Search Car" id="search_car"></input>
          <div className='mt-0 ml-28 border-white-400 h-14'> </div>

          </div>
          
          
        </div>
    </div>
  )
}

export default CarDetails