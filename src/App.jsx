import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      description:
        "Captain Jack Sparrow teams up with Will Turner to rescue Elizabeth Swann and battle cursed pirates.",
      posterURL:
        "https://media.themoviedb.org/t/p/w220_and_h330_face/n0QsUsyqrFQNsoneLF4LNW3vQBq.jpg",
      rating: 5,
    },
    {
      title: "Mission: Impossible (1996)",
      description:
        "Ethan Hunt is framed for the deaths of his IMF team and must uncover the mole to clear his name.",
      posterURL:
        "https://media.themoviedb.org/t/p/w220_and_h330_face/brVZbvZJWC89eUCEDeQ3jmhUlKr.jpg",
      rating: 4,
    },
    {
      title: "3 Idiots",
      description:
        "Two friends search for their long-lost companion, recalling their college days with Rancho, who inspired them to think differently and challenged the rigid education system.",
      posterURL:
        "https://media.themoviedb.org/t/p/w220_and_h330_face/66A9MqXOyVFCssoloscw79z8Tew.jpg",
      rating: 5,
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
    <div className="bg-blue-600 w-fit p-20 mx-auto ">
      <h1 className="text-center text-4xl font-semibold mb-5">My Movie App</h1>
      <Filter
        setTitleFilter={setTitleFilter}
        setRatingFilter={setRatingFilter}
      />

      <MovieList movies={filteredMovies} />
      <AddMovie setMovies={setMovies} movies={movies} />
    </div>
  );
}

export default App;
