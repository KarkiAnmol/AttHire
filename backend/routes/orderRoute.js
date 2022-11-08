const express = require("express");
const { newOrder } = require("../controllers/orderController");
const { isAutheticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route("/order/new").post(isAutheticatedUser,newOrder);
module.exports=router;