const express= require("express");
const app= express();
const personsRoutes= require("./routes/persons.routes.js");

app.use(express.urlencoded({extended: true}));
app.use(personsRoutes);
module.exports= app;