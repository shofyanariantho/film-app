import React from "react";
import { useState } from "react";
import axios from "axios";
import { Form, Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreateActor = () => {
  const [actor_name, setActorName] = useState("");
  const redirect = useNavigate();

  const saveActor = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/actor/create",
        { actor_name },
        { withCredentials: true }
      );
      redirect("/listactor");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form onSubmit={saveActor} bg="dark" className="p-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Actor Name</Form.Label>
          <Form.Control
            type="string"
            value={actor_name}
            onChange={(e) => setActorName(e.target.value)}
            placeholder="Enter full name"
            required
          />
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Button
            variant="secondary"
            type="submit"
            className="me-2"
            href="/listactor"
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

export default CreateActor;
