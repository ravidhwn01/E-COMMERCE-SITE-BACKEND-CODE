const express = require("express");
const {getAllProducts, createProduct, updateProduct, deleteProduct, getSingleProduct} = require("../controllers/productController");
const {isAuthenticationUser,authorizeRoles }= require("../middleware/auth");
const router = express.Router();

// we are creating routes 
router.route("/products").get(isAuthenticationUser,authorizeRoles("admin"),getAllProducts);
router.route("/product/new").post(isAuthenticationUser,createProduct);    // admin ke liye
router.route("/product/:id").put(isAuthenticationUser,updateProduct);      // admin ke liye
router.route("/product/:id").delete(isAuthenticationUser, deleteProduct);   // admin ke liye
router.route("/product/:id").get(getSingleProduct);   // admin ke liye

module.exports = router;
