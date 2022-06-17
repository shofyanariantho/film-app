import React from 'react'
import { Button, Card, CardGroup, Container } from 'react-bootstrap'
import { BsFilm } from 'react-icons/bs'
import { HiOutlineUserGroup } from 'react-icons/hi'
import '../style/AddComponent.css'

function DashboardComponent() {
  return (
    <Container>
    <CardGroup className='my-5'>
        <Card className='border-0'>
            <Card.Body>
                <Card.Title  className='mb-0 fs-1 fw-bold text-danger'>MOVIEW.</Card.Title>
                <Card.Text  className=' fs-1 fw-bold text-black'>
                    MOVIE & REVIEW
                </Card.Text>
                <h4 className='text-black-50'>
                    a website for reviewing films or actors
                </h4>
                <Button variant='primary' className='w-50 fs-5 mt-3'> Get Review </Button>
            </Card.Body>
        </Card>
        <Card className='border-0'>
            <Card.Body>
                <Card.Img src="https://www.istreamer.com/wp-content/uploads/2019/08/IMDb-TV-thegem-blog-default.jpg" />
            </Card.Body>
        </Card>
    </CardGroup>
    <div>
        <div className="title_style bg-primary ">
            <p className='text-white'>Come on give your rating</p>
            <div className="content_style">
                <p className='desc_style'><BsFilm className='icons_group'/>Add Film & Rating</p>
                <p className='desc_style'><HiOutlineUserGroup className='icons_group'/>Add Actor & Director</p>
            </div>
        </div>
    </div>
    </Container>
  )
}

export default DashboardComponent