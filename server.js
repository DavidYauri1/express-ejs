const express = require('express');
const app = express();
const rutas = require('./rutas/rutas.js');
const port =7000;
app.use('/',rutas);
app.set('view engine','ejs');

function c_server() {
    console.log(`Listening on port ${port}`);
    
}


const server = app.listen(port,c_server);