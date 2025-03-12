import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import recipeRoutes from './src/routes/recipeRoutes.js';

dotenv.config();

const app = express(); 
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use("/api/recipes", recipeRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
