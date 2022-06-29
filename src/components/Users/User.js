// import { isDisabled } from '@testing-library/user-event/dist/utils'
import React from 'react'
// import { Container } from 'react-bootstrap'
import Select from 'react-select'

function User () {

    const options = [
        { value: '', label: 'Select Brand...', isDisabled: true },
        { value: 'toyota', label: 'Toyota' },
        { value: 'honda', label: 'Honda' },
        { value: 'nissan', label: 'Nissan' },
        { value: 'audi', label: 'Audi' },
        { value: 'bmw', label: 'BMW' },
        { value: 'mercedes', label: 'Mercedes' },
        { value: 'volkswagen', label: 'Volkswagen' },
        { value: 'subaru', label: 'Subaru' },
        { value: 'lexus', label: 'Lexus' },
        { value: 'kia', label: 'Kia' },
        { value: 'other', label: 'Other' }

    ]
  return (
    
      <div className='flex border-2 border-rose-600  ' >
        <div className=' mt-10  text-center
         bg-neutral-100
    mr-4 ml-36 h-64 align-self  '>
            <form className='brand_pick p-4'>
                <label>name of brand</label>
                <Select options={options} className="w-60 text-center ml-8"/>
                <label>Name of Car</label> <br></br>
                <input type="text" />
                <button className='rounded-lg bg-red-500 p-2'>Create Model</button>

            </form>            
        </div>

        <div className='p-2 mt-10  text-center bg-neutral-100
        mr-28 ml-28 '>
            <form className='model_pick '>
                <label>name of model</label> <br></br>
                <input type="text" /> <br></br>
                <label>Description</label> <br></br>
                <input type="text" /> 
                <button className='rounded-lg bg-red-500 p-2'>Create Brands</button>

            </form>            
        </div>       
      
    </div>
  )

}

export default User