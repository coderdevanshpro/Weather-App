import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity(''); // Optional: clear input
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-6">
      <input
        type="text"
        placeholder="Enter city..."
        className="border px-4 py-2 rounded-l-md w-64"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
