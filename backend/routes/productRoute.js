const express = require("express");
const {getAllProducts, createProduct, updateProduct, deleteProduct, getSingleProduct,createProductReview, getProductReviews ,deleteReview} = require("../controllers/productController");
const {isAuthenticationUser,authorizeRoles }= require("../middleware/auth");
const router = express.Router();

// we are creating routes 
router.route("/products").get(getAllProducts);
router.route("/admin/product/new").post(isAuthenticationUser,authorizeRoles("admin"),createProduct);    // admin ke liye
router.route("/admin/product/:id").put(isAuthenticationUser,updateProduct);      // admin ke liye
router.route("/admin/product/:id").delete(isAuthenticationUser, deleteProduct);   // admin ke liye
router.route("/product/:id").get(getSingleProduct);   // admin ke liye
// reviews
 router.route("/review").put(isAuthenticationUser,createProductReview);   // admin ke liye
 //review
 router.route("/reviews").get(getProductReviews); 
 //delete reviews
    router.route("/reviews").delete(isAuthenticationUser,deleteReview);
module.exports = router;
