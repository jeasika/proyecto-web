var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.render('pages/index', {title:'MdM'})
})

module.exports = app;