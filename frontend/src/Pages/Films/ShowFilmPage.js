import React from "react";
import { Footer, NavbarComponent } from "../../components";
import ShowFilm from "../../components/Films/ShowFilm";
import bgformdirector from "../../assets/images/bg/bg.jpg";

const ShowFilmPage = () => {
  return (
    <div style={{ backgroundImage: `url(${bgformdirector})` }}>
      {/* NAVBAR START */}
      <NavbarComponent />
      {/* NAVBAR END */}

      {/* MAIN CONTENT START */}
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-12 mx-auto my-5">
            <div className="card border">
              <ShowFilm />
            </div>
          </div>
        </div>
      </div>
      {/* MAIN CONTENT END */}

      {/* FOOTER START */}
      <Footer />
      {/* FOOTER END */}
    </div>
  );
};

export default ShowFilmPage;
