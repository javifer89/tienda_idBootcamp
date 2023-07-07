//creamos la app de Express
const express = require("express");

const app = express();

//configuración de la app express
app.use(express.json());

//todas las rutas que lleguen a app, las mandamos a routes/api.js
app.get('/', (req, res) => {
    res.send('hola amiguis');
});
    use('/api', require('./routes/api'))

module.exports = app;
