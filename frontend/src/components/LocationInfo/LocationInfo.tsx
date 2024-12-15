import useWeatherStore from "../../store/useWeatherStore";
import parseDate from "../../utils/utils";
import './location-info-style.css';

function LocationInfo() {
  
  const { data } = useWeatherStore();

  return ( 
    data && 
    <div className="location-info">
        <p className="coordinates">latitude: {data.location.lat}&emsp;&ensp;longitude: {data.location.lon}</p>
        <p className="timestamp">accurate to {parseDate(data.current.last_updated)}</p>
    </div>
  )
}


export default LocationInfo;