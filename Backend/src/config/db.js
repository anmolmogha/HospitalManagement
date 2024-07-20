const mongoose = require('mongoose');
const config = require('./appConfig');

mongoose.connect(config.dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

module.exports = db;
