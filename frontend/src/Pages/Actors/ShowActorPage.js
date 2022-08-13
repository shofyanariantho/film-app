import React from "react";
import { ActorComponent, Footer, NavbarComponent } from "../../components";

const ShowActorPage = () => {
  return (
    <div className="bg-dark">
      {/* NAVBAR START */}
      <NavbarComponent />
      {/* NAVBAR END */}

      {/* MAIN CONTENT START */}
      <div className="container my-5">
        <div className="card border align-content-center">
          <ActorComponent />
        </div>
      </div>
      {/* MAIN CONTENT END */}

      {/* FOOTER START */}
      <Footer />
      {/* FOOTER END */}
    </div>
  );
};

export default ShowActorPage;
