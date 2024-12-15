import useWeatherStore from "../../store/useWeatherStore";
import parseDate from "../../utils/utils";
import TempByHour from "../TempByHour/TempByHour";
import Temperature from "../Temperature/Temperature";
import WeatherCondition from "../WeatherCondition/WeatherCondition";
import './main-section-style.css';

function MainSection() {
  const { data } = useWeatherStore();

  return (
    <main className="main">
      {
        data &&
        <div className="weather-info">

          <div className="current-location">
            <p className="city">{data.location.name}</p>
            <p className="country">{data.location.country}</p>
            <p className="current-date">{parseDate(data.current.last_updated)}</p>
          </div>

          <Temperature temp={`${data.current.temp_c}`} status={`${data.current.condition.text}`} />

          <div className="weather-conditions">
            <WeatherCondition detailLabel="precipitation" detailValue={`${data.current.precip_mm} mm`} />
            <WeatherCondition detailLabel="humidity" detailValue={`${data.current.humidity}%`} />
            <WeatherCondition detailLabel="wind" detailValue={`${data.current.wind_kph} km/h`} />
          </div>

          <div className="hourly-forecast">
              {
                data.forecast.map((item,index) => (
                  <TempByHour key={index} forecastTemp={item.temp_c.toString()} forecastTime={item.time}/>
                ))
              }
          </div>

        </div>
      }

    </main>
  )
}


export default MainSection;