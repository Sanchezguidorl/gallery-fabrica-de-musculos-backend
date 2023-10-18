//Conección a la base de datos
const mongoose = require("mongoose");

const connection = async () => {
  try {
    const connectionSuccess = await mongoose.connect(
      "mongodb+srv://fabricadb:musculosfabrica4000@fabrica-de-musculos.hgodup2.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("Conectado a la base de datos");
  } catch (error) {
    return new Error("No se pudo conectar a la base de datos", error);
  }
};

module.exports = connection;
