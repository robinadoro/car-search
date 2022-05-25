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
      <form className='flex-col' onSubmit={handleSubmit}>
        <p><label>First Name</label></p>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <p><label>Second Name</label></p>
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <p><label>Your email</label></p>
      <input type='email' placeholder='Enter Email'></input>
      <p><label>Message</label></p>
      <textarea placeholder='Enter Your Message Here'></textarea>
      <br></br>
      

      <button type="submit">Submit</button>
    </form>

    {/* conditionally render error messages */}

    {
      errors.length>0
      ?errors.map((error, index)=>(<p key={index} style={{color:"red"}}>{error}</p>)):null
    }
    <h3>Thank you  {firstName}for your Message</h3>
    {listOfSubmissions}

   </div>
  );
}

export default Form