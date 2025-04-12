import { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';


function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const response = await axios.get(`https://weather-app-8qbx.onrender.com/weather?city=${city}`);

      if (response.data && !response.data.error) {
        setWeather(response.data);
      } else {
        setError(response.data.error || 'Something went wrong. Try again.');
      }
    } catch (err) {
      console.log(err);
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <h1 className="text-3xl text-center font-bold mb-4">Real-Time Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
