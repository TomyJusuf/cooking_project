const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const db = require('./database/connect');

db.connect();

app.listen(PORT, (err) => {
  console.log('Server running on ' + PORT);
});

app.get('/', (req, res) => {
  res.send('You are on main page, welcome. I try test server page');
});
