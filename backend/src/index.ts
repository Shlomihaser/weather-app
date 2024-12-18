import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import weatherRouter from "./routes/weather.router";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use("/weather",weatherRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});