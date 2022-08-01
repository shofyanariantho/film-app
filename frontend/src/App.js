import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegistPage from "./Pages/RegistPage";
import PrivateRoutes from "./utils/PrivateRoutes";
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
  UpdateDirectorPage
}
  from "./Pages";
import UpdateFilms from "./components/Films/UpdateFilms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          {/* ACTORRR */}
          {/* selesai */}
          <Route path="/createactor" element={<CreateActorPages />} />
          {/* create actor image sedikit lagi cuma error login */}
          <Route path="/createactorimage/:id" element={<CreateActorImagePage />} />
          {/* Selesai */}
          <Route path="/updateactor/:id" element={<UpdateActorPage />} />
          {/* Selesai */}
          <Route path="/Actor/:id" element={<ShowActorPage />} />
          {/* selesai */}
          <Route path="/listactor" element={<ListActorPage />} />
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
          {/* selesai */}
          <Route path="/listdirector" element={<ListDirectorPage />} />
          {/* DIRECTORRR END */}

          {/* FILMMM */}
          {/* Error Blm bisa masuk datanya */}
          <Route path="/createfilm" element={<CreateFilmPage />} />
          {/* create filmm image sedikit lagi cuma error login */}
          <Route path="/createfilmimage/:id" element={<CreateImageFilmPage />} />
          {/* Gagal Pada saat menampilkan aktor, director, dan genre yang harusnya nama malah hanya Id nya saja */}
          <Route path="/ListFilm" element={<ListFilmPage />} />
          {/* Masih gabisa nampilin nama nya hanya bisa id nya saja */}
          <Route path="/film/:id" element={<ShowFilmPage />} />
          {/* masih blm berdasarkan genre */}
          <Route path="/" element={<DashboardFilmPage />} />
          {/* blm selesai */}
          <Route path="/updateFilm/:id" element={<UpdateFilms />} />
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

        <Route path="/login" element={<LoginPage />} />
        <Route path="/Register" element={<RegistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
