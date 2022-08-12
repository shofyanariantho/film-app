import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddGenreComponent = () => {
  const [genre_name, setGenreName] = useState("");
  const redirect = useNavigate();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const saveGenre = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/genre/create",
        { genre_name },
        { withCredentials: true }
      );
      redirect("/listgenre");
      setMessage("Genre added successfully");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div>
      {error ? <Alert variant="danger">{error}</Alert> : null}
      {message ? <Alert variant="primary">{message}</Alert> : null}

      <Form onSubmit={saveGenre} className="p-3">
        <Form.Group className="mb-3">
          <Form.Label>Genre</Form.Label>
          {error ? <Alert variant="danger">{error}</Alert> : null}

          <Form.Control
            type="string"
            required
            value={genre_name}
            onChange={(e) => setGenreName(e.target.value)}
            placeholder="Genre"
          />
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
    </div>
  );
};

export default AddGenreComponent;
