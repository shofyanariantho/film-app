import React from "react";
import {
  DirectorComponent,
  DirectorComponents,
  Footer,
  NavbarComponent,
} from "../../components";

const ShowDirectorPage = () => {
  return (
    <div className="bg-dark">
      {/* NAVBAR START */}
      <NavbarComponent />
      {/* NAVBAR END */}

      {/* MAIN CONTENT START */}
      <div className="container my-5">
        <div className="card border">
          <DirectorComponents />
        </div>
      </div>
      {/* MAIN CONTENT END */}

      {/* FOOTER START */}
      <Footer />
      {/* FOOTER END */}
    </div>
  );
};

export default ShowDirectorPage;
