import React, { useState, useEffect } from 'react'
import { Table, Button, Container} from 'react-bootstrap'
import axios from 'axios'

const TableGenreComponent = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/genre')
            .then(res => {
                setGenres(res.data.genres);
            })
            .catch(err => console.log(err));
    }, [])

    const deleteGenre = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/genre/${id}`, { withCredentials: true });
            setGenres(genres.filter(genre => genre.id !== id));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <h3 className='mt-4'>GENRE TABLE </h3>
            <div className='row'>
                <div className='col'>
                    <Button href='/AddGenre' variant='primary' size='md' className='mb-2'>
                        Add Genre
                    </Button>
                </div>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Genre</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {genres.map((genre, index) => (
                        <tr key={genre.id}>
                            <td>{index + 1}</td>
                            <td>{genre.genreName}</td>
                            <td>
                                <Button href={`/EditGenre/${genre.id}`} variant="primary" size="sm">
                                    Edit
                                </Button>
                                <Button 
                                    onClick={() => deleteGenre(genre.id)}
                                    variant="danger" 
                                    size="sm"
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}   
                </tbody>
            </Table>
        </Container>
    )
}

export default TableGenreComponent