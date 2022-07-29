import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {AiFillGithub,AiFillFacebook,AiFillInstagram, AiFillTwitterCircle,AiFillLinkedin} from 'react-icons/ai'
function FooterComponent() {
  return (
    <div>
    <Card className="text-center bg-dark mt-5">
        <Card.Header className='fs-4 text-white'>
            <AiFillGithub className='me-3'/>
            <AiFillFacebook className='me-3'/>
            <AiFillInstagram className='me-3'/>
            <AiFillTwitterCircle className='me-3'/>
            <AiFillLinkedin className='me-3'/>
        </Card.Header>
            <Card.Body>
                <Card.Title className='text-white'>MOVIEW (MOVIE REVIEW)</Card.Title>
                <Card.Text className='text-white-50' role="button">
                    <span className='me-4'>Home</span>
                    <span className='me-4'>Help</span>
                    <span className='me-4'>Contact Us</span>
                    <span className='me-4'>Comunity</span>
                    <span className='me-4'>Privasy Policy</span>
                </Card.Text>
            </Card.Body>
        <Card.Footer className="text-muted">@2022 by Kelompok 4 Harisenin.com</Card.Footer>
    </Card>
    </div>
  )
}

export default FooterComponent