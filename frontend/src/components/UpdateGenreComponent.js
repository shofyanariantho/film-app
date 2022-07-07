import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import { Form, Col, Container, Row, Button, Alert } from 'react-bootstrap'

const UpdateGenreComponent = () => {
    const [genre_name, setGenreName] = useState('')
    const [message, setMessage] = useState('')
    const redirect = useNavigate()
    const { id } = useParams()
    const [error, setError] = useState('')

    useEffect(() => {
        const getGenreById = async () => {
            const { data: res } = await axios.get(`http://localhost:8000/genre/${id}`, { withCredentials: true })
            setGenreName(res.genreName)
        }
        getGenreById()
    }, [ id ])

    const updateGenre = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:8000/genre/${id}`, {
                genre_name,
            },
            { withCredentials: true }
            )
            redirect('/Genre')
            setMessage('Genre updated successfully')
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message)
            }
        }
    }

    return (
    <Container>
        <h3 className='mt-4'>UPDATE GENRE </h3>
        <div className='row'>
                <div className='col-12'>
                    {error ? (
                        <Alert variant='danger'>
                            {error}
                        </Alert>
                    ) : null
                    }
                    {message ? (
                        <Alert variant='primary'>
                            {message}
                        </Alert>
                    ) : null
                    }
                </div>
            </div>
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
                    />
                </Col>
            </Form.Group>
            <div className='row'>
                <div className='col-6'>
                    <Button href='/Genre' variant='secondary' type='reset' size='md' >
                        Cancel
                    </Button>
                    <Button variant='primary' type='submit' size='md' className='m-3'>
                        Update
                    </Button>
                </div>
            </div>
        </Form>
    </Container>
    )
}

export default UpdateGenreComponent