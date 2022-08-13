import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";

const UpdateFilms = () => {
  const [judul_film, setJudulFilm] = useState("");
  const [description, setDescription] = useState("");
  const [rating_film, setRatingFilm] = useState(null);
  const [review, setReview] = useState("");
  const [actor_id, setActorId] = useState(null);
  const [actorArray, setActorArray] = useState([]);
  const [genre_id, setGenreId] = useState(null);
  const [genreArray, setGenreArray] = useState([]);
  const [director_id, setDirectorId] = useState(null);
  const [directorArray, setDirectorArray] = useState([]);
  const redirect = useNavigate();
  const { id } = useParams();
  // console.log("http://localhost:8000/film/" + id);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/film/" + id,
        {
          judul_film,
          description,
          rating_film,
          actor_id: parseInt(actor_id),
          director_id: parseInt(director_id),
          genre_id: parseInt(genre_id),
          review,
        },
        {
          withCredentials: true,
        }
      );
      redirect("/listFilm");
    } catch (error) {
      console.log(error);
      // setError(error.response.data);
    }
  };

  useEffect(() => {
    const getFilmById = async () => {
      const { data: res } = await axios.get(`http://localhost:8000/film/${id}`);
      setJudulFilm(res.judulFilm);
      setDescription(res.description);
      setRatingFilm(res.ratingFilm);
      setActorId(res.actorId);
      setGenreId(res.genreId);
      setDirectorId(res.directorId);
      setReview(res.review);
    };
    getFilmById();
    getActors();
    getDirectors();
    getGenre();
  }, []);

  const getActors = async () => {
    const { data: res } = await axios.get("http://localhost:8000/actor");
    setActorArray(res);
  };

  const getGenre = async () => {
    const { data: res } = await axios.get("http://localhost:8000/genre");
    setGenreArray(res.genres);
  };

  const getDirectors = async () => {
    const { data: res } = await axios.get("http://localhost:8000/director");
    setDirectorArray(res.directors);
  };

  console.log(actor_id);

  return (
    <Form onSubmit={handleUpdate}>
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
            required
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
            style={{ height: "100px" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Rating
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            name="rating_film"
            type="number"
            step=".01"
            placeholder="Enter Rating"
            value={rating_film}
            onChange={(e) => setRatingFilm(e.target.value)}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Actor
        </Form.Label>
        <Col sm={10}>
          <Form.Select
            aria-label="Default select example"
            value={actor_id}
            onChange={(e) => setActorId(e.target.value)}
            required
          >
            {actorArray.map((actor, index) => {
              return (
                <option key={index} name="actor_id" value={actor.id}>
                  {actor.actorName}
                </option>
              );
            })}
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Genre
        </Form.Label>
        <Col sm={10}>
          <Form.Select
            aria-label="Default select example"
            value={genre_id}
            onChange={(e) => setGenreId(e.target.value)}
            required
          >
            {genreArray.map((genre, index) => {
              return (
                <option key={index} value={genre.id}>
                  {genre.genreName}
                </option>
              );
            })}
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Director
        </Form.Label>
        <Col sm={10}>
          <Form.Select
            aria-label="Default select example"
            value={director_id}
            onChange={(e) => setDirectorId(e.target.value)}
            required
          >
            {directorArray.map((director, index) => {
              return (
                <option key={index} value={director.id}>
                  {director.directorName}
                </option>
              );
            })}
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Review
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            as="textarea"
            style={{ height: "100px" }}
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </Col>
      </Form.Group>

      <div className="d-flex justify-content-between">
        <Button
          variant="secondary"
          type="submit"
          className="me-2"
          href="/listfilm"
        >
          Cancel
        </Button>
        <Button variant="warning" type="submit">
          <b>Submit</b>
        </Button>
      </div>
    </Form>
  );
};

export default UpdateFilms;
