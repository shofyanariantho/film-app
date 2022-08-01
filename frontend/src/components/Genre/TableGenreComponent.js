import React, { useState, useEffect } from 'react'
import { Table, Button, Container, Alert} from 'react-bootstrap'
import { BsPlusLg } from 'react-icons/bs'
import { BsTrash2 } from 'react-icons/bs'
import { BsPencil } from 'react-icons/bs'
import axios from 'axios'

const TableGenreComponent = () => {
    const [genres, setGenres] = useState([])
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
        const getGenres = async () => {
            const { data: res } = await axios.get("http://localhost:8000/genre");
            setGenres(res.genres)
        }
        getGenres()
    }, [])

    const deleteGenre = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/genre/${id}`, { withCredentials: true })
            setGenres(genres.filter(genre => genre.id !== id))
            setMessage('Genre Delete successfully')
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message)
            }
        }
    }

    return (
        <>
        <Container>
            <div className='row'>
                <div className='col-md-11'>
                    <h3 className='mt-4'>GENRE TABLE </h3>
                </div>
                <div className='col-md-1 mt-4'>
                    <Button href='/AddGenre' variant='primary' size='md' className='mb-2'>
                        <BsPlusLg size={20}/>
                    </Button>
                </div>
            </div>
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
            <Table striped>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Genre</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {genres.map((genres, index) => (
                        <tr key={genres.id}>
                            <td>{index + 1}</td>
                            <td>{genres.genreName}</td>
                            <td>
                                <Button href={`/EditGenre/${genres.id}`} variant="warning" size="sm">
                                    <BsPencil size={20}/>
                                </Button>
                            </td>
                            <td>
                                <Button 
                                    onClick={(handleShow) => deleteGenre(genres.id)}
                                    variant="danger" 
                                    size="sm"
                                >
                                    <BsTrash2 size={20}/>
                                </Button>
                            </td>
                        </tr>
                    ))}   
                </tbody>
            </Table>
        </Container>
        </>
    )
}

export default TableGenreComponent