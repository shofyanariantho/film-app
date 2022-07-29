import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Form, Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PageTitle from "../ComponentTambahan/PageTitle";

const CreateActor = () => {
  const [actor_name, setActorName] = useState("");
  const [actors, setActors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const redirect = useNavigate();

  useEffect(() => {
    getActors();
    deleteActor();
  }, []);

  const getActors = async () => {
    const { data: res } = await axios.get("http://localhost:8000/actor",
      { withCredentials: true }
    )
    console.log(res)
    setActors(res)
  };
  const deleteActor = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/actor/${id}`,
        { withCredentials: true }
      );
      getActors();
    } catch (error) {
    }
  };

  const saveActor = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/actor/create",
        { actor_name },
        { withCredentials: true }
      );
      redirect("/createactor");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div >
      <Form onSubmit={saveActor} bg="dark" className="p-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="string"
            value={actor_name}
            onChange={(e) => setActorName(e.target.value)}
            placeholder="Enter name"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="card mt-2">
        {/* Page Title */}
        <PageTitle title="List Actor" />
      </div>
      <div className="row p-3">
        <div className="col-4">
          <Form.Control
            type="string"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="p-3">
        <Table   striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {actors
              .filter((actor) => {
                if (searchTerm === "") {
                  return actor;
                } else if (
                  actor.actorName
                    .toLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                  return actor;
                }
              })
              .map((actor, index) => (
                <tr key={actor.id}>
                  <td>{index + 1}</td>
                  <td>{actor.actorName}</td>
                  <td>
                    <Button href={`createactorimage/${actor.id}`} variant="info" size="sm">
                      Upload Images
                    </Button>{" "}
                    <Button href={`updateactor/${actor.id}`} variant="success" size="sm">
                      Edit
                    </Button>{" "}
                    <Button
                      onClick={() => deleteActor(actor.id)}
                      variant="danger"
                      size="sm"
                    >
                      Delete
                    </Button>{" "}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default CreateActor;