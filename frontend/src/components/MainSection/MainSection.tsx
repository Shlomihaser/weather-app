import useWeatherStore from "../../store/useWeatherStore";
import LoadingSkeleton from "../LoadingSkelaton/LoadingSkelaton";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";
import './main-section-style.css';

function MainSection() {
  const { data, isLoading, error } = useWeatherStore();

  if (isLoading) return (<LoadingSkeleton />);

  return (
    <main className="main">
      <div className="main-container weather-info">
        {!data && !error && (
          <div className="welcome-message">
            <h1>Welcome to Weather App</h1>
            <p>Enter a city name to get started</p>
            {/* You can add an icon or illustration here */}
          </div>
        )}

        {error && (
          <div className="error-message">
            <h2>Oops! Something went wrong</h2>
            <p>{error}</p>
            <p>Please try entering a different city name</p>
          </div>
        )}

        {data && <WeatherDisplay data={data} />}
      </div>
    </main>
  );
}

export default MainSection;
