// index.js (app file)

const express = require('express');
const app = express();

// Use environment variable for the port, default to 3000 if not specified
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Export the app
module.exports = app;

// Start the server only when executed directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

