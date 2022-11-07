  const Product= require("../models/clotheModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError= require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures");

  //create product by admin 
  exports.createProduct= catchAsyncError(async(req,res,next)=>{


    req.body.user = req.user.id;

    const product =await Product.create(req.body);
    
    res.status(201).json({
      success:true,
      product
    });
  });

  //get all products
  exports.getAllProducts =catchAsyncError(async(req,res) =>{ //a middleware function named getAllClothes which returns a repsonse that the routes are working fine
    const resultPerPage=5;
    const apifeatures=new ApiFeatures(Product.find(),req.query).search().filter().pagination(resultPerPage);
    const products= await apifeatures.query;   
    res.status(200).json({
        success:true,
        products
    });
  });

  //get a single product detail
   exports.getProductDetails = catchAsyncError(async(req,res,next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){   // if product is not found
     return next(new ErrorHandler("product not found",404)); //next is a callback function
    }
    res.status(200).json({
      success:true,
      product
    });
  });

  //update product
  exports.updateProduct =catchAsyncError(async(req,res,next)=>{
    let product = await Product.findById(req.params.id);
    if(!product){   // if product is not found
     return next(new ErrorHandler("product not found",404));
      // res.status(500).json({
      //   success:false,
      //   message:"the product is not found"
      // })
    }
    product =await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });
    res.status(200).json({
      success:true,
      product
    });
  });
  //Delete a product
   exports.deleteProduct =catchAsyncError(async(req,res,next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){   // if product is not found
      
          return next(new ErrorHandler("product not found",404));
      // res.status(500).json({
      //   success:false,
      //   message:"the product is not found"
      // })
    }
   await product.remove();
    res.status(200).json({
      success:true,
      message:"The Product is deleted"
    })
  });

  //create new review or update the review
  exports.createProductReview =catchAsyncError(async(req,res,next)=>{

    const {rating,comment,productId}=req.body;

    const review={
      user: req.user._id,
      name:req.user.name,
      rating:Number(rating),
      comment,
    };
    const product=await Product.findById(productId);

    const isReviewed= product.reviews.find((rev)=>rev.user.toString()===req.user.id.toString());
    
    if(isReviewed){
      product.reviews.forEach(rev=>{
        if(rev.user.toString()===req.user.id.toString())
        {
          (rev.rating=rating),
          (rev.comment=comment);
        }
      });
    }
    else
    {
      product.reviews.push(review);
      product.numberOfReviews=product.reviews.length;
    }

    let avg=0;

    product.ratings =product.reviews.forEach(rev=>{
      avg+=rev.rating;
    })
    product.ratings=avg/product.reviews.length;
    
    await product.save({validateBeforeSave:false});

    res.status(200).json({
      success:true,
    });
  });