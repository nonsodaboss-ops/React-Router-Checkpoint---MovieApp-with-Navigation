function Filter({ setTitleFilter, setRatingFilter }) {
  return (
    <div className="flex gap-10 justify-center mb-5">
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        onChange={(e) => setRatingFilter(Number(e.target.value))}
      />
    </div>
  );
}
export default Filter;