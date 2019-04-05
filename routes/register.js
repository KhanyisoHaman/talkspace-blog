var express = require('express');
var router = express.Router();
var users = require('../db.json').users;
var request = require('request');

// getting the register page
router.get('/', function(req,res,next){
    res.render('register', {
        title: 'Register',
        thisError: req.app.locals.regError,
    });
})

// create a new user
router.post('/', function(req,res,next){

    // used username
    var usernameUsed;

    // sets ID to last ID in users +1
    var id = users[users.length-1].id;
    id = Number(id)+1;

    // to check id useranme is already used
    var logUser = req.body.username;

    // checking through users for used names
    for (var i = 0; i < users.length; i++) {
        // check if username already exists
        if(logUser == users[i].username){
            usernameUsed = true;
            console.log(usernameUsed);
        }
    }

    // if username is not available create a new membership account
    if (usernameUsed != true) {
        request({
            url: 'http://localhost:8080/users',
            method: 'Posts',
            form: {
                id: id,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            },

            function(error, response, body) {
                res.render('register', {message:' successfully added'});
            }
        });

        req.app.locals.regError = 'Registration Successful'

        // goes to sign in page after you register
        res.redirect('/sign-in');
    }

    // if user is already used
    else if (usernameUsed == true) {
        req.app.locals.regError = 'Username Taken';
    }

    res.redirect('/sign-in');
})

module.exports = router