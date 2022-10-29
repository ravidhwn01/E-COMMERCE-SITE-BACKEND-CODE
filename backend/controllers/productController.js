const Product = require("../models/productModel");

// create product -- admin ke liye

exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    status: true,
    product,
    // data:{
    // product
    // }
  });
};

// get all  product
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    status: true,

    products,
  });
};

// update product by id  --- admin ke liye
exports.updateProduct = async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404).json({
      status: false,
      message: "product not found",
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    status: true,
    product,
  });
}
// delete the product  --admin ke liye
exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404).json({
      status: false,
      message: "product not found",
    });
  }
  await product.remove();
  res.status(200).json({
    status: true,
    message: "product deleted",
  });
}
//get single product
exports.getSingleProduct = async (req, res,next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404).json({
      status: false,
      message: "product not found",
    });
  }
  res.status(200).json({
    status: true,
    product,
  });
}