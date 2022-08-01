import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Form, Table } from 'react-bootstrap';

const ActorList = () => {
    const [actors, setActors] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

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
    return (
        <div>
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
                <Table striped bordered hover>
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

    )
}

export default ActorList