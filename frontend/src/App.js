import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/landingPage.css";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import RegistPage from "./Pages/RegistPage";
import FilmPage from "./Pages/FilmPage";
import DashboardPage from "./Pages/DashboardPage";
import UploadPage from "./Pages/UploadPage";
import PrivateRoutes from "./utils/PrivateRoutes";
import AddGenre from "./Pages/AddGenre";
import EditGenre from "./Pages/EditGenre";
import GenrePages from "./Pages/GenrePages";
import {
  CreateActorImagePage,
  CreateActorPages,
  CreateDirectorImagePage,
  CreateDirectorPage,
  CreateFilmPage,
  ShowActorPage,
  ShowDirectorPage,
  UpdateActorPage,
  UpdateDirectorPage
}
  from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/AddFilm" element={<UploadPage />} />
          <Route path="/AddGenre" element={<AddGenre />} />
          <Route path="/Dashboard" element={<DashboardPage />} />
          <Route path="/EditGenre/:id" element={<EditGenre />} />
          <Route path="/Genre" element={<GenrePages />} />

          {/* ACTORRR */}
          {/* create actor sedikit masalah habis input tidak otomatis ke get namun jika direstart akan muncul */}
          <Route path="/createactor" element={<CreateActorPages />} />
          {/* create actor image sedikit lagi cuma error login */}
          <Route path="/createactorimage/:id" element={<CreateActorImagePage />} />
          {/* Update Actor Selesai */}
          <Route path="/updateactor/:id" element={<UpdateActorPage />} />
          {/* Show Actor Selesai */}
          <Route path="/Actor/:id" element={<ShowActorPage />} />
          {/* ACTORR END */}


          {/* DIRECTORRR */}
          {/* create director sedikit masalah habis input tidak otomatis ke get namun jika direstart akan muncul */}
          <Route path="/CreateDirector" element={<CreateDirectorPage />} />
          {/* create director image sedikit lagi cuma error login */}
          <Route path="/createdirectorimage/:id" element={<CreateDirectorImagePage />} />
          {/* Show Director Selesai */}
          <Route path="/Director/:id" element={<ShowDirectorPage />} />
          {/* Update Actor Selesai */}
          <Route path="/updateDirector/:id" element={<UpdateDirectorPage />} />
          {/* DIRECTORRR END */}

          {/* FILMMM */}
          <Route path="/createfilm" element={<CreateFilmPage />} />
          {/* FILMMM END */}
        </Route>

        <Route path="/Film" element={<FilmPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Register" element={<RegistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
