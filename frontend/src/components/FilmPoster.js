import React from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import TBDCD from '../assets/images/Action/TheBatmanDCDarkness.jpg'
import Batman from '../assets/images/SliderPoster/batman.jpg'
import '../style/FilmPoster.css'
import { AiOutlinePlayCircle } from 'react-icons/ai'

function FilmPoster() {
  return (
        <Container>
            <figure className='position-relative'>
                <Image src={TBDCD}  className="images"/>
                <Image src={Batman}  className="images"/>
                <figcaption>
                    <p className='caption'><AiOutlinePlayCircle className='icons_film'/>Play Trailer</p>
                </figcaption> 
            </figure>
            <Button variant="outline-secondary" className='rounded-pill me-2 mb-3'>Action</Button>
            <Button variant="outline-secondary" className='rounded-pill me-2 mb-3'>Super Hero</Button>
            <h5 className='text-black-50 pb-4 border-bottom'>When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.</h5>
            <h5 className='text-black pb-1 border-bottom'>
                    Director
                    <Button variant="link" className='text-decoration-none fs-5 mb-2'>Nama Director</Button>
                    ·
                    <Button variant="link" className='text-decoration-none fs-5 mb-2'>Nama Director</Button>
            </h5>
            <h5 className='text-black pb-1 border-bottom'>
                Actor
                <Button variant="link" className='text-decoration-none fs-5 mb-2'>Nama Actor</Button>
                ·
                <Button variant="link" className='text-decoration-none fs-5 mb-2'>Nama Actor</Button>
            </h5>
        </Container>
  )
}

export default FilmPoster