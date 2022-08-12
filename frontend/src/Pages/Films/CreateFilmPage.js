import React from "react";
import {
  CreateFilm,
  Footer,
  NavbarComponent,
  PageTitle,
} from "../../components";
import bgformdirector from "../../assets/images/bg/bgformdirector.jpg";
import { Card } from "react-bootstrap";

const CreateFilmPage = () => {
  return (
    <div style={{ backgroundImage: `url(${bgformdirector})` }}>
      <NavbarComponent />
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-12 mx-auto my-5">
            <Card>
              {/* Page Title */}
              <PageTitle title={<b>Add Movie Review</b>} />

              {/* Content */}
              <div className="card-body p-3">
                <CreateFilm />
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateFilmPage;
