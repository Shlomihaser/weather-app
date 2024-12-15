import IProcessedWeatherData from "./ProcessedWeatherData.interface";

export interface IAppApiResponse {
    success: boolean;
    data?: IProcessedWeatherData; 
}