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
    
      <div className='flex border-2 border-rose-600'>
        <div className='p-2 mt-10 border-2 border-green-600 '>
            <form className='brand_pick'>
                <label>name of brand</label>
                <Select options={options} className="w-60"/>
                <label>Name of Car</label> <br></br>
                <input type="text" />
            </form>            
        </div>

        <div className='p-2 mt-10 border-black'>
            <form className='model_pick border-black'>
                <label>name of model</label> <br></br>
                <input type="text" /> <br></br>
                <label>Description</label> <br></br>
                <input type="text" />    
            </form>            
        </div>       
      
    </div>
  )

}

export default User