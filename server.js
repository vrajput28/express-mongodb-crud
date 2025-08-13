require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to the User API');
});
app.use('/api', routes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    }).catch((err) => console.error(err));
