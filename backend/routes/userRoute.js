const express = require("express");
const { registerUser, loginUser,logout,forgotPassword, resetPassword, getUserProfile } = require("../controllers/userController");
const {isAuthenticatedUser }= require("../middleware/auth");
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
router.route("/me").get(isAuthenticatedUser,getUserProfile);   //oops! not working 

// router.route("/me/:id").get(getUserProfile); // working for  given id
// exports
module.exports = router;