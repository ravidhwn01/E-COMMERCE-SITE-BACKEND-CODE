//order model
var mongoose = require("mongoose");
// creating document(schema)
const orderSchema = new mongoose.Schema({
  shippingInfo: {
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  orderItems: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      },
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  paymentInfo: {
    id: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      require: true,
    },
  },
  paidAt: {
    type: Date,
    require: true,
  },
  itemsPrice: {
    type: Number,
    require: true,
    default: 0.0,
  },
  taxPrice: {
    type: Number,
    require: true,
    default: 0.0,
  },
  shippingPrice: {
    type: Number,
    require: true,
    default: 0.0,
  },
  totalPrice: {
    type: Number,
    require: true,
    default: 0.0,
  },
  orderStatus: {
    type: String,
    require: true,
    default: "Processing",
  },
  deliveredAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
//exports                  // collectionName
module.exports = mongoose.model("Order", orderSchema);
