const express = require("express"); //importing express module
var bodyParser = require("body-parser");
const app =express(); //calling the express() function which puts a  new express application inside the 'app' variable

const cookieParser = require("cookie-parser");
const errorMiddleware= require("./middleware/Error");


  app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());

//importing routes
const clothe = require("./routes/clotheRoute");
const user=require("./routes/userRoutes");
app.use("/api/v1",clothe)  ;
app.use("/api/v1",user);
//Error middleware
app.use(errorMiddleware);

module.exports =app; //telling Node.js to give this file's access to other files


 