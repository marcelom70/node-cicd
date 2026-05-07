const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h3>Hello World! This is a Node.js CI/CD application.</h3>');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});