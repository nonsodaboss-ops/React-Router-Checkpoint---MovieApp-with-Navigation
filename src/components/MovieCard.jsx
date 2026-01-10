function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div className="bg-blue-900 w-70 p-6 rounded-xl flex flex-col justify-between">
      <img src={posterURL} alt={title} className="rounded-lg"/>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{description}</p>
      <span className="relative bottom-0">⭐ {rating}</span>
    </div>
  );
}
export default MovieCard;
