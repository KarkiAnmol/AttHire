const express = require("express");
const { newOrder, getSingleOrder, myOrders, getAllOrders, updateOrder, deleteOrder } = require("../controllers/orderController");
const { isAutheticatedUser, authorizedRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/order/new").post(isAutheticatedUser,newOrder);
router.route("/order/admin/:id").get(isAutheticatedUser,authorizedRoles("admin"),getSingleOrder);
router.route("/orders/me").get(isAutheticatedUser,myOrders);


router.route("/admin/orders").get(isAutheticatedUser,authorizedRoles("admin"),getAllOrders);

router.route("/admin/order/:id")
.put(isAutheticatedUser,authorizedRoles("admin"),updateOrder)
.delete(isAutheticatedUser,authorizedRoles("admin"),deleteOrder);

module.exports=router;