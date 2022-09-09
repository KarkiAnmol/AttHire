const app = require('./app');

//dotend is a zero dependency module that loads environment variables from the .env file into process.env
const dotenv=require("dotenv");
const connectDataBase=require('./config/database')

//set config
dotenv.config({path:"backend/config/config.env"}); 

//Connecting database
connectDataBase();

app.listen(process.env.PORT,()=>{ //creating a server
    // if(err) console.log("error in server sertup"); 
    // else console.log(`Server is listening on PORT : ${process.env.PORT}`);
    console.log(`Server is listening on PORT : ${process.env.PORT}`)
})