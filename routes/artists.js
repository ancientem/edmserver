var express = require('express');
var router = express.Router();

const pageData = {
  Title: "Artists",
  artists: [
    {name: 'Avicci'},
    {name: 'The fast rat'},
    {name: 'excision'}

  ]
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('artists', { title: pageData});
});

module.exports = router;