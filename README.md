
# Weather forecast Site

A simple and responsive weather application that allows users to check the current weather and forecasts for any city around the world. Built with React for the frontend and Node.js for the backend.

## Features
- Search for weather by city name.
- View current weather conditions including temperature, humidity, and wind speed.
- Display hourly forecasts for the next five hours.

## Technologies Used
- **Frontend**: React, CSS
- **Backend**: Node.js, Express
- **API**: [Weather API](https://www.weatherapi.com/)
- **State Management**: Context API
- **Styling**: CSS Modules / Styled Components



## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Shlomihaser/weather-web-app.git
   cd weather-web-app

2. Open Terminal 1 - Run Client React App
   ```bash
   run the command : npm run frontend
3. Open Terminal 2 - Run Backend Server
   ```bash
   run the command : npm run backend
4. Setup .env file 
    ```bash
    create .env file inside the project folder and past these variables and fill the blank:
    PORT=5000
    WEATHER_API_KEY= 'API KEY'
    WATHER_API_URL=http://api.weatherapi.com/v1/forecast.json 

#### Usage
After starting both the frontend and backend servers, open your browser and navigate to http://localhost:3000 to access the application.
Enter a city name in the search bar to view current weather conditions and hourly forecasts.


## API Reference

#### Get Weather forecast by city

```http
  GET /api/weather?city=${cityName}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `city` | `string` | **Required**. Name of the city to fetch weather data for |

#### Response

```json
{
  "success": true,
  "data": {
    "location": {
      "name": "City Name",
      "country": "Country Name",
      "lat": 0.0,
      "lon": 0.0,
      "localtime": "YYYY-MM-DD HH:MM"
    },
    "current": {
      "temp_c": 0.0,
      "condition": {
        "text": "Weather condition"
      },
      "wind_kph": 0.0,
      "precip_mm": 0.0,
      "humidity": 0
    },
    "forecast": {
      "forecastday": [
        {
          "hour": [
            {
              "time": "YYYY-MM-DD HH:MM",
              "temp_c": 0.0
            }
            // ... more hourly forecasts
          ]
        }
      ]
    }
  }
}
```

## Screenshots

![SmallScreenshot](screenshots/screenshots.jpg)
