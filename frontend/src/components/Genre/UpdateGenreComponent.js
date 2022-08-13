import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
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
            setGenreName(res.data.genreName)
        }
        getGenreById()
    }, [id])

    const updateGenre = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:8000/genre/${id}`, {
                genre_name,
            },
                { withCredentials: true }
            )
            redirect('/listgenre')
            setMessage('Genre updated successfully')
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message)
            }
        }
    }

    return (
        <Form onSubmit={updateGenre} className="p-3">
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
            <div className="d-flex justify-content-between">
                <Button
                    variant="secondary"
                    type="submit"
                    className="me-2"
                    href="/listgenre"
                >
                    Cancel
                </Button>
                <Button variant="warning" type="submit">
                    <b>Submit</b>
                </Button>
            </div>
        </Form>
    )
}

export default UpdateGenreComponent;