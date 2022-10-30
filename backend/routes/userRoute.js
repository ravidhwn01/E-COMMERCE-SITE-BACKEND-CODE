const express = require("express");
const { registerUser } = require("../controllers/userController");
const router = express.Router();
// we are creating routes 
router.route("/register").get(registerUser);