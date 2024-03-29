const mongoose= require('mongoose')
const clotheSchema=new mongoose.Schema({
name:{
    type:String,
    required:[true,"You have to enter clothe name"]
},
description:{
    type:String,
    required:[true,"Please enter clothe description"]
  
},
price:{
    type:Number,
    required:[true,"Please enter price of clothe"],
    maxLength:[7,"price cannot exceed 7 figures"]
},
ratings:{
    type:Number,
    default:0   
},
images:[
 {

  public_id:
    {
        type:String,
        required:true
    },

    url:
    {
        type:String,
        required:true

    }
}
],
category:{
    type:String,
    required:[true,"Please enter clothe's category"]
},
stock:{
    type:Number,
    required:[true,"Please enter number of stocks"],
    maxLength:[5,"Stock cannot exceed 5 figures"],
    default:1
},
numberOfReviews:{
    type:Number,
    default:0
},
reviews:[
    {
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
         },
    name:{  
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
}],


createdAt:{
        type:Date,
        immutable:true,//doesnot let anyone change the created date once it's created
        default:()=>Date.now //A function is created which runs every time this script is updated and returns the recent date
    }
})

module.exports= mongoose.model("Clothe",clotheSchema);//mongoose.model compiles the clotheSchema