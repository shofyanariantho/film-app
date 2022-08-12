import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Form, Button, Table } from "react-bootstrap";
import { AiFillPlusCircle, AiOutlineEdit, AiOutlineDelete, AiOutlineUpload } from "react-icons/ai";
import { UserContext } from "../../utils/UserContext";

const DirectorList = () => {
    const [Directors, setDirectors] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const { user } = useContext(UserContext);

    useEffect(() => {
        getDirectors();
        deleteDirector();
    }, []);

    const getDirectors = async () => {
        const { data: res } = await axios.get("http://localhost:8000/director",
            { withCredentials: true }
        )
            .then(async (response) => {
                const directors = response.data.directors;
                setDirectors(directors)
            });
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
        <div className="p-3">
            {!user ? (
                <Form.Control
                    className="py-1 mb-3"
                    type="string"
                    placeholder="Search..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            ) : (
                <div className="row mb-3 align-items-center justify-content-between">
                    <div className="col-6 align-items-center">
                        <a href="/createdirector" className="btn btn-warning">
                            <AiFillPlusCircle className="fs-4 pb-1" />
                            <span>
                                {" "}
                                <b>Add New</b>
                            </span>
                        </a>
                    </div>

                    <div className="col-6">
                        <Form.Control
                            type="string"
                            placeholder="Search..."
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            )}

            <Table hover>
                <thead>
                    {!user ? (
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                        </tr>
                    ) : (
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    )}
                </thead>
                <tbody>
                    {Directors.filter((director) => {
                        if (searchTerm === "") {
                            return director;
                        } else if (
                            director.directorName
                                .toLowerCase()
                                .includes(searchTerm.toLocaleLowerCase())
                        ) {
                            return director;
                        }
                    }).map((director, index) => {
                        if (!user) {
                            return (
                                <tr key={director.id}>
                                    <td>{index + 1}</td>
                                    <td>{director.directorName}</td>
                                </tr>
                            );
                        }
                        return (
                            <tr key={director.id}>
                                <td>{index + 1}</td>
                                <td>{director.directorName}</td>

                                <td className="col-md-3">
                                    <Button
                                        href={`createdirectorimage/${director.id}`}
                                        variant="default"
                                        size="sm"
                                    >
                                        <AiOutlineUpload className="fs-5 me-2" />
                                        Image
                                    </Button>
                                    <Button
                                        href={`updatedirector/${director.id}`}
                                        variant="default"
                                        size="sm"
                                    >
                                        <AiOutlineEdit className="fs-5 me-2" />
                                        Edit
                                    </Button>
                                    <Button
                                        onClick={() => deleteDirector(director.id)}
                                        variant=""
                                        size="sm"
                                    >
                                        <AiOutlineDelete className="fs-5 me-2" />
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default DirectorList