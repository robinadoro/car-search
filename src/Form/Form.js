import React, {useState} from 'react'

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submittedData, setSubmitedData]=useState([]);
  

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  const [errors,setErrors]= useState([])

  function handleSubmit (event){
    event.preventDefault();

    if(firstName.length>0){
      const formData ={firstName: firstName,lastName: lastName,};
      const dataArray=[...submittedData, formData];
    setSubmitedData(dataArray);
    setFirstName("")
    setLastName("")
    setErrors([])
    }
    else{
      setErrors(["First Name is required"])
    }
   
    // props.sendFormDataSomewhere(formData);
    // setFirstName ("");
    // setLastName("");
  }

  const listOfSubmissions=submittedData.map((data, index)=>{
    return (
      <div key={index}>
        {data.firstName} {data.lastName}

      </div>
    )
  })



  return (
   <div>
      <form className='flex-col p-4 mt-20' onSubmit={handleSubmit}>
        <label className='mb-8'>First Name</label>
        <br></br>
      <input type="text" required className='rounded-md mb-4' placeholder='Your First Name' onChange={handleFirstNameChange} value={firstName} />
      <br></br>
      <label>Second Name</label>
      <br></br>
      <input type="text" required className='rounded-md mb-4' placeholder='Your Second Name' onChange={handleLastNameChange} value={lastName} />
      <br></br>
     
      <label>Your email</label>
      <br></br>
      <input type='email' required className='rounded-md mb-4' placeholder='Enter Email'></input>
      <br></br>
      <label>Message</label>
      <br></br>
      <textarea className="rounded-md mb-4" placeholder='Type Your Message Here'></textarea>
      <br></br>
      

      <button type="submit" className='bg-red-600 text-white rounded-md p-2'>Submit</button>
    </form>

    {/* conditionally render error messages */}

    {
      errors.length>0
      ?errors.map((error, index)=>(<p key={index} style={{color:"red"}}>{error}</p>)):null
    }
    <h3>Thank you  {firstName}  for your Message</h3>
    {listOfSubmissions}

   </div>
  );
}

export default Form