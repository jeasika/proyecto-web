var express = require("express");
var app = express();

app.get("/contacto", (req, res) => {
    res.render('pages/contacto', {title:'Contacto'})
})

module.exports = app;