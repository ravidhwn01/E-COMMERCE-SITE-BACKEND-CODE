
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




//exports
module.exports = router;
