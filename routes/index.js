const express = require('express');
const router = express.Router();
const clothes = require('./clothes');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/person/:p?/:id?', (req, res) => {
  if(!req.params.id) {
  	res.render('person', { person: req.params.p, id: req.params.id });
  } else {
  	res.render('product', { person: req.params.p, id: req.params.id });
  }
});

module.exports = router;