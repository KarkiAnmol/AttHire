const express =require("express");

const { getAllProducts,createProduct,updateProduct, deleteProduct, getProductDetails } = require("../controllers/clotheController");
const { isAutheticatedUser,authorizedRoles } = require("../middleware/auth");
const router = express.Router(); //creating a new instance of a router object

router.route("/products").get(getAllProducts);
router.route("/product/new").post(isAutheticatedUser, authorizedRoles("admin"),createProduct);
router.route("/product/:id")
.put(isAutheticatedUser, authorizedRoles("admin"),updateProduct)
.delete(isAutheticatedUser, authorizedRoles("admin"),deleteProduct)
.get(getProductDetails ); //req.params.id will replace :id  
module.exports=router;   