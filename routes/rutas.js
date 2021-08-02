var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.render('pages/index', {title:'Mercado del Mezcal'})
})

app.get("/menu", (req, res) => {
    res.render('pages/menu', {title:'Menú'})
})

app.get("/reservaciones", (req, res) => {
    res.render('pages/reservaciones', {title:'Reservaciones'})
})

module.exports = app; 