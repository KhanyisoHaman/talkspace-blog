// Create Required Variables
var express = require('express');
var router = express.Router();
var request = require('request');

// Get Sign-out Page
router.get('/', function(req,res,next){

    // Set default
    req.app.locals.login = false;
    req.app.locals.user = "";
    req.app.locals.signIn = "";
    req.app.locals.regError = "";

    // Create a cookie
    res.clearCookie('userId');
    console.log(req.cookies.userId);

    // Redirect to Home Page When You Sign Out
    res.redirect('/');
});

module.exports = router;