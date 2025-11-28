// Import the express package
const express = require('express');

// Create an instance of the express application
const app = express();

// Example: define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World! This is my Express server.');
});

// Define the port number
const PORT = 3000;

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});