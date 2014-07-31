'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', function(req,res){
  res.render('home');
});
app.get('/calc', function(req,res){
  res.render('calc');
});

app.post('/calc', function(req,res){
var x = req.body.x * 1;
var y = req.body.y * 1;
var calculation = req.body.calculation;
var calc;
if(calculation === '+'){calc = x+y;}else
if(calculation === '-'){calc = x-y;}else
if(calculation === '*'){calc = x*y;}else
if(calculation === '/'){calc = x/y;}
  
  res.render('calc', {x:x, y:y, calculation:calculation, calc:calc});
});

app.get('/boxes', function(req,res){
  res.render('boxes');
});
app.post('/boxes', function(req,res){
  var colors =req.body.colors.split(',');
  var h = req.body.height.split('-');
  var w = req.body.width.split('-');
  var n = req.body.n *1;
  w = w.map(function(n){return n* 1;});
  h = h.map(function(n){return n* 1;});


  res.render('nboxes', {h:h, w:w, n:n, colors:colors});
console.log(h);
});

var port = process.env.PORT;

app.listen(port, function(){
    console.log('Express is now listening on PORT',port);
});

