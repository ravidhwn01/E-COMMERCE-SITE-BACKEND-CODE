const express = require("express");
const { registerUser, loginUser,logout,forgotPassword, resetPassword, getUserProfile,updatePassword,updateProfile } = require("../controllers/userController");
const {isAuthenticationUser,authorizeRoles }= require("../middleware/auth");

const router = express.Router();
// we are creating routes 
router.route("/register").post(registerUser);
router.route("/login").post(loginUser); 
// forgot password
router.route("/password/forgot").post(forgotPassword);
// reset password
router.route("/password/reset/:token").put(resetPassword);
// logout route
router.route("/logout").get(logout);
// user details
router.route("/me").get(isAuthenticationUser,getUserProfile);   // working 
// update user password
router.route("/password/update").put(isAuthenticationUser,updatePassword);   // working
// update user profile
router.route("/me/update").put(isAuthenticationUser,updateProfile);   // working
// exports
module.exports = router;