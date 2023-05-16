import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/router.js';

dotenv.config();

const { PORT } = process.env || 4000;
const { MONGO_URI } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

mongoose
  .connect(MONGO_URI, { dbName: 'Salon' })
  .then(() => console.log('Connected To MongoDB'))
  .catch((error) => console.log(error));

app.listen(PORT, () => console.log(`App running on PORT: ${PORT}`));
