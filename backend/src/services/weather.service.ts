import e from "express";
import { getApiUrl } from "../utils/utils";
import axios from "axios";



export const fetchWeather = async (city: string) :Promise<any> => {
    
    if(!city) throw new Error("Empty input provided");

    const url = getApiUrl(city);

    try {
        const res = await axios.get(url);
        const data = res.data;

        
    } catch(error: unknown) {
        if(error instanceof Error)
            throw new Error(`Error fetching data from url - ${error.message}`);
    }
}