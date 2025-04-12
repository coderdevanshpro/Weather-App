const WeatherCard = ({ data }) => {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 text-center mt-6 max-w-sm mx-auto">
        <h2 className="text-2xl font-semibold">{data.city}</h2>
        <img src={data.icon} alt={data.condition} className="mx-auto w-20" />
        <p className="text-xl">{data.condition}</p>
        <p className="text-4xl font-bold">{data.temperature}°C</p>
        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <p>Humidity: {data.humidity}%</p>
          <p>Wind: {data.windSpeed} km/h</p>
        </div>
      </div>
    );
  };
  
  export default WeatherCard;
  