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
            {/* selesai */}
            <Route path="/createactor" element={<CreateActorPages />} />
            {/* create actor image sedikit lagi cuma error login */}
            <Route
              path="/createactorimage/:id"
              element={<CreateActorImagePage />}
            />
            {/* Selesai */}
            <Route path="/updateactor/:id" element={<UpdateActorPage />} />
            {/* Selesai */}
            <Route path="/Actor/:id" element={<ShowActorPage />} />
            {/* selesai */}

            {/* ACTORR END */}

            {/* DIRECTORRR */}
            {/* create director sedikit masalah habis input tidak otomatis ke get namun jika direstart akan muncul */}
            <Route path="/CreateDirector" element={<CreateDirectorPage />} />
            {/* create director image sedikit lagi cuma error login */}
            <Route
              path="/createdirectorimage/:id"
              element={<CreateDirectorImagePage />}
            />
            {/* Show Director Selesai */}
            <Route path="/Director/:id" element={<ShowDirectorPage />} />
            {/* Update Actor Selesai */}
            <Route
              path="/updateDirector/:id"
              element={<UpdateDirectorPage />}
            />
            {/* selesai */}

            {/* DIRECTORRR END */}

            {/* FILMMM */}
            {/* Error Blm bisa masuk datanya */}
            <Route path="/createfilm" element={<CreateFilmPage />} />
            {/* create filmm image sedikit lagi cuma error login */}
            <Route
              path="/createfilmimage/:id"
              element={<CreateImageFilmPage />}
            />
            {/* Gagal Pada saat menampilkan aktor, director, dan genre yang harusnya nama malah hanya Id nya saja */}

            {/* Masih gabisa nampilin nama nya hanya bisa id nya saja */}
            <Route path="/film/:id" element={<ShowFilmPage />} />
            {/* masih blm berdasarkan genre */}

            {/* blm selesai */}
            <Route path="/updateFilm/:id" element={<UpdateFilmPage />} />
            {/* FILMMM END */}

            {/* GENRE */}
            {/* Add Genre Selesai */}
            <Route path="/AddGenre" element={<AddGenre />} />
            {/* Edit Genre Selesai */}
            <Route path="/EditGenre/:id" element={<EditGenre />} />
            {/* List Genre Selesai */}
            <Route path="/Genre" element={<GenrePages />} />
            {/* GENRE END */}
          </Route>

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
