  const Product= require("../models/clotheModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError= require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures");

  //create product by admin 
  exports.createProduct= catchAsyncError(async(req,res,next)=>{
    const product =await Product.create(req.body);
    res.status(201).json({
      success:true,
      product
    });
  });

  //get all products
  exports.getAllProducts =catchAsyncError(async(req,res) =>{ //a middleware function named getAllClothes which returns a repsonse that the routes are working fine
    const apifeatures=new ApiFeatures(Product.find(),req.query).search().filter();
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