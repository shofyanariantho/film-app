import React from 'react'
import {  Button, Container, Image, Navbar, NavItem } from 'react-bootstrap'
import ActorsImages from '../assets/images/Actors/actors.jpg'

function ActorComponent() {
  return (
    <Container className='border my-2 border-success'>
        <Navbar collapseOnSelect expand="lg" className='text-black border-bottom'>            
                <Navbar.Brand href="#home" className='fs-3 '> Emilia Clarke </Navbar.Brand>
                <NavItem> 
                    <Button variant='link' className='border-end px-2 py-0'> Prosedur </Button> 
                    <Button variant='link' className='border-end px-2 py-0'> Actress </Button> 
                    <Button variant='link' className='px-2 py-0'> Soundtrack </Button> 
                </NavItem>
        </Navbar>
        <Image src={ActorsImages} className="images my-2"/>
        <p className='my-3 fs-6'>British actress Emilia Clarke was born in London and grew up in Oxfordshire, England. Her father was a theatre sound engineer and her mother is a businesswoman. Her father was working on a theatre production of "Show Boat" and her mother took her along to the performance. This is when, at the age of 3, her passion for acting began. From 2000 to 2005, she attended St. Edward's School of Oxford, where she appeared in two school plays. She went on to study acting at the prestigious Drama Centre London, where she took part in 10 plays. During this time, Emilia first appeared on television with a guest role in the BBC soap opera Doctors (2000).

        In 2010, after graduating from the Drama Centre London, Emilia got her first film role in the television movie Triassic Attack (2010). In 2011, her breakthrough role came in when she replaced fellow newcomer Tamzin Merchant on Game of Thrones (2011) after the filming of the original pilot episode. From March to April 2013, she played Holly Golightly in a Broadway production of "Breakfast at Tiffany's". She played Sarah Connor in Terminator Genisys (2015), opposite Arnold Schwarzenegger, Jai Courtney and Jason Clarke. She played the lead role of Louisa Clark in the romantic comedy blockbuster Me Before You (2016) and went on to star in Solo: A Star Wars Story (2018) as Qi'ra.
        
        Since her rise to prominence, Emilia has contributed to various charitable organisations. In 2018, she was named as the ambassador to the Royal College of Nursing because of her efforts in raising awareness about the working condition of the nurses in the UK. In 2019, she was named as the first ambassador for the global Nursing Now campaign. In 2019, in a personal essay published in The New Yorker, Emilia revealed that she had suffered from two life threatening brain aneurysms in 2011 and 2013. She launched her own charity SameYou in 2019, which aims to broaden neurorehabilitation access for young people after a brain injury or stroke.</p>

    </Container>
  )
}

export default ActorComponent