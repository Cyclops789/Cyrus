const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    User: String,
    Name: String,
    Bio: String,
    Age: String,
    Gender: String,
    Birthday: String,
    Favanime: String,
})

module.exports = mongoose.model('info', Schema)