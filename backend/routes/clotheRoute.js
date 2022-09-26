const express =require("express");

const { getAllProducts,createProduct,updateProduct, deleteProduct } = require("../controllers/clotheController");
const router = express.Router(); //creating a new instance of a router object

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct).delete(deleteProduct); //req.params.id will replace :id  
module.exports=router;   