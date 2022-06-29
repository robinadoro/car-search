import React from 'react'
import { Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Benz from "../../assets/benz.png"
import Brands from "../../assets/brands.jpg"
import Models from "../../assets/models.jpg"
import "./Home.css"

function Home() {
  return (
    <div className='home bg-neutral-400 '>
        <div className=' text-right flex'>
            <div className=''>
              <h3 className='text-3xl mr-12 mt-20 '>Know your Dream Car</h3>
              <h5 className='text-x ml-16 mr-24'>Get the manufacturer information
                  for  your dream car.
              </h5>
            </div>

            <div>
              <img src={Benz} alt='benz' className=' '/>
            </div>
            
            
        </div>
      <Container className='card flex ml-16 '>
        <Card  className="p-2">
          <Card.Img variant="top" src={Brands} alt='brands' className="w-28  h-28 rounded-2xl " />
          <Card.Body className='p-1 ' > 
            <Link to="/user">
              <button className='rounded-lg bg-red-500 p-2'>Get Brands</button>

            </Link>           
          </Card.Body>
        </Card>

        <Card  className="p-2" >
          <Card.Img variant="top" src={Models} alt='models' className="h-28 w-28 rounded-2xl " />
          <Card.Body className='p-1 '>            
            <button  className='rounded-lg bg-red-500 p-2'>Get Models</button>
            
          </Card.Body>
        </Card>
      </Container>
       
       
        
    </div>
  )
}

export default Home