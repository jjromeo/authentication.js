var express = require('express');
var router = express.Router();
var fs = require('fs');
var User = require('../models/User.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

//get for form page
router.get ('/form', function(req, res){
    fs.readFile('./form.html', function(error, content) {
        if (error) {
            res.writeHead(500);
            res.end();
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content, 'utf-8');
        }
    });
});

router.post('/signup', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    User.addUser(username, password, function(err, user) {
        if (err) throw err;
        res.redirect('/form');
    });
});
module.exports = router;
