import React, { useState } from "react";

function AddMovie({ setMovies, movies }) {
  // Local state for form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);
  const [trailerLink, setTrailerLink] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new movie object
    const newMovie = {
      title,
      description,
      posterURL,
      rating: Number(rating),
      trailerLink,
    };

    // Update movies list
    setMovies([...movies, newMovie]);

    // Reset form
    setTitle("");
    setDescription("");
    setPosterURL("");
    setTrailerLink("");
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-blue-400 p-5 mt-5 rounded-lg">
      <h2 className="text-2xl">Add a New Movie</h2>
      <div className="flex flex-col gap-3 mt-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Rating (0–5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="0"
          max="5"
          required
        />
        <input
          type="text"
          placeholder="Trailer Link (YouTube URL)"
          value={trailerLink}
          onChange={(e) => setTrailerLink(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="bg-blue-800 p-2 rounded-md mt-3">Add Movie</button>
    </form>
  );
}

export default AddMovie;
