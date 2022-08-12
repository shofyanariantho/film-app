import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import { Table, Button, Container, Alert, Form } from 'react-bootstrap'
import { AiFillPlusCircle, AiOutlineEdit, AiFillDelete, AiOutlineDelete } from "react-icons/ai";
import { UserContext } from "../../utils/UserContext";

const TableGenreComponent = () => {
    const [genres, setGenres] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const { user } = useContext(UserContext);

    useEffect(() => {
        getGenres();
        deleteGenre();
    }, []);

    const getGenres = async () => {
        const { data: res } = await axios.get("http://localhost:8000/genre",
            { withCredentials: true }
        )
            .then(async (response) => {
                const genres = response.data.genres;
                setGenres(genres)
            });
    };
    const deleteGenre = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/genre/${id}`, { withCredentials: true })
            setGenres(genres.filter(genre => genre.id !== id))
            setMessage('Genre Delete successfully')
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message)
            }
        }
    }

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
                        <a href="/creategenre" className="btn btn-warning">
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
                            <th>Genre</th>
                        </tr>
                    ) : (
                        <tr>
                            <th>No</th>
                            <th>Genre</th>
                            <th>Actions</th>
                        </tr>
                    )}
                </thead>
                <tbody>
                    {genres.filter((genre) => {
                        if (searchTerm === "") {
                            return genre;
                        } else if (
                            genre.genreName
                                .toLowerCase()
                                .includes(searchTerm.toLocaleLowerCase())
                        ) {
                            return genre;
                        }
                    }).map((genre, index) => {
                        if (!user) {
                            return (
                                <tr key={genre.id}>
                                    <td>{index + 1}</td>
                                    <td>{genre.genreName}</td>
                                </tr>
                            );
                        }
                        return (
                            <tr key={genre.id}>
                                <td>{index + 1}</td>
                                <td>{genre.genreName}</td>

                                <td className="col-md-3">
                                    <Button
                                        href={`updategenre/${genre.id}`}
                                        variant="default"
                                        size="sm"
                                    >
                                        <AiOutlineEdit className="fs-5 me-2" />
                                        Edit
                                    </Button>
                                    <Button
                                        onClick={() => deleteGenre(genre.id)}
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

export default TableGenreComponent