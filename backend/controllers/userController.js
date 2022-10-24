const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError= require("../middleware/catchAsyncError");
const User=require("../models/userModel");

//Register a User
exports.registerUser = catchAsyncError(async(req,res,next)=>{
    const{name,email,password} =req.body;
    const user= await User.create({
        name,email,password,
        avatar:{ //this portion will be updated later after completing frontend
            public_id:"this is a sample id",
            url:"profilePicture"
        }
    });
    res.status(201).json({
        success:true,
        user
    });
});