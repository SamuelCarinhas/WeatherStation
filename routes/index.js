const express = require('express');
const router = express.Router();

let Weather = require('../models/weather');

router.get('/', (req, res) => {

    Weather.find({}, (err, weathers) => {
        if(err) {
            console.log(err);
        } else {
            let value;
            for(let weather in weathers) {
                value = weathers[weather];
            }
            res.render('index', {
                title: 'Smart Weather',
                weather: value
            });
        }
    });
});

module.exports = router;