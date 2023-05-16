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

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    const collection = mongoose.connection.db.collection('Salon');

    app.use((req, res, next) => {
      req.collection = collection;
      next();
    });

    app.use(router);

    app.listen(PORT, () => console.log(`App running on PORT: ${PORT}`));
  })
  .catch((error) => console.log('Error connecting to MongoDB:', error));
