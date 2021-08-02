var express = require("express");
var app = express();

app.get("/reservaciones", (req, res) => {
    res.render('pages/reservaciones', {title:'Reservaciones'})
})

module.exports = app;