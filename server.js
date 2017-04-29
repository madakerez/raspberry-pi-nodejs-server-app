'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

/*define global variable with root path*/
var path = require('path');
global.appRoot = path.resolve(__dirname);

const router = require('./config/routes.js');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to raspberry_pi app');
});

app.use('/pins', router.pins);
app.use('/user', router.user);

var server = app.listen(3000, function() {
  console.log(`Raspberry server start`);
  console.log(`Server running at http://localhost:${server.address().port}`)
});
