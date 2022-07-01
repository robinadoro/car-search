import Carsearch from "../../assets/carsearch.png"
import React,{useState, useEffect} from 'react'


function CarDetails() {
  

  const [posts, setPosts] = useState([]);
  const [id, setId] = useState('');
  const [idFromButtonClick, setIdFromButtonClick] = useState('');
  
  const handleClick = () => {
    setIdFromButtonClick(id);
  }
  useEffect (() => {
    const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Host': 'cars-specs-automotive-catalog.p.rapidapi.com',
          'X-RapidAPI-Key': '8b0336f37dmsh68d55c86cd0cadap10fd2bjsnb0a0194ae6ca'
      }
  };
  
  // fetch('https://cars-specs-automotive-catalog.p.rapidapi.com/api/engine/282d8feb-2132-4e73-861b-e442c7295f9d', options)
  //     .then(response => response.json())

  //     .then(response => {
  //         // console.log(response);
  //         setPosts(response);
      // }
          // console.log(response)
          // setPosts(response)
      // 
        // )
      // .catch(err => console.error(err));

  },[idFromButtonClick]);

// console.log('ghsd',posts);
  const carInfo = (event)=>{
    event.preventDefault();
    console.log(  event.target.value)

  }

  
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
          
          <input type="text" className='h-10 p-3 ml-72 mt-12' placeholder="Search Car" value={id} onChange={e =>{setId(e.target.value)} }></input>
              <button type="button" onClick={handleClick} >Search Car</button>
          
              <div>
          {posts.map((post) => (
              <ul key={post.id}>
                  {post.brand}
                 
              </ul>
          ))}

      </div>
          <div className='mt-0 ml-28 border-white-400 h-14'> </div>

          </div>
          
          
        </div>
    </div>
  )
}

export default CarDetails