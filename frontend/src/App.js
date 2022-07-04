import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/landingPage.css";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import RegistPage from "./Pages/RegistPage";
import FilmPage from "./Pages/FilmPage";
import DirectorPage from "./Pages/DirectorPage";
import ActorPage from "./Pages/ActorPage";
import DashboardPage from "./Pages/DashboardPage";
import UploadPage from "./Pages/UploadPage";
import PrivateRoutes from "./utils/PrivateRoutes";
import AddGenre from "./Pages/AddGenre";
import EditGenre from "./Pages/EditGenre";
import GenrePages from "./Pages/GenrePages";

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
        </Route>

        <Route path="/Film" element={<FilmPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Register" element={<RegistPage />} />
        <Route path="/Director" element={<DirectorPage />} />
        <Route path="/Actor" element={<ActorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
