import React from "react";
import { Button, Card } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

function Footer() {
  return (
    <footer className="m-0">
      <div className="bg-dark text-white text-center">
        <div className="row">
          <div className="col py-3">
            <AiFillGithub className="me-3" size={24} />
            <AiFillFacebook className="me-3" size={24} />
            <AiFillInstagram className="me-3" size={24} />
            <AiFillTwitterCircle className="me-3" size={24} />
            <AiFillLinkedin className="me-3" size={24} />
          </div>
        </div>
        <div className="row">
          <div className="col py-2">
            <h5>MOVIEW. (MOVIE REVIEW)</h5>
          </div>
        </div>
        <div className="text-white-50">
          <span className="me-4">Home</span>
          <span className="me-4">Help</span>
          <span className="me-4">Contact Us</span>
          <span className="me-4">Comunity</span>
          <span className="me-4">Privasy Policy</span>
        </div>
        <div className="row py-3">
          <div className="col text-muted">
            @2022 by Kelompok 4 Harisenin.com
          </div>
        </div>
      </div>

      {/*
      <Card className="text-center bg-dark">
        <Card.Header className="fs-4 text-white">
          <AiFillGithub className="me-3" />
          <AiFillFacebook className="me-3" />
          <AiFillInstagram className="me-3" />
          <AiFillTwitterCircle className="me-3" />
          <AiFillLinkedin className="me-3" />
        </Card.Header>
        <Card.Body>
          <Card.Title className="text-white">MOVIEW (MOVIE REVIEW)</Card.Title>
          <Card.Text className="text-white-50" role="button">
            <span className="me-4">Home</span>
            <span className="me-4">Help</span>
            <span className="me-4">Contact Us</span>
            <span className="me-4">Comunity</span>
            <span className="me-4">Privasy Policy</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          @2022 by Kelompok 4 Harisenin.com
        </Card.Footer>
      </Card>
      */}
    </footer>
  );
}

export default Footer;
