import './temperature-style.css'

type TemperatureProps = {
    temp: string,
    status: string
}

function Temperature({temp,status}: TemperatureProps) {
  return (
    <div className="current-weather">
        <h1 className="temperature">{temp}</h1>
        <p className="weather-status">{status}</p>
    </div>
  )
}


export default Temperature;