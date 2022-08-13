import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row, Badge } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";

const DashboardFilm = () => {
  const [Films, setFilms] = useState([]);
  const redirect = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getFilmsById();
  }, []);

  const getFilmsById = async () => {
    const { data: res } = await axios.get("http://localhost:8000/film", {
      withCredentials: true,
    });
    setFilms(res);
  };

  const handleFilm = (id) => {
    redirect(`/film/` + id);
  };

  return (
    <Container className="py-5">
      <Row>
        <div className="mb-5">
          <h1 className="text-center">
            <b>MOVIE REVIEW</b>{" "}
          </h1>
          <p className="text-center px-5">
            <b>Moview.</b> is a social platform for sharing your taste in film.
            Use it as a diary to record your opinion about films as you watch
            them.
          </p>
        </div>
        {Films.map((result, index) => {
          return (
            <Col md={4} key={index}>
              <Card
                className="mb-3"
                style={{ cursor: "pointer" }}
                onClick={() => handleFilm(`${result.id}`)}
              >
                <Card.Img
                  variant="top"
                  src={`http://localhost:8000/images/film/${result.filmImage}`}
                  alt={result.judulFilm}
                  className="images"
                ></Card.Img>
                <Card.Body>
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="text-warning">
                          <AiFillStar className="text-warning mb-1" />{" "}
                          {result.ratingFilm}{" "}
                        </div>
                        <Badge
                          bg="secondary"
                          text="white"
                          style={{ textTransform: "uppercase" }}
                        >
                          {result.genreName}
                        </Badge>{" "}
                      </div>
                      <Card.Title
                        className="text-center fw-bold"
                        style={{ textTransform: "uppercase" }}
                      >
                        {result.judulFilm}
                      </Card.Title>
                      <Card.Text className="text-left">
                        {result.description}
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default DashboardFilm;
