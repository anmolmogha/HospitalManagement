const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const doctorRoute = require('./routes/doctorRoute');
const patientRoute = require('./routes/patientRoute');
const db = require('./config/db');

const app = express();

app.use(bodyParser.json());
app.use(cors())

// app.use('/api/doctor', doctorRoute);

// Test route to ensure the server is running
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/patient', patientRoute);
app.use("/api/doctor", doctorRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
