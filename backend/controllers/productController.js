const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler")
const  catchAsyncError = require("../middleware/catchAsyncError");
const APIFeatures = require("../utils/apiFeatures");
// create product -- admin ke liye
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
  const resPerPage = 2;// per page  etne page dikhne chahiye
  const productCount = await Product.countDocuments();

 const apiFeatures = new APIFeatures(Product.find(),req.query)
 .search()
 .filter()
  .paginate(resPerPage)
 ;
  // const products = await Product.find(); // ye use nhi kr sakte ab
  const products = await apiFeatures.query;
  res.status(200).json({
    status: true,
     products,
     productCount,
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

// productCount