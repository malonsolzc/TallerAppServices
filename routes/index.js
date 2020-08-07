const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('layout');
});

router.get('/nuestrasredes.html', (req, res, next) => {
  res.render('nuestrasredes');
});

router.get('/acercade.html', (req, res, next) => {
  res.render('acercade');
});

router.get('/contactanos.html', (req, res, next) => {
  res.render('contactanos');
});
module.exports = router;
