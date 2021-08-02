// #Dependencies
var config = require("./config");
var express = require("express");
var morgan = require("morgan");
var path = require('path');

var index = require("./routes/index");
var menu = require("./routes/menu");
var reservaciones = require("./routes/reservaciones");

var app = express();
app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')));

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use('/', index);
app.use('/menu', menu);
app.use('/reservaciones', reservaciones);

app.listen(config.app.port, () =>{
   console.log(`Server running on port  ${config.app.port}`) 
})