const app = require('./app');
const config = require('./config/appConfig');

// console.log("App:", app); // This should log the Express app object

const PORT = config.port || 3000;

if (app && app.listen) {  // Ensure app is defined and has a listen method
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
} else {
  console.error('Failed to initialize the server: app is undefined or missing listen method');
}
