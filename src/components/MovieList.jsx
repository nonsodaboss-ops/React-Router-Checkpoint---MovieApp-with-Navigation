import MovieCard from "./MovieCard";

function MovieList({ movies, allMovies }) {
  return (
    <div className="grid grid-cols-3 gap-5 auto-rows-fr">
      {movies.map((movie, index) => {
        const movieIndex = allMovies.findIndex(
          (m) => m.title === movie.title && m.rating === movie.rating
        );
        return <MovieCard key={index} id={movieIndex} {...movie} />;
      })}
    </div>
  );
}
export default MovieList;
