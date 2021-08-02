// #Dependencies
var config = require("./config");
var express = require("express");
var morgan = require("morgan");

var app = express();
app.use(morgan('dev'));

app.set('view engine', 'ejs');
var path = require('path')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')));

var index = require("./routes/index");

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use('/', index);

app.listen(config.app.port, () =>{
   console.log(`Server running on port  ${config.app.port}`) 
} )