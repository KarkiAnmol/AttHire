const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError= require("../middleware/catchAsyncError");
const User=require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail =require("../utils/sendEmail.js");
const crypto = require("crypto");

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
    
    // const token = user.getJWTToken();
    
    // res.status(201).json({
    //     success:true,
    //     token,
    // });
    sendToken(user,201,res);
});

//login user
exports.loginUser = catchAsyncError(async(req,res,next)=>
{
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
   
    sendToken(user,200,res);
});


//LogOut User
exports.logout =catchAsyncError(async(req,res,next)=>
{
    res.cookie("token",null,
    {
        expires:new Date(Date.now()),
        httpOnly:true,
    })
    res.status(200).json
    ({
        success:true,
        message:"logged out",
    });
})


//forgot password

exports.forgotPassword = catchAsyncError(async(req,res,next)=>{

    const user = await User.findOne({email:req.body.email});

    if(!user){
        return next(new ErrorHandler ("user not found",404) );
    }

    //get resetPassword Token
   const resetToken = user.getResetPasswordToken();
   await user.save({validateBeforeSave:false});

   //sending reset email link

   //    const resetPasswordUrl= `http://localhost/api/v1/password/reset/${resetToken}` //for local host only
    
    const resetPasswordUrl= `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`; //req.protocol could be http or https

    const message = `Hello ${user.name},\n Your password reset token is : \n\n\n ${resetPasswordUrl}  \n\n If you haven't requested this email then please ignore it and report this event to us at atthireofficial@gmail.com`
    //using try catch to send message and email link
    try{
        await sendEmail({

            email:user.email,
            subject: `AttHire Password Recovery`,
            message,
        });
        res.status(200).json({
            success:true,
            message: `Email sent to ${user.email} successfully`,
        });
    }
    catch(error){
        user.resetPasswordToken=undefined;
        user.resetPasswordExpire=undefined;

        await user.save({ validateBeforeSave: false});
        return next(new ErrorHandler(error.message,500));

    }

});

exports.resetPassword =catchAsyncError(async(req,res,next)=>{
    // creating hash token
    const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
    


    const user = await user.findOne({
        resetPasswordToken,
        resetPasswordExpire:{$gt:Date.now()},
    });

    if(!user){
        return next(new ErrorHandler("reset password token is invalid or has been expired",400));
    }

    if(req.body.password !== req.body.confirmPassword){
        return next(new ErrorHandler("Both of the passwords donot match",400));
    }
    user.password = req.body.password;
    user.resetPasswordToken=undefined;
    user.resetPasswordExpire=undefined;
    await user.save();
    sendToken(user,200,res);  

});



//Get user details
exports.getUserDetails=catchAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.user.id);
    res.status(200).json({
        success:true,
        user,
    });
});