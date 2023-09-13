const getMaterials = require('express').Router();

const materials = require('../../models/material');
getMaterials.get('/get-materials', (req, res) => {
  materials
    .find()
    .then((docs) => {
      res.json({
        msg: 'Uspesne se nam podarilo ziskat suroviny',
        document: docs,
      });
      console.log('Doslo k uspesnemu ulozeni');
    })
    .catch((err) => {
      return res.json({
        msg: 'Bohuzel se nepodarilo ziskat zadne dokumenty',
        documents: [],
      });
    });
});

module.exports = getMaterials;
