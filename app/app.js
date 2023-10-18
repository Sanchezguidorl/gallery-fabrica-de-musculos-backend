const express = require("express");
const app = express();
const personsRoutes = require("./routes/persons.routes.js");
const cors = require('cors');
//Habilitación de peticiones cruzadas
app.use(cors());
//Limitación de perso máximo de payload recibido
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({extended: true}));

//Rutas de acceso para interacción con el modelo PersonTransformation
app.use(personsRoutes);

module.exports = app;