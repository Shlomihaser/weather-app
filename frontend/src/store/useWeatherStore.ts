import { create } from 'zustand';
import axios from 'axios';
import IProcessedWeatherData from '../interfaces/ProcessedWeatherData.interface';
import { IAppApiResponse } from '../interfaces/AppApiResponse.interface';

const BASE_URL = "http://localhost:5000/weather?"; 

interface WeatherStore {
    data: IProcessedWeatherData | null; 
    error: string | null;
    isLoading: boolean;
    fetchData: (city: string) => Promise<void>;
}

const useWeatherStore = create<WeatherStore>((set) => ({
    data: null,
    error: null,
    isLoading: false,

    fetchData: async (city: string) => {
        set({ isLoading: true, error: null }); 
        try {
            // Add a 2-second delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            const response = await axios.get<IAppApiResponse>(BASE_URL, {
                params: { city },
            });

            if (response.data.success) set({ data: response.data.data || null, isLoading: false }); 
            else set({ error: "Data not found", isLoading: false }); 
        } catch (error) {
            if (axios.isAxiosError(error)) set({ error: error.message || "An error occurred", isLoading: false }); 
            else set({ error: "An unexpected error occurred", isLoading: false });
        }
    },
}));

export default useWeatherStore;
