// ----------------------------|  Dpendencies  |--------------------------- //
const Joi = require('joi')
const express = require('express')
const mongoose = require('mongoose')

const router = require('./router')
const updateNews = require('./updateNews')
const config = require('./config');
// ------------------------------|  DB Setup  |---------------------------- //

mongoose.connect(config.db_address, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

// ------------------------------| APP Setup  |---------------------------- //
const app = express();
app.use(express.json())
router(app);
updateNews();

// ------------------------------|    PORT    |---------------------------- //
const PORT = process.env.PORT || 3000
app.listen( PORT , ()=>console.log(`Lisining on port ${PORT}`))

// ------------------------------------------------------------------------ //