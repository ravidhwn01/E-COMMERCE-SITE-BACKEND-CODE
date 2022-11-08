
const express = require("express");
const router = express.Router();
const {
  newOrder,
  getSingleOrder,
  myOrders,
  allOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

const { isAuthenticationUser, authorizeRoles } = require("../middleware/auth");
router.route("/order/new").post(isAuthenticationUser,newOrder);

// get single order
router.route("/order/:id").get(isAuthenticationUser,authorizeRoles("admin"),getSingleOrder);

// get logged in user orders
router.route("/orders/me").get(isAuthenticationUser ,authorizeRoles("admin"),myOrders);


//exports
module.exports = router;
