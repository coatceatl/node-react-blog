const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello from server');
});

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log('server started');
});



