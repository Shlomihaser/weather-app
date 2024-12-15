import { useState } from 'react';
import useWeatherStore from '../../store/useWeatherStore';
import './input-field-style.css'


function InputField({placeHolderStr} : {placeHolderStr: string}) {
  const {fetchData} = useWeatherStore();
  const [city,setCity] = useState("");

  return (
    <div className="input-field-group">
        <input 
            type="text" 
            name="input-field" 
            className="input-field" 
            autoComplete="off"
            placeholder={placeHolderStr}
            onChange={(e) => setCity(e.target.value)}
            />
        <button 
            type="button" 
            className="check-button"
            onClick={() => fetchData(city)}>Check</button>
  </div>
  )
}

export default InputField;