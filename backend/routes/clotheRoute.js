const express =require("express");

const { getAllProducts,createProduct } = require("../controllers/clotheController");
const router = express.Router(); //creating a new instance of a router object

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
module.exports=router;  