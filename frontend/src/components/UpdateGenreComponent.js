import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import { Form, Col, Container, Row, Button } from 'react-bootstrap'

const UpdateGenreComponent = () => {
    const [genre_name, setGenreName] = useState('')
    const redirect = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        const getGenreById = async () => {
            const { data: res } = await axios.get(`http://localhost:8000/genre/${id}`)
            setGenreName(res.genreName)
        }
        getGenreById()
    }, [])

    const updateGenre = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:8000/genre/${id}`, {
                genre_name,
            })
            redirect('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
    <Container>
        <h3 className='mt-4'>UPDATE GENRE </h3>
        <Form onSubmit={updateGenre}>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                <Form.Label column sm={2}>
                    Genre
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type="string"
                        value={genre_name}
                        onChange={(e) => setGenreName(e.target.value)}
                        placeholder="Genre"
                    />
                </Col>
            </Form.Group>
            <Button variant="primary" type="submit">
                        Update
            </Button>
        </Form>
    </Container>
    )
}

export default UpdateGenreComponent