const express =require("express");

const { getAllProducts,createProduct,updateProduct, deleteProduct, getProductDetails } = require("../controllers/clotheController");
const { isAutheticatedUser } = require("../middleware/auth");
const router = express.Router(); //creating a new instance of a router object

router.route("/products").get(isAutheticatedUser, getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails ); //req.params.id will replace :id  
module.exports=router;   