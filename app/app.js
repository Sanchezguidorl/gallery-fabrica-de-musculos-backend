const express = require("express");
const app = express();
const personsRoutes = require("./routes/persons.routes.js");
const cors = require('cors');

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({extended: true}));
app.use(personsRoutes);

module.exports = app;