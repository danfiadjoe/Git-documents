import React from 'react';

function FilterBar({ filter, setFilter }) {
  return (
    <div className="flex justify-center gap-4 p-4">
      {['All', 'Active', 'Completed'].map((type) => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={`px-4 py-2 rounded ${filter === type ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
