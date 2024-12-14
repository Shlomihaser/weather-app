import { Request, Response} from "express";
import { fetchWeather } from "../services/weather.service.ts";
import { isInputValid } from "../utils/utils.ts";


export const getWeatherByCity = async (req: Request,res: Response): Promise<void> => 
{
    const { city } = req.query;
    
    if (typeof city !== 'string' || !isInputValid(city)) {
        res.status(400).send({ success: false, message: 'Invalid city parameter' });
        return;
    }

    try {
      const response = await fetchWeather(city as string);
      res.status(200).send({success: true, data: response});
    } catch(error: unknown){
        if (error instanceof Error) 
            res.status(500).send({ success: false, message: error.message });
        else 
            res.status(500).send({ success: false, message: 'An unknown error occurred' });    
    }
    
}