var express = require('express');
var router = express.Router();
var Posts = require('../db.json');




// My info
var data = {
  title: "Talk Space",
  posts: Posts,
  message: false,
  name: "Westy",
  welcomeText: "Welcome to Talkspace"
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', data);
});



module.exports = router;
// app.listen(8080);

//That is our index 