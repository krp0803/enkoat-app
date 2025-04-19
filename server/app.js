require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const quoteRoutes = require('./routes/quoteRoutes');

const app = express();
// connect to MongoDB
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/api/quotes', quoteRoutes);

module.exports = app;