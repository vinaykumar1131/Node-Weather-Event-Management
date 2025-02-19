const express = require('express');
const userRoutes = require("./src/routes/auth")
const eventRoutes = require("./src/routes/eventRoutes")
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose
    .connect(process.env.DATABASE_URI)
    .then(() => console.log('Connected!'))
    .catch((err) => {
        console.error(err);
    });
const app = express();

app.use(express.json());
app.use('/users', userRoutes);
app.use('/events', eventRoutes);
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server running on port ${port}`));
