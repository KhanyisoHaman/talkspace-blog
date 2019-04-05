// Create Required Variables
var express = require('express');
var router = express.Router();
var users = require('../db.json').users;
var request = require('request');

// Get Sign-in Page
router.get('/', function(req,res,next){
    res.render('sign-in', {
        title: 'Sign In',
        signInError: req.app.locals.signError,
    });
})

// To Sign In
router.post('/', function(req,res,next) {

    // Get info from the body
    var logUser = req.body.username;
    var logPassword = req.body.password;

    // Check thru USERS in db
    for(var i = 0; i < users.length; i++) {
        // If Username and Password are Correct
        if((users[i].username == logUser || users[i].email == logUser)
         && users[i].password == logPassword) {
            //  Create a Cookie
            res.cookie('userId', users[i].id)
            
            // Sets logUser to the correct username
            logUser = users[i].username;
            console.log(req.cookies);

            // Sets the correct Sign In Variables
            req.app.locals.user = logUser;
            req.app.locals.userIndex = i;
            req.app.locals.signError = "Log in Successful";

            // It must redirect to home page after sign in
            res.redirect('/');
        }
    };
    // Check if user signed in correctly
    if(req.app.locals.user != logUser) {
        req.app.locals.signError = 'Username/Password is Incorrect';
    };

    res.redirect('/sign-in');
});

module.exports = router;