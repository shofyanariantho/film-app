import React from "react";
import {
  CreateFilm,
  Footer,
  NavbarComponent,
  PageTitle,
} from "../../components";
import bgformdirector from "../../assets/images/bg/bgformdirector.jpg";

const CreateFilmPage = () => {
  return (
    <div style={{ backgroundImage: `url(${bgformdirector})` }}>
      <NavbarComponent />
      <div className="container mt-5">
        <div className="card border">
          {/* Page Title */}
          <PageTitle title="Add Movie Review" />

          {/* Content */}
          <div className="card-body p-3">
            <CreateFilm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateFilmPage;
