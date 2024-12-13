import { Request, Response} from "express";
import { fetchWeather } from "../services/weather.service";


export const getWeatherByCity = async (req: Request,res: Response): Promise<any> => 
{
    const { city } = req.query;
    try {
      const response = await fetchWeather(city as string);
     //  res.send({success:true,data:weatherFetch});
    } catch(error: unknown){
        if(error instanceof Error)
            res.send( {success:false,message:error.message});
    }
}