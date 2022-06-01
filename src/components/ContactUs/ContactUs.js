import React from 'react'
import Contact from "../../assets/img6.png"
import Form from '../../Form/Form';

function ContactUs() {
  return (
    <div className='flex bg-neutral-400 '>
        <div className=''>
            <h1 className='text-center text-2xl p-8 '>Contact us</h1>
            <img src={Contact} alt=""contact/>


        </div>
        <div >
            <Form/>
        </div>
    </div>
  )
}

export default ContactUs