const express = require("express"); //importing express module
var bodyParser = require("body-parser");
const app =express(); //calling the express() function which puts a  new express application inside the 'app' variable
  app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
const clothe = require("./routes/clotheRoute");
app.use("/api/v1",clothe)  ;
module.exports =app; //telling Node.js to give this file's access to other files

 