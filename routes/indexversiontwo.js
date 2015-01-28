var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Spark Aerial Mapping' });
});

router.get('/projects', function(req, res) {
  res.render('projects', { title: 'Projects' });
});


/**
*   @Submit: Upload Drag and Drop Photos
*/
router.post('/target', function(req, res) {
  console.log(req.body) // form fields
  console.log(req.files) // form files

  res.redirect("projects");
});

router.get('/projects', function(req, res) {
  res.render('projects', { title: 'Uploaded Photos' });
});



module.exports = router;

