var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.render('pages/index', {title:'Mercado del Mezcal'})
})

module.exports = app;