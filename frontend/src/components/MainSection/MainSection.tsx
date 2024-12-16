import { TiWeatherCloudy } from "react-icons/ti";
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
            <TiWeatherCloudy className="weather-icon"/>
            <p>Enter city name to see the weather</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            <TiWeatherCloudy className="weather-icon"/>
            <h2>Oops! Something went wrong</h2>
            <p>{error}</p>
            <p>Please try entering a different city name</p>
          </div>
        )}

        {!error && data && <WeatherDisplay data={data} />}
      </div>
    </main>
  );
}

export default MainSection;
