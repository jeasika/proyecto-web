var express = require("express");
var app = express();

app.get("/galeria", (req, res) => {
    res.render('pages/galeria', {title:'Galería'})
})

module.exports = app;