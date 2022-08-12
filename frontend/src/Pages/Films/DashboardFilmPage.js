import React from "react";
import { DashboardFilm, Footer, NavbarComponent } from "../../components";

const DashboardFilmPage = () => {
  return (
    <div className="min-vh-100">
      {/* NAVBAR START */}
      <NavbarComponent />
      {/* NAVBAR END */}

      {/* MAIN CONTENT START */}
      <div className="main">
        <DashboardFilm />
        {/* MAIN CONTENT END */}

        {/* FOOTER START */}
        <Footer />
        {/* FOOTER END */}
      </div>
    </div>
  );
};

export default DashboardFilmPage;
