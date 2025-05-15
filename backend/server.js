import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import session from 'express-session';
import authRoutes from './routes/auth.js';
import passport from 'passport';
import configurePassport from './config/passportConfig.js';

import languageRoutes from './routes/languages.js';
import lessonRoutes from './routes/lessons.js';
import userRoutes from './routes/users.js';

config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.JWT_SECRET || 'your_jwt_secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true in production with HTTPS
  }),
);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Connection error', err));

// Initialize Passport and load strategies
configurePassport(passport); // Call the configuration function

// Initialize passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/languages', languageRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
