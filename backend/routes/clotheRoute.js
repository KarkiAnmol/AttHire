const express =require("express");

const { getAllProducts,createProduct,updateProduct, deleteProduct, getProductDetails, createProductReview, getProductReviews, deleteReview } = require("../controllers/clotheController");
const { isAutheticatedUser,authorizedRoles } = require("../middleware/auth");
const router = express.Router(); //creating a new instance of a router object

router.route("/products").get(getAllProducts);
router.route("/admin/product/new").post(isAutheticatedUser, authorizedRoles("admin"),createProduct);
router.route("/admin/product/:id")
.put(isAutheticatedUser, authorizedRoles("admin"),updateProduct)
.delete(isAutheticatedUser, authorizedRoles("admin"),deleteProduct); //req.params.id will replace :id  


router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAutheticatedUser,createProductReview);
router.route("/reviews").get(getProductReviews).delete(isAutheticatedUser,deleteReview);
module.exports=router;   