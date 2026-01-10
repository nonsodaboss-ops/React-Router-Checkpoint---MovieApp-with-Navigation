import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="grid grid-cols-3 gap-5">
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
    </div>
  );
}
export default MovieList;