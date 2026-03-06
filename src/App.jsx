import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import MovieDescription from "./components/MovieDescription";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      description:
        "Captain Jack Sparrow teams up with Will Turner to rescue Elizabeth Swann and battle cursed pirates.",
      posterURL:
        "https://media.themoviedb.org/t/p/w220_and_h330_face/n0QsUsyqrFQNsoneLF4LNW3vQBq.jpg",
      rating: 5,
      trailerLink:
        "https://www.youtube.com/watch?v=naQr0uTrH_s&pp=ygU9cGlyYXRlcyBvZiB0aGUgY2FyaWJiZWFuIHRoZSBjdXJzZSBvZiB0aGUgYmxhY2sgcGVhcmwgdHJhaWxlcg%3D%3D",
    },
    {
      title: "Mission: Impossible (1996)",
      description:
        "Ethan Hunt is framed for the deaths of his IMF team and must uncover the mole to clear his name.",
      posterURL:
        "https://media.themoviedb.org/t/p/w220_and_h330_face/brVZbvZJWC89eUCEDeQ3jmhUlKr.jpg",
      rating: 4,
      trailerLink:
        "https://www.youtube.com/watch?v=L8Pbjh4EZRk&pp=ygUiTWlzc2lvbjogSW1wb3NzaWJsZSAoMTk5NikgdHJhaWxlcg%3D%3D",
    },
    {
      title: "Coming to America",
      description:
        "An African prince travels to America to find a suitable bride who loves him for who he really is, not for his title or wealth.",
      posterURL:
        "https://th.bing.com/th/id/OIP.KAsFob0I61uCvAGcbMTB4QHaLI?w=186&h=280&c=7&r=0&o=7&pid=1.7&rm=3",
      rating: 4,
      trailerLink:
        "https://www.youtube.com/watch?v=ZDme5Y5E-bI&pp=ygUZY29taW5nIHRvIGFtZXJpY2EgdHJhaWxlcg%3D%3D",
    },
  ]);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-blue-600 w-fit p-20 mx-auto ">
              <h1 className="text-center text-4xl font-semibold mb-5">
                My Movie App
              </h1>
              <Filter
                setTitleFilter={setTitleFilter}
                setRatingFilter={setRatingFilter}
              />
              <MovieList movies={filteredMovies} allMovies={movies} />
              <AddMovie setMovies={setMovies} movies={movies} />
            </div>
          }
        />
        <Route
          path="/movie/:id"
          element={<MovieDescription movies={movies} />}
        />
      </Routes>
  );
}

export default App;
