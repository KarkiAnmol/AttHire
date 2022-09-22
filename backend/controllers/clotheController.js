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

  