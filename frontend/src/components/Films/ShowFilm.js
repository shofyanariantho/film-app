import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Image, Navbar } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";

const ShowFilm = () => {
  const [judulFilm, setJudulFilm] = useState("");
  const [ratingFilm, setRatingFilm] = useState("");
  const [filmImage, setFilmImage] = useState("");
  const [description, setDescription] = useState("");
  const [genreId, setGenreId] = useState("");
  const [genreName, setGenreName] = useState("");
  const [actorId, setActorId] = useState("");
  const [actorName, setActorName] = useState("");
  const [directorId, setDirectorId] = useState("");
  const [directorName, setDirectorName] = useState("");
  const { id } = useParams();
  const redirect = useNavigate();

  useEffect(() => {
    getfilmsById();
  }, []);

  const getfilmsById = async () => {
    const { data: res } = await axios.get(`http://localhost:8000/film/${id}`);
    setJudulFilm(res.judulFilm);
    setFilmImage(res.filmImage);
    setRatingFilm(res.ratingFilm);
    setDescription(res.description);
    setGenreId(res.genreId);
    setGenreName(res.genreName);
    setActorId(res.actorId);
    setActorName(res.actorName);
    setDirectorId(res.directorId);
    setDirectorName(res.directorName);
  };

  const handleDirector = (id) => {
    redirect(`/director/` + id);
  };

  const handleActor = (id) => {
    redirect(`/actor/` + id);
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="text-black">
        <Container>
          <Navbar.Brand
            className="fs-1 fw-bold text-black"
            style={{ textTransform: "uppercase" }}
          >
            {judulFilm}
          </Navbar.Brand>
          <div className="d-flex flex-row">
            <div className="me-3">
              <p className="mb-0 text-center">MOVIEW. RATING</p>
              <h2 variant="body" className="w-100 fs-4 text-black">
                <AiFillStar className="text-warning mb-1" /> {ratingFilm}/10{" "}
              </h2>
            </div>
          </div>
        </Container>
      </Navbar>

      <Container>
        <figure className="position-relative">
          <Image
            src={`http://localhost:8000/images/film/${filmImage}`}
            style={{ height: "800px" }}
          />
        </figure>
        <Button variant="outline-secondary" className="rounded-pill me-2 mb-3">
          {genreName.toUpperCase()}
        </Button>
        <h5 className="text-black-50 pb-4 border-bottom">{description}</h5>
        <h5 className="text-black pb-1 border-bottom">
          Director
          <Button
            variant="link"
            className="text-decoration-none fs-5 mb-2"
            onClick={() => handleDirector(`${directorId}`)}
          >
            {directorName.toUpperCase()}
          </Button>
        </h5>
        <h5 className="text-black pb-1 border-bottom">
          Actor
          <Button
            variant="link"
            className="text-decoration-none fs-5 mb-2"
            onClick={() => handleActor(`${actorId}`)}
          >
            {actorName.toUpperCase()}
          </Button>
        </h5>
      </Container>
    </div>
  );
};
export default ShowFilm;
