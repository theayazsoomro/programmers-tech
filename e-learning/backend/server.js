const express = require("express");
const connectDB = require('./config/db');
const cors = require("cors");
require("dotenv").config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define Routes (API Endpoints)
app.use('/api/users', require('./routes/users.route'));
app.use('/api/courses', require('./routes/courses.route'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
