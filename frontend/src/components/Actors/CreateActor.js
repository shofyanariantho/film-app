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
          <Form.Label>Actor</Form.Label>
          <Form.Control
            type="string"
            value={actor_name}
            onChange={(e) => setActorName(e.target.value)}
            placeholder="Enter name"
          />
        </Form.Group>

        <Button variant="secondary" type="submit" className="me-2" href="/">
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateActor;
