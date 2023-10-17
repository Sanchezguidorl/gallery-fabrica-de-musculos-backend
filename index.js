const app=require("./app/app.js");
const connection= require("./app/db/db.js");
const main= ()=>{
app.listen(5000, ()=>{
console.log("en linea")
connection();
});
}

main();