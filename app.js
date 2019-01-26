const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/WeatherStation', { useNewUrlParser: true });

let db = mongoose.connection;

//Check connection
db.once('open', () => {
    console.log('Connected to MongoDB');
});

//Check for DB errors
db.on('error', (err) => {
    console.log(err);
});

//Routers
const indexRouter = require('./routes/index');

//App Initialize
const app = express();

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));


//Routes
app.use('/', indexRouter);


//Start Server
app.listen(3000, () => {
    console.log('Server stared on port 3000.');
});