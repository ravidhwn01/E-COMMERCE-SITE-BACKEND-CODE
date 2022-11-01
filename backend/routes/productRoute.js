const express = require("express");
const {getAllProducts, createProduct, updateProduct, deleteProduct, getSingleProduct} = require("../controllers/productController");
const {isAuthenticationUser,authorizeRoles }= require("../middleware/auth");
const router = express.Router();

// we are creating routes 
router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);    // admin ke liye
router.route("/product/:id").put(updateProduct);      // admin ke liye
router.route("/product/:id").delete( deleteProduct);   // admin ke liye
router.route("/product/:id").get(getSingleProduct);   // admin ke liye

module.exports = router;
