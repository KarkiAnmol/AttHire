  exports.getAllClothes =(req,res) =>{ //a middleware function named getAllClothes which returns a repsonse that the routes are working fine
    res.status(200).json({message:"ROUTES ARE WORKING"});
  }