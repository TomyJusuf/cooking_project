const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const db = require('./database/connect');
const getMaterials = require('./routes/GET/getMaterial');
const saveMaterial = require('./routes/PORT/saveMaterial');
db.connect();
/**
 * Middleware
 * Povolme prijimat JSON z frontendu
 */
app.use(express.json({ extended: false }));
app.use(express.text({ extended: false }));
/**
 * Routers - GET
 */
app.use('/', getMaterials);
/**
 * Routers - POST
 */

app.use('/', saveMaterial);

app.get('/', (req, res) => {
  res.send('Main page');
});
app.listen(PORT, (err) => {
  console.log('Server running on ' + PORT);
});
