const express = require("express");
const { registerUser, loginUser,logout } = require("../controllers/userController");
const router = express.Router();
// we are creating routes 
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
// logout route
router.route("/logout").get(logout);
// exports
module.exports = router;