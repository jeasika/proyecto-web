var express = require("express");
var app = express();

app.get("/menu", (req, res) => {
    res.render('pages/menu', {title:'Menú'})
})

module.exports = app;