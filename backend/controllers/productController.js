const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler")
// create product -- admin ke liye
const  catchAsyncError = require("../middleware/catchAsyncError");
exports.createProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    status: true,
    product,
    // data:{
    // product
    // }
  });
});

// get all  product
exports.getAllProducts = catchAsyncError( async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    status: true,

    products,
  });
});

// update product by id  --- admin ke liye
exports.updateProduct = catchAsyncError( async (req, res) => {
  let product = await Product.findById(req.params.id);
  // if (!product) {
  //   res.status(404).json({
  //     status: false,
  //     message: "product not found",
  //   });
  // }
  if (!product) {
    
    return next(new ErrorHandler('Product not found',404));
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
})
// delete the product  --admin ke liye
exports.deleteProduct = catchAsyncError(async (req, res) => {
  const product = await Product.findById(req.params.id);
  // if (!product) {
  //   res.status(404).json({
  //     status: false,
  //     message: "product not found",
  //   });
  // }
  if (!product) {
    return next(new ErrorHandler('Product not found',404));
  }
  await product.remove();
  res.status(200).json({
    status: true,
    message: "product deleted",
  });
})
//get single product
exports.getSingleProduct = catchAsyncError(async (req, res,next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    // res.status(404).json({
    //   status: false,
    //   message: "product not found",
    // }
    // );
    return next(new ErrorHandler('Product not found',404));
  }
  res.status(200).json({
    status: true,
    product,
  });
})