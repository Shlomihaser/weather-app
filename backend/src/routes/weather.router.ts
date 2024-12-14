import express from 'express'
import { getWeatherByCity } from '../controllers/weather.controller.ts';


const router = express.Router();

router.get("/",getWeatherByCity);

export default router;