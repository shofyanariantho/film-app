import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Form, Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PageTitle from "../ComponentTambahan/PageTitle";

const CreateDirector = () => {
    const [director_name, setDirectorName] = useState("");
    const [Directors, setDirectors] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const redirect = useNavigate();

    useEffect(() => {
        getDirectors();
        deleteDirector();
    }, []);

    const getDirectors = async () => {
        const { data: res } = await axios.get("http://localhost:8000/director",
            { withCredentials: true }
        )
        console.log(res.directors)
        setDirectors(res.directors)
    };

    const deleteDirector = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/director/${id}`,
                { withCredentials: true }
            );
            getDirectors();
        } catch (error) {
        }
    };

    const saveDirectors = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/director/create",
                { director_name },
                { withCredentials: true }
            );
            redirect("/createdirector");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div >
            <Form onSubmit={saveDirectors} bg="dark" className="p-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="string"
                        value={director_name}
                        onChange={(e) => setDirectorName(e.target.value)}
                        placeholder="Enter name"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div className="card mt-2">
                {/* Page Title */}
                <PageTitle title="List Director" />
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
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Directors
                            .filter((director) => {
                                if (searchTerm === "") {
                                    return director;
                                } else if (
                                    director.directorName
                                        .toLowerCase()
                                        .includes(searchTerm.toLocaleLowerCase())
                                ) {
                                    return director;
                                }
                            })
                            .map((director, index) => (
                                <tr key={director.id}>
                                    <td>{index + 1}</td>
                                    <td>{director.directorName}</td>
                                    <td>
                                        <Button href={`createdirectorimage/${director.id}`} variant="info" size="sm">
                                            Upload Images
                                        </Button>{" "}
                                        <Button href={`updatedirector/${director.id}`} variant="success" size="sm">
                                            Edit
                                        </Button>{" "}
                                        <Button
                                            onClick={() => deleteDirector(director.id)}
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
};

export default CreateDirector;