const ErrorHandler= require('../utils/errorHandler');
module.exports =(err,req,res,next)=>{
    err.statusCode= err.statusCode || 500;
    err.message= err.message || "Internal server Error";
    res.status(err.statusCode).json({
         success:false,
         error:err.stack //The err.stack property is a string describing the point in the code at which the Error was instantiated.
    })

}