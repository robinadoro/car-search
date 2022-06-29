import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import Benz from "../../assets/benz.png"
import Brands from "../../assets/brands.jpg"
import Models from "../../assets/models.jpg"

function Home() {
  return (
    <div className='home bg-neutral-400'>
        <div className=' text-right flex'>
            <div>
            <h3 className='text-3xl mr-12 mt-24 '>Know your Dream Car</h3>
            <h5 className='text-x ml-16 mr-24'>Get the manufacturer information
                 for  your dream car.
            </h5>

            </div>
            <div>
            <img src={Benz} alt='benz' className=' '/>
            </div>
            
            
        </div>
      <Container className='flex ml-16 '>
        <Card  className="p-4 ">
          <Card.Img variant="top" src={Brands} alt='brands' className="w-40  h-40 rounded-2xl " />
          <Card.Body className='p-2 ml-2' >            
            <Button variant="outline-dark" className='rounded-lg'>Get Brands</Button>
          </Card.Body>
        </Card>

        <Card  className="p-4" >
          <Card.Img variant="top" src={Models} alt='models' className="h-40  rounded-2xl w-40" />
          <Card.Body className='p-2 ml-2'>            
            <Button variant="primary" className='rounded-lg'>Get Models</Button>
          </Card.Body>
        </Card>
      </Container>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="rgb(239 68 68)" fill-opacity="1" 
          d="M0,160L120,181.3C240,203,480,245,720,218.7C960,192,1200,96,1320,48L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            
        </div>
        <div className='mx-24'>
        
        </div>
        
    </div>
  )
}

export default Home