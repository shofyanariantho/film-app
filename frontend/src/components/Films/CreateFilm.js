import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const CreateFilm = () => {
    const [judul_film, setJudulFilm] = useState('');
    const [description, setDescription] = useState('');
    const [rating_film, setRatingFilm] = useState('');
    const [user_id, setUserId] = useState([]);
    const [actor_id, setActorId] = useState([]);
    const [genre_id, setGenreId] = useState([]);
    const [director_id, setDirectorId] = useState([]);
    const redirect = useNavigate();

    const saveFilms = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/film/create",
                {
                    judul_film,
                    description,
                    rating_film,
                    user_id,
                    actor_id,
                    genre_id,
                    director_id
                },
                { withCredentials: true }
            );
            redirect("/createfilm");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDirectors();
        getActors();
        getGenre();
    }, []);

    const getActors = async () => {
        const { data: res } = await axios.get("http://localhost:8000/actor",
        )
        setActorId(res)
    };

    const getGenre = async () => {
        const { data: res } = await axios.get("http://localhost:8000/genre",
        )
        setGenreId(res.genres)
    };

    const getDirectors = async () => {
        const { data: res } = await axios.get("http://localhost:8000/director",
        )
        setDirectorId(res.directors)
    };

    return (
        <Form onSubmit={saveFilms}>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Title
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type="text"
                        placeholder="Title Film"
                        value={judul_film}
                        onChange={(e) => setJudulFilm(e.target.value)}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                    Description
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        as="textarea"
                        style={{ height: '100px' }}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Rating
                </Form.Label>
                <Col sm={10}>
                    <Form.Control
                        type="number"
                        placeholder="Rating Film"
                        value={rating_film}
                        onChange={(e) => setRatingFilm(e.target.value)}
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Actor
                </Form.Label>
                <Col sm={10}>
                    <Form.Select aria-label="Default select example">
                        {actor_id.map((actor, index) => {
                            return (
                                <option
                                    key={index}
                                    value={actor_id}
                                    onChange={(e) => setActorId(e.target.value)}
                                >
                                    {actor.actorName}
                                </option>
                            )
                        }
                        )}
                    </Form.Select>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Genre
                </Form.Label>
                <Col sm={10}>
                    <Form.Select aria-label="Default select example">
                        {genre_id.map((genre, index) => {
                            return (
                                <option
                                    key={index}
                                    value={genre_id}
                                    onChange={(e) => setGenreId(e.target.value)}
                                >
                                    {genre.genreName}
                                </option>
                            )
                        }
                        )}
                    </Form.Select>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Director
                </Form.Label>
                <Col sm={10}>
                    <Form.Select aria-label="Default select example">
                        {director_id.map((director, index) => {
                            return (
                                <option
                                    key={index}
                                    value={director_id}
                                    onChange={(e) => setDirectorId(e.target.value)}
                                >
                                    {director.directorName}
                                </option>
                            )
                        }
                        )}
                    </Form.Select>
                </Col>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default CreateFilm