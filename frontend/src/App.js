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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/AddFilm" element={<UploadPage />} />
        </Route>

        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Register" element={<RegistPage />} />
        <Route path="/Film" element={<FilmPage />} />
        <Route path="/Director" element={<DirectorPage />} />
        <Route path="/Actor" element={<ActorPage />} />
        <Route path="/Dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
