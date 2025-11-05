function FilterBar({ filter, setFilter }) {
  return (
    <div className="flex gap-4 justify-center mb-4">
      {['All', 'Active', 'Completed'].map((type) => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={`px-4 py-2 rounded ${
            filter === type ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
export default FilterBar;
