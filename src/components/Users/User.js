// import { isDisabled } from '@testing-library/user-event/dist/utils'
import React from 'react'
// import { Container } from 'react-bootstrap'
import Select from 'react-select'
import firebaseConfig from '../Firebase/Firebase-config'
import { Link } from 'react-router-dom'

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
    <div>
      <div className='flex   ' >
        <div className=' mt-10  text-center
         bg-neutral-100
    mr-4 ml-36 h-64 align-self  '>
            <form className='brand_pick p-4'>
                <label>name of brand</label>
                <Select options={options} className="w-60 text-center ml-8"/>
                <label>Name of Car</label> <br></br>
                <input type="text" /> <br></br>
                <button className='rounded-lg bg-red-500 p-2 mt-8'>Create Brand</button>

            </form>            
        </div>

        <div className='p-2 mt-10  text-center bg-neutral-100
        mr-28 ml-28 '>
            <form className='model_pick '>
                <label>name of model</label> <br></br>
                <input type="text" /> <br></br>
                <label>Description</label> <br></br>
                <input type="text" /> <br></br>
                <button className='rounded-lg bg-red-500 p-2 mt-8'>Create Brands</button>

            </form>            
        </div> 
              
      
    </div>
    <div className='text-center pt-8'>

    <Link to="/">
    <button onClick={() => firebaseConfig.auth().signOut()} 
    className="bg-red-600 text-white rounded-md p-2 " >Sign out</button>

    </Link>
    

    </div>
    </div>
    

    
  )

}

export default User