const express =require("express");

const { getAllClothes } = require("../controllers/clotheController");
const router = express.Router(); //creating a new instance of a router object

router.route("/clothes").get(getAllClothes);
module.exports=router;  