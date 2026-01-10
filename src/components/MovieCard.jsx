import { Link } from "react-router-dom";

function MovieCard({ id, title, description, posterURL, rating }) {
  return (
    <Link to={`/movie/${id}`}>
      <div className="bg-blue-900 w-70 p-6 rounded-xl flex flex-col justify-between cursor-pointer hover:opacity-80 transition-opacity h-full">
        <div className="flex-1 flex flex-col">
          <img
            src={posterURL}
            alt={title}
            className="rounded-lg w-full object-cover mb-4"
          />
          <h2 className="text-xl font-semibold mb-3">{title}</h2>
          <p className="grow text-lg">{description}</p>
        </div>
        <span className="mt-4">⭐ {rating}</span>
      </div>
    </Link>
  );
}
export default MovieCard;
