const express = require('express');
const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserDetails, updateUserPassword, updateUserProfile, getAllUsers, getSingleUser } = require('../controllers/userController');
const { isAutheticatedUser, authorizedRoles } = require('../middleware/auth');
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logout);
router.route("/me").get(isAutheticatedUser,getUserDetails);
router.route("/password/update").put(isAutheticatedUser,updateUserPassword);
router.route("/me/update").put(isAutheticatedUser,updateUserProfile);
router.route("/admin/users").get(isAutheticatedUser,authorizedRoles("admin"),getAllUsers);
router.route("/admin/user/:id").get(isAutheticatedUser,authorizedRoles("admin"),getSingleUser);


module.exports = router;

