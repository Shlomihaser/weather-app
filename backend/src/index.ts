import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import weatherRouter from './routes/weather.router.ts';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use("/weather",weatherRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});