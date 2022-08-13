import React from "react";
import { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreateDirector = () => {
  const [director_name, setDirectorName] = useState("");
  const redirect = useNavigate();

  const saveDirectors = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/director/create",
        { director_name },
        { withCredentials: true }
      );
      redirect("/listdirector");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form onSubmit={saveDirectors} bg="dark" className="p-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Director Name</Form.Label>
          <Form.Control
            type="string"
            value={director_name}
            onChange={(e) => setDirectorName(e.target.value)}
            placeholder="Enter full name"
            required
          />
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Button
            variant="secondary"
            type="submit"
            className="me-2"
            href="/listdirector"
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

export default CreateDirector;
