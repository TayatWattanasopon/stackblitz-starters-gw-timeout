// run `node index.js` in the terminal

const express = require('express');
const app = express();

app.get('/simulate-timeout', (req, res) => {
  // Introduce a delay before responding to simulate a timeout
  setTimeout(() => {
    res.status(503).send('Gateway Timeout');
  }, 10000); // Simulating a 10-second delay
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
