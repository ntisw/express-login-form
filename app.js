var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.listen('4001');
app.use(express.static('www'));
app.use(bodyParser.json());
app.post('/login',function(req,res){
    var user = req.body.username;
    var pass = req.body.password;
    if(user==='admin'&&pass==='abc123')
    res.send('login success');
    else
    res.send('login failed');
});