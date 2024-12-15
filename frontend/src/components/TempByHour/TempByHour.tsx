import './temp-by-hour-style.css';

type TempByHourProps = {
    forecastTime: string,
    forecastTemp: string
}

function TempByHour({forecastTemp,forecastTime} : TempByHourProps) {
  return (
    <div className="forecast-item">
        <p className="forecast-time">{forecastTime}</p>
        <p className="forecast-temp">{forecastTemp}°</p>
  </div>
  )
}


export default TempByHour;