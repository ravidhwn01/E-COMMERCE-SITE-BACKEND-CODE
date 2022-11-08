
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

// get single order  - ADMIN
router.route("/order/:id").get(isAuthenticationUser,getSingleOrder);

// get logged in user orders  - ADMIN
router.route("/orders/me").get(isAuthenticationUser, myOrders);

// get all orders - ADMIN
router.route("/admin/orders").get(isAuthenticationUser,authorizeRoles("admin"),allOrders);

// update / process order - ADMIN
router.route("/admin/order/:id").put(isAuthenticationUser,authorizeRoles("admin"),updateOrder);

// delete order - ADMIN
router.route("/admin/order/:id").delete(isAuthenticationUser,authorizeRoles("admin"),deleteOrder);


//exports
module.exports = router;
