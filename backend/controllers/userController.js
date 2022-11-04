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
    
    const token = user.getJWTToken();
    
    res.status(201).json({
        success:true,
        token,
    });
});

//login user
exports.loginUser = catchAsyncError(async(req,res,next)=>{
    const {email,password} =req.body;

    //checking if user has given email and password both
    if(!email || !password){
        return next(new ErrorHandler("Please enter both email and password!!!"),400)
    }
    
    const user =await User.findOne({email}).select("+password"); //can't use password in findOne because it has been declared false previously while writing schema
    
    if(!user){
    return next(new ErrorHandler("Invalid email or password"));
    }

    const isPasswordMatched =user.comparePassword(password); 

    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password",401));
    }
    const token = user.getJWTToken();
    
    res.status(200).json({
        success:true,
        token,
    });
    
});