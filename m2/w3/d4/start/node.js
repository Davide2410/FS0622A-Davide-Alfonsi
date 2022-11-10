const express = require("express");
const app = express();
const path = require('path');

// UTILIZZA QUESTO NAME COME INDIRIZZO BASE PER TUTTI I FILE RICHIESTI
app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(4000);