import React from 'react'
import {  Button, Container, Image, Navbar, NavItem } from 'react-bootstrap'
import Director from '../assets/images/Director/director.jpg'

function DirectorComponent() {
  return (
    <Container className='border-success border my-2'>
        <Navbar collapseOnSelect expand="lg" className='text-black border-bottom'>            
                <Navbar.Brand href="#home" className='fs-3 '> Matt Duffer </Navbar.Brand>
                <NavItem> 
                    <Button variant='link' className='border-end px-2 py-0'> Prosedur </Button> 
                    <Button variant='link' className='border-end px-2 py-0'> Writer </Button> 
                    <Button variant='link' className='px-2 py-0'> Director </Button> 
                </NavItem>
        </Navbar>
        <Image src={Director} className="images my-2"/>
        <p className='fs-5 mb-3 mt-0 pt-2 border-top'>Matt Duffer is a producer and writer, known for Stranger Things (2016), Wayward Pines (2015) and We All Fall Down (2005).</p>
    </Container>
  )
}

export default DirectorComponent