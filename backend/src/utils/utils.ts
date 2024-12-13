import IProcessedWeatherData from '../common-types/ProcessedWeatherData.interface';
import IWeatherApiResponse from '../common-types/WeatherApiResponse.interface';
import dotenv from 'dotenv';

dotenv.config();

const weatherUrl = process.env.WEATHER_BASE_URL;
const apiKey = process.env.API_KEY;


export const getApiUrl = (location: string) => {
    return `${weatherUrl}${apiKey}&q=${location}&days=2&aqi=no`;
};

export const isInputValid = (str: string): boolean => {
    return str !== undefined && str !== null && str.trim().length > 0;
}

export const processDataFromApi = (res: IWeatherApiResponse): IProcessedWeatherData => {
    const location = res.location;
    const current = res.current;
    const currentHour = new Date(current.last_updated).getHours();

    const forecastByHour = res.forecast.forecastday.flatMap(day => day.hour)
    .filter((item, index, array) => {
        const itemHour = new Date(item.time).getHours();
        const itemDate = new Date(item.time).setHours(0,0,0,0);
        const currentDate = new Date(current.last_updated).setHours(0,0,0,0);
        
        return (itemDate === currentDate && itemHour >= currentHour) || 
               (itemDate > currentDate && itemHour < currentHour);
    })
    .slice(0, 5) 
    .map((item) => {
        const forecastTime = new Date(item.time);
        return {
            time: forecastTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
            temp_c: item.temp_c,
        };
    });

    return {
        location: {
            name: location.name,
            country: location.country,
            lat: location.lat,
            lon: location.lon,
        },
        current: {
            last_updated_epoch: current.last_updated_epoch,
            last_updated: current.last_updated,
            temp_c: current.temp_c,
            condition: {
                text: current.condition.text,
            },
            wind_kph: current.wind_kph,
            precip_mm: current.precip_mm,
            humidity: current.humidity,
        },
        forecast: forecastByHour,
    };

};
