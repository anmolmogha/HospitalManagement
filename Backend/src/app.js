const express = require('express');
const bodyParser = require('body-parser');
const doctorRoute = require('./routes/doctorRoute');

const app = express();

app.use(bodyParser.json());

app.use('/api/doctor', doctorRoute);

// Test route to ensure the server is running
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
