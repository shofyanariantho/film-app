import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Table, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { AiFillPlusCircle, AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { UserContext } from "../../utils/UserContext";

const ListFilm = () => {
  const [Films, setFilms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    getFilms();
    deleteActor();
  }, []);

  const getFilms = async () => {
    axios
      .get("http://localhost:8000/film", {
        withCredentials: true,
      })
      .then(async (response) => {
        const films = response.data;
        setFilms(films);
      });
  };

  const deleteActor = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/film/${id}`, {
        withCredentials: true,
      });
      getFilms();
    } catch (error) {}
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
            <a href="/createfilm" className="btn btn-warning">
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
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Genre</th>
            <th>Actor</th>
            <th>Director</th>
            {!user ?? <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {Films.filter((film) => {
            if (searchTerm === "") {
              return film;
            } else if (
              film.actorName
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase()) ||
              film.judulFilm
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase()) ||
              film.directorName
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return film;
            }
          }).map((film, index) => {
            return (
              <tr key={film.id}>
                <td>{index + 1}</td>
                <td>{film.judulFilm}</td>
                <td>{film.description}</td>
                <td>{film.ratingFilm}</td>
                <td>{film.genreName}</td>
                <td>{film.actorName}</td>
                <td>{film.directorName}</td>
                {!user ?? (
                  <td className="col-md-2">
                    <Button
                      href={`createfilmimage/${film.id}`}
                      variant="primary"
                      size="sm"
                    >
                      Upload Image
                    </Button>{" "}
                    <Button
                      href={`updatefilm/${film.id}`}
                      variant="success"
                      size="sm"
                    >
                      <AiOutlineEdit className="fs-5" />
                    </Button>{" "}
                    <Button
                      onClick={() => deleteActor(film.id)}
                      variant="danger"
                      size="sm"
                    >
                      <AiFillDelete className="fs-5" />
                    </Button>{" "}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ListFilm;
