var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.render('pages/index', {title:'Mercado del Mezcal'})
})

app.get("/galeria", (req, res) => {
    res.render('pages/galeria', {title:'Galería'})
})

app.get("/contacto", (req, res) => {
    res.render('pages/contacto', {title:'Contacto'})
})

module.exports = app; 