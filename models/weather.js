let mongoose = require('mongoose');

let weatherSchema = mongoose.Schema( {
    temperature: {
        type: Number
    },
    humidity: {
        type: Number
    },
    windVelocity: {
        type: Number
    },
    windDirection: {
        type: String
    },
    precipitation: {
        type: Number
    },
    atmosphericPressure: {
        type: Number
    }
});

let Weather = module.exports = mongoose.model('Weather', weatherSchema);