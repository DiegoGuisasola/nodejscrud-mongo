const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

// Import routes
const indexRoutes = require('./routes/index');

// Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev'));

// Routes
app.use('/', indexRoutes);

// Start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});