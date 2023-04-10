import React, { useState } from "react";
import "./App.css";
import Addmovie from "./components/Addmovie";
import Cardlist from "./components/Cardlist";
import Movieform from "./components/Movieform";
import SearchAppBar from "./components/Navbar";
import Searchmovie from "./components/Searchmovie";
import { Outlet, Route, Routes } from "react-router-dom";
import Trailldesc from "./components/Trailldesc";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 0,
      title: "The God Father",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque excepturi neque a.",
      posterURL:
        "https://publisher-ncreg.s3.us-east-2.amazonaws.com/pb-ncregister/swp/hv9hms/media/20220617210644_9edceb9946f62dc8489ba7d292fde61ef0dfc173fd21c2339deb1e228bd8854a.png",
      Rating: "8.5",
      trailerURL: "https://www.youtube.com/embed/giXco2jaZ_4",
      status: "available",
    },
  ]);
  const addmovie = (addedmovie) => {
    setMovies([...movies, addedmovie]);
  };
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <Searchmovie setQuery={setQuery} />
      <React.Fragment className="container">
        <Routes>
          <Route
            element={<Cardlist movies={movies} query={query} />}
            path="/"
          />

          <Route
            element={<Trailldesc movies={movies} />}
            path="/trailldesc/:id"
          />
        </Routes>
      </React.Fragment>
      <Addmovie>
        <Movieform movies={addmovie} />
      </Addmovie>
      <Outlet />
    </div>
  );
}

export default App;
