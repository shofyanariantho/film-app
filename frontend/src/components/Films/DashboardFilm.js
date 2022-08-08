import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
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
    <Container className="pb-5">
      <h1 className=" p-2" id="Trending">
        TRENDING MOVIES
      </h1>
      <Row>
        {Films.map((result, index) => {
          return (
            <Col md={4} className="movieWrapper" key={index}>
              <Card
                className="movieImage"
                style={{ cursor: "pointer" }}
                onClick={() => handleFilm(`${result.id}`)}
              >
                <Image
                  src={`http://localhost:8000/images/film/${result.filmImage}`}
                  alt={result.judulFilm}
                  className="images"
                />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title
                      className="text-center"
                      style={{ textTransform: "uppercase" }}
                    >
                      {result.judulFilm}
                    </Card.Title>
                    <Card.Text className="text-left">
                      {result.description}
                    </Card.Text>
                    <Card.Text className="text-left">
                      {result.ratingFilm}
                    </Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default DashboardFilm;
