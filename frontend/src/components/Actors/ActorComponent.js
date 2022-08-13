import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Image, Navbar } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ActorComponent = () => {
  const [actorName, setActorName] = useState("");
  const [actorImage, setActorImage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getActorById();
  }, []);

  const getActorById = async () => {
    const { data: res } = await axios.get(`http://localhost:8000/actor/${id}`, {
      actorName,
      actorImage,
    });
    setActorName(res.actorName);
    setActorImage(res.actorImage);
    console.log(res);
  };

  return (
    <div className="bg bg-dark Actor">
      <Container className="border py-2">
        <Navbar collapseOnSelect expand="lg" className="border-bottom">
          <Navbar.Brand href="#home" className="fs-3 text-white fw-bold">
            {" "}
            {actorName}{" "}
          </Navbar.Brand>
        </Navbar>
        <Image
          src={`http://localhost:8000/images/actor/${actorImage}`}
          className="img-fluid mt-3 mb-2"
          style={{ height: "70vh" }}
        />
      </Container>
    </div>
  );
};

export default ActorComponent;
