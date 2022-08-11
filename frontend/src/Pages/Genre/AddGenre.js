import React from "react";
import bgformdirector from "../../assets/images/bg/bgformdirector.jpg";
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
      <div className="container mt-5">
        <div className="card border">
          {/* Page Title */}
          <PageTitle title="Add Genre" />

          {/* Content */}
          <div className="card-body p-3">
            <AddGenreComponent />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AddGenre;
