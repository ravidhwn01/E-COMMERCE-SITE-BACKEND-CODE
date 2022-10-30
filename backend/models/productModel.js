const mongoose = require("mongoose");
// creating schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter  Product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter  Product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter  Product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      }
    }
  ],
  category: {
    type: String,
    required: [true, "Please Enter Product category"],
  },
  stock: {
    type: Number,
    required: [true, "Please Enter Product Stock"],
    maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 1
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  }
});
// created model
module.exports = mongoose.model("product", productSchema);