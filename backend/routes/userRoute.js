const express = require("express");
const { registerUser, loginUser,logout,forgotPassword } = require("../controllers/userController");
const router = express.Router();
// we are creating routes 
router.route("/register").post(registerUser);
router.route("/login").post(loginUser); 
// forgot password
router.route("/password/forgot").post(forgotPassword);
// logout route
router.route("/logout").get(logout);
// exports
module.exports = router;