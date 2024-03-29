const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require("bcryptjs"); //requiring module for password encryption
const jwt = require("jsonwebtoken"); //
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter your name"],
        maxLength:[50,"Name cannot exceed 50 characters"],
        minLength:[3,"Name must be more than 3 characters"]
        },
    email:{
        type:String,
        required:[true,"Please enter your email address"],
        unique:true,
        validate:[validator.isEmail,"please enter a valid email"]
    },
    password:{
        type:String,
        required:[true,"please enter a valid password"],
        minLength:[8,"Password should be at least 8 characters"],
        select:false //select is declared false so that the admin or the user cannot access users password while searching for product details

    },
    avtar:{
        public_id:{
            type:String
        },
        url:{
            type:String
        }
    },
    
    
    role:{
        type:String,
        default:"user",

    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,


}
);
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){ //checks if password is not modified, if found modified then it will be encrypted else it won't be encrypted again
        next();
    }

    this.password= await bcrypt.hash(this.password,10);
})

//JWT TOKEN
userSchema.methods.getJWTToken  = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRE,
        }
    )
}
//comparing password
userSchema.methods.comparePassword= async function(enteredPassword){
    return bcrypt.compare(enteredPassword,this.password);
}


//Generating a password reset token
userSchema.methods.getResetPasswordToken = function(){

//generating token
const resetToken = crypto.randomBytes(20).toString("hex");

//hashing the resetPasswordToken cryptographically and adding it to userSchema
this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");//sha256 is a cryptograhic hashing algorithm which helps to generate a unique string of characters from a piece of input text

this.resetPasswordExpire =Date.now() + 15*60*1000; 
return resetToken;
}
module.exports =mongoose.model("User",userSchema);