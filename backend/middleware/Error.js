const { off } = require('../app');
const ErrorHandler= require('../utils/errorHandler');
module.exports =(err,req,res,next)=>{
    err.statusCode= err.statusCode || 500;
    err.message= err.message || "Internal server Error";

    //Error for wrong id of product in mongodb
    if(err.name == "CastError"){
        const message =`Product not found.Invalid : ${err.path} `;
        err =new ErrorHandler(message,400);
    }
    res.status(err.statusCode).json({
         success:false,
         error:err.stack //The err.stack property is a string describing the point in the code at which the Error was instantiated.
    })

}