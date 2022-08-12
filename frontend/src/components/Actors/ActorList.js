import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Form, Table } from 'react-bootstrap';
import { UserContext } from "../../utils/UserContext";
import { AiFillDelete, AiFillPlusCircle, AiOutlineEdit } from 'react-icons/ai';

const ActorList = () => {
    const [actors, setActors] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const { user } = useContext(UserContext);

    useEffect(() => {
        getActors();
        deleteActor();
    }, []);

    const getActors = async () => {
        const { data: res } = await axios.get("http://localhost:8000/actor", {
            withCredentials: true
        })
            .then(async (response) => {
                const actors = response.data;
                setActors(actors);
            });
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
                        <a href="/createactor" className="btn btn-warning">
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
                        .map((actor, index) => {
                            if (!user) {
                                return (
                                    <tr key={actor.id}>
                                        <td>{index + 1}</td>
                                        <td>{actor.actorName}</td>
                                    </tr>
                                );
                            }
                            return (
                                <tr key={actor.id}>
                                    <td>{index + 1}</td>
                                    <td>{actor.actorName}</td>
                                    <td className="col-md-2">
                                        <Button
                                            href={`createfilmimage/${actor.id}`}
                                            variant="primary"
                                            size="sm"
                                        >
                                            Upload Image
                                        </Button>{" "}
                                        <Button
                                            href={`updatefilm/${actor.id}`}
                                            variant="success"
                                            size="sm"
                                        >
                                            <AiOutlineEdit className="fs-5" />
                                        </Button>{" "}
                                        <Button
                                            onClick={() => deleteActor(actor.id)}
                                            variant="danger"
                                            size="sm"
                                        >
                                            <AiFillDelete className="fs-5" />
                                        </Button>{" "}
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </Table>
        </div>
    )
}

export default ActorList