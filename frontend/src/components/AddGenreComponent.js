import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddGenreComponent = () => {
    const [genre_name, setGenreName] = useState('')
    const redirect = useNavigate()

    const saveGenre = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8000/genre/create', 
            { genre_name },
            { withCredentials: true }
            )
            redirect('/')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Container>
            <h3 className='mt-4'>ADD GENRE </h3>
            <Form onSubmit={saveGenre}>
                <Form.Group as={Row} className="mt-4 mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Genre
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control 
                        type="string" 
                        value={genre_name} 
                        onChange={(e) => setGenreName(e.target.value)}
                        placeholder="Genre" />
                    </Col>
                </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
            </Form>
        </Container>
    )
}

export default AddGenreComponent