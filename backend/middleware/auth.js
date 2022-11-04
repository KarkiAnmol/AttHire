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
    await User.findById(decodedData._id);
    req.user =console.log(token);
    next();
})