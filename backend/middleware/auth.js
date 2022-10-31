const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("./catchAsyncError");
// jwt token require
const jwt = require('jsonwebtoken');
const User = require("../models/userModel");
// user authentication

const isAuthenticationUser = catchAsyncError(async(req,res,next)=>{


 const {token} = req.cookies;
if(!token){
    return next( new ErrorHandler("Please login to access this resource ",401));
}
//  console.log(token);

    // user authentication
    const decodedData = jwt.verify(token,process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.id);
    next();
 
})
// exports
module.exports = isAuthenticationUser;
