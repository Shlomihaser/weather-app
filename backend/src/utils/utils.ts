import dotenv from 'dotenv';

dotenv.config();

const weatherUrl = process.env.WEATHER_BASE_URL;
const apiKey = process.env.API_KEY;


export const getApiUrl = (location: string) => {
    return `${weatherUrl}${apiKey}&q=${location}&aqi=yes`;
};
