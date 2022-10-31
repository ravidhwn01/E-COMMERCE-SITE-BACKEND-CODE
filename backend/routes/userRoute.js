const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const router = express.Router();
// we are creating routes 
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
// exports
module.exports = router;