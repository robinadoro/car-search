import React from 'react'
import Contact from "../../assets/img6.png"
import Form from '../../Form/Form';

function ContactUs() {
  return (
    <div>
        <div className=''>
            <h1 className='text-2xl pl-9'>Contact us</h1>
            <img src={Contact} alt=""contact/>


        </div>
        <div>
            <Form/>
        </div>
    </div>
  )
}

export default ContactUs