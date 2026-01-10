import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const movieIndex = parseInt(id);
  const movie = movies[movieIndex];

  if (!movie) {
    return <div className="text-center text-2xl p-10">Movie not found</div>;
  }

  return (
    <div className="bg-blue-600 min-h-screen p-10">
      <Link to="/">
        <button className="mb-5 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
          ← Back to Movies
        </button>
      </Link>
      <div className="max-w-4xl mx-auto bg-blue-900 p-8 rounded-xl">
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <img
              src={movie.posterURL}
              alt={movie.title}
              className="rounded-lg w-full"
            />
            <p className="text-2xl mt-4">⭐ Rating: {movie.rating}/5</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3">Description</h2>
            <p className="text-lg mb-6 leading-relaxed">{movie.description}</p>
            <h2 className="text-2xl font-semibold mb-3">Trailer</h2>
            <iframe
              width="100%"
              height="400"
              src={
                movie.trailerLink.replace("watch?v=", "embed/").split("&")[0]
              }
              title={movie.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
