import React from "react";
import bgformdirector from "../../assets/images/bg/bg.jpg";
import {
  AddGenreComponent,
  Footer,
  NavbarComponent,
  PageTitle,
} from "../../components";

const AddGenre = () => {
  return (
    <div style={{ backgroundImage: `url(${bgformdirector})` }}>
      <NavbarComponent />
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ height: "70vh" }}
      >
        <div className="card col-7">
          {/* Page Title */}
          <PageTitle title="Add Genre" />

          {/* Content */}
          <div className="card-body p-0">
            <AddGenreComponent />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AddGenre;
