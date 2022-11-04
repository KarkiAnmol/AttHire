const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError= require("./catchAsyncError");
const jwt=require("jsonwebtoken");
const User =require("../models/userModel");
exports.isAutheticatedUser= catchAsyncError(async(req,res,next)=>{

    const {token} =req.cookies; //req.cookie contains cookies sent by request

    if(!token){
        return next(new ErrorHandler("please login to access this product",401));
    }
    const decodedData =jwt.verify(token,process.env.JWT_SECRET);
    req.user=await User.findById(decodedData.id);
   
    next();
})

// checks if the user's is admin or user
exports.authorizedRoles = (...roles)=>{
    return (req,res,next)=>{

    if( !roles.includes(req.user.role) )  //if the users role is not admin return error
        {
           return next( 
            new ErrorHandler(`Role: ${req.user.role} is not allowed to access this resource`,403) 
            // console.log("user cannot access to this resource")
            );
        }
     next(); //skipped if role is admin
    };

};