const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

const config = require('../config');
var connection = mongoose.createConnection(config.db_address);
autoIncrement.initialize(connection);

// Define Schema
const newsSchema = new Schema({
    title: String,
    agency: String,
    language: String,
    description: String,
    url: {type: String, unique: true, lowercase: true},
    imageurl: String,
    pubDate: { type: Date, default: Date.now },
    dbDate: { type: Date, default: Date.now },
})

newsSchema.plugin(autoIncrement.plugin, { model: 'news', field: 'newsId' });
// Create The Model Class
// const ModelClass = mongoose.model('news',newsSchema)
const ModelClass = connection.model('news', newsSchema);
// Export the models
module.exports = ModelClass;