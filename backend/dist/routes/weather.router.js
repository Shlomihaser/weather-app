"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var weather_controller_1 = require("../controllers/weather.controller");
var router = express_1.default.Router();
router.get("/", weather_controller_1.getWeatherByCity);
exports.default = router;
