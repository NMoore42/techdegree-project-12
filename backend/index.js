'use strict';

// load modules
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();

// set our port
app.set('port', process.env.PORT || 5000);

// morgan gives us http request logging
app.use(morgan('dev'));

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Mongoose connection
mongoose.connect("mongodb://localhost:27017/cmc-api");
const db = mongoose.connection;

//Mongoose error
db.on('error', console.error.bind(console, 'connection error:'));

//Database connect message
db.once('open', () => console.log("Connection to database a success!"))


// include routes
const routes = require('./routes/index');
app.use('/api', routes);

// send a friendly greeting for the root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Coin Market App API'
  });
});

// send 404 if no other route matched
app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found'
  })
})

// global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message,
    error: {}
  });
});

// start listening on our port
const server = app.listen(app.get('port'), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});
