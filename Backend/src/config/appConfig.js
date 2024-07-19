// src/config/appConfig.js
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  dbUri: process.env.DB_URI || 'mongodb://localhost:27017/myapp',
  jwtSecret: process.env.JWT_SECRET || 'defaultsecret',
  environment: process.env.NODE_ENV || 'development',
  logLevel: process.env.LOG_LEVEL || 'info'
};
