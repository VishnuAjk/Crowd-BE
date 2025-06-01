import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import authRoutes from './routes/authRoutes.js';



// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Example base route
app.get('/', (req, res) => res.send('API running!'));
app.use('/api/auth', authRoutes);

// Example: Mount user routes (uncomment when you create userRoutes.js)
// import userRoutes from './routes/userRoutes.js';
// app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
