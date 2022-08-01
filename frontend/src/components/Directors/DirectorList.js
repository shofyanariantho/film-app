import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, Button, Table } from "react-bootstrap";

const DirectorList = () => {
    const [Directors, setDirectors] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

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
}

export default DirectorList