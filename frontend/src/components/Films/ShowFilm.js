import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Image, Navbar, Badge } from "react-bootstrap";
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
  const [review, setReview] = useState("");
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
    setReview(res.review);
    console.log(review);
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
            className="fs-2 fw-bold text-black"
            style={{ textTransform: "uppercase" }}
          >
            {judulFilm}
          </Navbar.Brand>
          <div className="d-flex flex-row float-right">
            <div className="me-3">
              <p className="mb-0">MOVIEW. RATING</p>
              <h2 variant="body" className="w-100 fs-4 text-black">
                <AiFillStar className="text-warning mb-1" /> {ratingFilm}{" "}
              </h2>
            </div>
          </div>
        </Container>
      </Navbar>

      <Container>
        <div className="row pb-2">
          <div className="col-md-5">
            <figure className="position-relative">
              <Image
                src={`http://localhost:8000/images/film/${filmImage}`}
                className="img-fluid"
              />
            </figure>
          </div>
          <div className="col-md-7">
            <h5 className="text-black py-1 border-bottom">
              <Badge bg="secondary" className="my-2 px-4 py-2">
                <b>{genreName.toUpperCase()}</b>
              </Badge>
            </h5>
            <h5 className="text-black py-4 border-bottom">{description}</h5>
            <h5 className="text-black py-1 border-bottom">
              <span className="text-muted text-sm">Director</span>
              <Button
                variant="link"
                className="text-decoration-none text-dark fs-5"
                onClick={() => handleDirector(`${directorId}`)}
              >
                <b>{directorName.toUpperCase()}</b>
              </Button>
            </h5>
            <h5 className="text-black py-1 border-bottom">
              <span className="text-muted">Actor</span>
              <Button
                variant="link"
                className="text-decoration-none text-dark fs-5 "
                onClick={() => handleActor(`${actorId}`)}
              >
                <b>{actorName.toUpperCase()}</b>
              </Button>
            </h5>

            <h5 className="text-dark py-4">{review}</h5>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ShowFilm;
