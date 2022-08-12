import React from "react";
import {
  ActorList,
  Footer,
  NavbarComponent,
  PageTitle,
} from "../../components";
import bgformdirector from "../../assets/images/bg/bg.jpg";
import { Card } from "react-bootstrap";
import { GrClose } from "react-icons/gr";

const ListActorPage = () => {
  return (
    <div style={{ backgroundImage: `url(${bgformdirector})` }}>
      <NavbarComponent />
      <div className="container h-100 py-5">
        <div className="row h-100">
          <div className="col-12 mx-auto">
            <Card style={{ height: "100vh" }}>
              <Card.Header className="align-items-center">
                <div className="d-flex justify-content-between">
                  <Card.Title>
                    <b>Reviewed Actors</b>
                  </Card.Title>

                  <a href="/" className="text-dark">
                    <GrClose className="fs-5" />
                  </a>
                </div>
              </Card.Header>

              {/* Content */}
              <div className="card-body p-0">
                <div className="table-responsive">
                  <ActorList />
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

export default ListActorPage;
