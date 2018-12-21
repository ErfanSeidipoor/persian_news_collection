const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Schema
const newsSchema = new Schema({
    title: String,
    description: String,
    url:  {type: String, unique: true, lowercase: true},
    imageurl: String,
    date: { type: Date, default: Date.now },
})

// Create The Model Class
const ModelClass = mongoose.model('news',newsSchema)

// Export the models
module.exports = ModelClass;