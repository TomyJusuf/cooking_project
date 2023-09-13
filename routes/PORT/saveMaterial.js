const saveMaterial = require('express').Router();
const modelMaterial = require('../../models/material');

saveMaterial.post('/save-material', async (req, res) => {
  const { name } = req.body;
  const surovina = new modelMaterial({
    name: name,
  });

  surovina
    .save()
    .then((result) => {
      res.json({
        mgs: 'Doslo k uspesnemu ulozeni receptu' + JSON.stringify(result),
      });
      console.log('Doslo k uspesnemu ulozeni');
    })
    .catch((err) => {
      return res.json({
        mgs: 'Bohuzel nedoslo k ulozeni suroviny',
      });
    });
});

saveMaterial.get('/save-material', (req, res) => {
  res.send('Ano, navštívil jsi /save-material GETEM');
});

module.exports = saveMaterial;
