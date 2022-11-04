const express = require("express");
// const {isAuthenticatedUser,authorizeRoles }= require("../middleware/auth");
const { registerUser, loginUser,logout,forgotPassword, resetPassword,getUserProfile } = require("../controllers/userController");
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
// user profile
router.route("/me").get(getUserProfile);
// exports
module.exports = router;