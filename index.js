const app=require("./app/app.js");
const connection= require("./app/db/db.js");

//Método inicializador de la app
const main=async()=>{
  await connection();
}

main();

app.listen(5000, ()=>{
console.log("Servidor iniciado en el puerto 5000")
});