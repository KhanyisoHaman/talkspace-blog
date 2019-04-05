// Get data before you delete

var express = require('express');
var router = express.Router();
var Posts = require('../db.json');

router.get('/', function(req, res, next) {
    console.log(req.params.postId);

    // Make a post
    request({
        url: 'http://localhost:3004/posts' + req.params.postId,
        method: 'DELETE',
        },

        function(error,response,body) {
            var data = {
                title: "Name of the Title",
                posts: Posts,
                message: "Successfully Deleted"
              };

            res.redirect('..');
        }
    );
});