const app = require('./app');

//dotend is a zero dependency module that loads environment variables from the .env file into process.env
const dotenv=require("dotenv");
const connectDataBase=require('./config/database')


//Handling uncaught excception
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message} `);
    console.log("Shutting down the server due to Uncaught Exception");
    process.exit(1);
});
console.log(xd);
//set config
dotenv.config({path:"backend/config/config.env"}); 

//Connecting database
connectDataBase();

const server = app.listen(process.env.PORT,()=>{ //creating a server
    // if(err) console.log("error in server sertup"); 
    // else console.log(`Server is listening on PORT : ${process.env.PORT}`);
    console.log(`Server is listening on PORT : ${process.env.PORT}`)
});



//Unhandled Promise rejection
process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to unhandled promise rejection");
    server.close(()=>{
        process.exit(1);//using process.exit(1) instead of throw to terminate the script 
    });
})