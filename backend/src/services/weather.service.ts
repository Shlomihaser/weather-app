import IProcessedWeatherData from "../common-types/ProcessedWeatherData.interface.ts";
import { getApiUrl, processDataFromApi } from "../utils/utils.ts";
import axios from "axios";


export const fetchWeather = async (city: string) :Promise<IProcessedWeatherData> => {
    
    const url = getApiUrl(city);
    
    try {
        const res = await axios.get(url);
        return processDataFromApi(res.data);
    } catch(error) {
        if(axios.isAxiosError(error))
            throw new Error(`Error fetching data from url - ${error.message}`);
        throw new Error('An unexpected error occurred while fetching weather data');
    }
}
