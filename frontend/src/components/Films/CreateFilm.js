import axios from "axios";
import jwtDecode from "jwt-decode";
import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";

const CreateFilm = () => {
  const [actorArray, setActorArray] = useState([]);
  const [genreArray, setGenreArray] = useState([]);
  const [directorArray, setDirectorArray] = useState([]);
  const [formData, setFormData] = useState({});
  const redirect = useNavigate();
  const {user} = useContext(UserContext);
  const decoded = jwtDecode(user);

  useEffect(() => {
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

    getDirectors();
    getActors();
    getGenre();
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((v) => ({ ...v, [name]: value }));
    console.log(formData);
  };

  const saveFilms = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/film/create",
        {
          ...formData,
          actor_id: parseInt(formData.actor_id),
          genre_id: parseInt(formData.genre_id),
          director_id: parseInt(formData.director_id),
          user_id: decoded.userId,
        },
        {
          withCredentials: true,
        }
      );
      redirect("/listFilm");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={saveFilms}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Title
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            name="judul_film"
            type="text"
            placeholder="Film Title"
            value={formData.judul_film || ""}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Description
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            name="description"
            as="textarea"
            style={{ height: "100px" }}
            value={formData.description || ""}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Rating
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            name="rating_film"
            type="number"
            placeholder="Enter Rating"
            value={formData.rating_film}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Actor
        </Form.Label>
        <Col sm={10}>
          <Form.Select
            name="actor_id"
            aria-label="Default select example"
            onChange={handleChange}
            value={formData.actor_id || ""}
          >
            <option value={""} selected disabled>
              Choose Actor...
            </option>
            {actorArray.map((v, i) => {
              return (
                <option key={i} value={v.id}>
                  {v.actorName}
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
            name="genre_id"
            aria-label="Default select example"
            onChange={handleChange}
            value={formData.genre_id}
          >
            <option value={""} selected disabled>
              Choose Genre...
            </option>

            {genreArray.map((v, i) => {
              return (
                <option key={i} value={v.id}>
                  {v.genreName}
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
            name="director_id"
            aria-label="Default select example"
            onChange={handleChange}
            value={formData.director_id}
          >
            <option value={""} selected disabled>
              Choose Director...
            </option>

            {directorArray.map((v, i) => {
              return (
                <option key={i} value={v.id}>
                  {v.directorName}
                </option>
              );
            })}
          </Form.Select>
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Review
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            as="textarea"
            placeholder="Leave a review here"
            style={{ height: '100px' }}
          />
        </Col>
      </Form.Group>
      
      
      <Button variant="secondary" href="/" className="me-2">
        Cancel
      </Button>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CreateFilm;
