import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegistPage from "./Pages/RegistPage";
import PrivateRoutes from "./utils/PrivateRoutes";
import useFindUser from "./utils/useFindUser";
import { UserContext } from "./utils/UserContext";

import {
  AddGenre,
  CreateActorImagePage,
  CreateActorPages,
  CreateDirectorImagePage,
  CreateDirectorPage,
  CreateFilmPage,
  CreateImageFilmPage,
  DashboardFilmPage,
  EditGenre,
  GenrePages,
  ListActorPage,
  ListDirectorPage,
  ListFilmPage,
  ShowActorPage,
  ShowDirectorPage,
  ShowFilmPage,
  UpdateActorPage,
  UpdateDirectorPage,
  UpdateFilmPage,
} from "./Pages";

function App() {
  const { user, setUser, isLoading } = useFindUser();

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser, isLoading }}>
        <Routes>
          {/* Private Route */}
          <Route element={<PrivateRoutes />}>
            {/* ACTORRR */}
            <Route path="/createactor" element={<CreateActorPages />} />
            <Route
              path="/createactorimage/:id"
              element={<CreateActorImagePage />}
            />
            <Route path="/updateactor/:id" element={<UpdateActorPage />} />

            {/* DIRECTORRR */}
            <Route path="/CreateDirector" element={<CreateDirectorPage />} />
            <Route
              path="/createdirectorimage/:id"
              element={<CreateDirectorImagePage />}
            />
            <Route
              path="/updateDirector/:id"
              element={<UpdateDirectorPage />}
            />

            {/* FILMMM */}
            <Route path="/createfilm" element={<CreateFilmPage />} />
            <Route
              path="/createfilmimage/:id"
              element={<CreateImageFilmPage />}
            />
            <Route path="/updateFilm/:id" element={<UpdateFilmPage />} />

            {/* GENRE */}
            <Route path="/creategenre" element={<AddGenre />} />
            <Route path="/Updategenre/:id" element={<EditGenre />} />
            <Route path="/listgenre" element={<GenrePages />} />
          </Route>

          <Route path="/Director/:id" element={<ShowDirectorPage />} />
          <Route path="/Actor/:id" element={<ShowActorPage />} />
          <Route path="/film/:id" element={<ShowFilmPage />} />
          <Route path="/listdirector" element={<ListDirectorPage />} />
          <Route path="/listactor" element={<ListActorPage />} />
          <Route path="/ListFilm" element={<ListFilmPage />} />
          <Route path="/" element={<DashboardFilmPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Register" element={<RegistPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
