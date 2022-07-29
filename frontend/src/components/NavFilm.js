import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

function NavFilm() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className='text-black'>
    <Container>
    <Navbar.Brand href="#home" className='fs-1 fw-bold'>THE BATMAN DC DARKNESS </Navbar.Brand>
        <div className='d-flex flex-row'>
            <div className='me-3'>        
                <p className='mb-0 text-center'>MOVIEW. RATING</p>
                <Button variant='body' className='w-100 fs-4'><AiFillStar className='text-warning mb-1'/> 9/10 </Button>
            </div>
            <div className='ms-3'>
                <p className='mb-0 text-center'>YOUR RATING</p>
                <Button variant='body' className='w-10 fs-4 text-primary'><AiOutlineStar className='mb-1'/> Rate </Button>
            </div>
        </div>
    </Container>
  </Navbar>
    </div>
  )
}

export default NavFilm;