import React from "react";
import {
  Footer,
  NavbarComponent,
  PageTitle,
  TableGenreComponent,
} from "../../components";
import bgformdirector from "../../assets/images/bg/bg.jpg";
import { Card } from "react-bootstrap";
import { AiOutlineCloseCircle } from "react-icons/ai";

const GenrePages = () => {
  return (
    <div style={{ backgroundImage: `url(${bgformdirector})` }}>
      <NavbarComponent />
      <div className="container h-100">
        <div className="row h-100 my-5">
          <div className="col-12 mx-auto">
            <Card style={{ height: "100vh" }}>
              <Card.Header className="align-items-center">
                <div className="d-flex justify-content-between">
                  <Card.Title>
                    <b>Reviewed Genres</b>
                  </Card.Title>

                  <a href="/" className="text-dark">
                    <AiOutlineCloseCircle className="fs-4" />
                  </a>
                </div>
              </Card.Header>

              {/* Content */}
              <div className="card-body p-0">
                <div className="table-responsive">
                  <TableGenreComponent />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GenrePages;
