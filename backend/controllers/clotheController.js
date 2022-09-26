  const Product= require("../models/clotheModel");

  //create product by admin 
  exports.createProduct= async(req,res,next)=>{
    const product =await Product.create(req.body);
    res.status(201).json({
      success:true,
      product
    })
  }

  //get all products
  exports.getAllProducts =async(req,res) =>{ //a middleware function named getAllClothes which returns a repsonse that the routes are working fine
    const products= await Product.find();
    res.status(200).json({
        success:true,
        products
    })
  }

  //get a single product detail
   exports.getProductDetails =async(req,res,next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){   // if product is not found
      res.status(500).json({
        success:false,
        message:"the product is not found"
      })
    }
    res.status(200).json({
      success:true,
      product
    })
  }

  //update product
  exports.updateProduct =async(req,res)=>{
    let product = await Product.findById(req.params.id);
    if(!product){   // if product is not found
      res.status(500).json({
        success:false,
        message:"the product is not found"
      })
    }
    product =await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });
    res.status(200).json({
      success:true,
      product
    })
  }
  //Delete a product
   exports.deleteProduct =async(req,res,next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){   // if product is not found
      res.status(500).json({
        success:false,
        message:"the product is not found"
      })
    }
   await product.remove();
    res.status(200).json({
      success:true,
      message:"The Product is deleted"
    })
  }