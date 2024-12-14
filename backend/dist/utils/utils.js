"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processDataFromApi = exports.isInputValid = exports.getApiUrl = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var weatherUrl = process.env.WEATHER_BASE_URL;
var apiKey = process.env.API_KEY;
var getApiUrl = function (location) {
    return "".concat(weatherUrl, "?key=").concat(apiKey, "&q=").concat(location, "&days=2&aqi=no");
};
exports.getApiUrl = getApiUrl;
var isInputValid = function (str) {
    return str !== undefined && str !== null && str.trim().length > 0;
};
exports.isInputValid = isInputValid;
var processDataFromApi = function (res) {
    var location = res.location;
    var current = res.current;
    var currentHour = new Date(current.last_updated).getHours();
    var forecastByHour = res.forecast.forecastday.flatMap(function (day) { return day.hour; })
        .filter(function (item, index, array) {
        var itemHour = new Date(item.time).getHours();
        var itemDate = new Date(item.time).setHours(0, 0, 0, 0);
        var currentDate = new Date(current.last_updated).setHours(0, 0, 0, 0);
        return (itemDate === currentDate && itemHour >= currentHour) ||
            (itemDate > currentDate && itemHour < currentHour);
    })
        .slice(0, 5)
        .map(function (item) {
        var forecastTime = new Date(item.time);
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
exports.processDataFromApi = processDataFromApi;
