import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Image, Navbar } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DirectorComponents = () => {
  const [directorName, setDirectorName] = useState("");
  const [directorImage, setDirectorImage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getDirectorById();
  }, []);

  const getDirectorById = async () => {
    const { data: res } = await axios.get(
      `http://localhost:8000/director/${id}`,
      {
        directorName,
        directorImage,
      }
    );
    setDirectorName(res.data.directorName);
    setDirectorImage(res.data.directorImage);
    console.log(res.data);
  };

  return (
    <div className="bg bg-dark Actor">
      <Container className="border py-2">
        <Navbar collapseOnSelect expand="lg" className="border-bottom">
          <Navbar.Brand href="#home" className="fs-3 text-white fw-bold">
            {" "}
            {directorName}{" "}
          </Navbar.Brand>
        </Navbar>
        <Image
          src={`http://localhost:8000/images/director/${directorImage}`}
          className="mt-3 mb-1"
          style={{ height: "70vh" }}
        />
      </Container>
    </div>
  );
};

export default DirectorComponents;
