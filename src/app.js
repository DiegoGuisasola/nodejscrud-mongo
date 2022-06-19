const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// Import local env var
require('dotenv').config()


// Deployment
const host = process.env.HOST || '0.0.0.0'; // Lee de variables.env
const port = process.env.PORT || 3000;      // Lee de Heroku

const app = express();

// Coonecting to DB
mongoose.connect(process.env.DB_URL)
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err));


console.log("Database_URL", process.env.DB_URL);
// Import routes
const indexRoutes = require('./routes/index');

// Settings
app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));

// Middlewares
app.use(morgan('dev'));

// Routes
app.use('/', indexRoutes);

// Start the server
app.listen(port, host, () => {
    console.log(`Server on port ${app.get('port')}`);
});