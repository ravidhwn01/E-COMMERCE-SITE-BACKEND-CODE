const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler")
const  catchAsyncError = require("../middleware/catchAsyncError");

// Create new order => /api/v1/order/new
exports.newOrder = catchAsyncError(async (req, res, next) => {
    const {
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo,
    } = req.body;
    
    const order = await Order.create({
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo,
        paidAt: Date.now(),
        user: req.user._id,
    });
    
    res.status(200).json({
        success: true,
        order,
    });
    }
);


//get single order
exports.getSingleOrder = catchAsyncError(async (req, res, next) => {
    //joins in mongo   user wale collection m se user ke name or email le lega uski id ke reference se
    const order = await Order.findById(req.params.id).populate("user", "name email");
    
    if (!order) {
        return next(new ErrorHandler("No order found with this ID", 404));
    }
    
    res.status(200).json({
        success: true,
        order,
    });
}
);

//get  logged in user orders
exports.myOrders = catchAsyncError(async (req, res, next) => {
    // ye  order me se user ki ID wale sare orders le lega
    const orders = await Order.find({ user: req.user.id });
    
    res.status(200).json({
        success: true,
        orders,
    });
}
);
