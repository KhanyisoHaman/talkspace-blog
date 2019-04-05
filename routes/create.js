// Get the required var
var express = require('express');
var router = express.Router();
var Posts = require('../db.json');
var request = require('request');

// Get Create Page
router.get('/', function(req,res,next){
    res.render('create', {
        title: 'Create Page'
    });

});

// Post a create a request
router.post('/', function(req,res,next){
    var posts = Posts.posts;
    // Get the id of the last post
    var id = Posts[Posts.length-1].id;

    // Get id for the last post -adds on-
    id = Number(id)+1;
    
    // Getting the date
    var newDate = new Date();
    
    //create date format
    var date = '${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear}';

    // Get the content/description
    var content = req.body.content;

    // Text is used for description
    // turns the object to a string
    var text = JSON.stringify(content);

    // Description Var
    var description;
    description = text.charAt(1);

    // Gets the character or char from the string
    for(var i = 2; i < 200; i++) {
        description += text.charAt(i);
    }

    // Post Request
    request({
        url: 'localhost:3000', 
        method: Posts,
        form: {
            id: id,
            date: date,
            title: req.body.title,
            image: req.body.image,
            description: description + '...</p>',
            content: content,
            author: req.app.locals.user,
        },

        function(error,response,body){
            res.render('index', {message: 'successfully added'});
        }
    })
            
            // redirect to hompage after you created your post
            res.redirect('..');
})

            module.exports = router;
        
    

