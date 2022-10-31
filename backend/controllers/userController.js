const ErrorHandler = require("../utils/errorhandler")
const  catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModel");
// token
const sendToken = require("../utils/jwtToken");
// register a user
exports.registerUser = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: "this is a sample id",
            url: "profilepicurl",
        },

       
    });
    // generating jwt token

    
    sendToken(user,201,res);
    // const token = user.getJwtToken();
    // res.status(201).json({
    //     status: true,
    //     message: "user created successfully",
    //     token,
    // })
    })
    //login user
    exports.loginUser = catchAsyncError(async (req, res, next) => {
        const { email, password } = req.body;
        //check if email and password is entered by user
        if (!email || !password) {
            return next(new ErrorHandler("Please enter email and password", 400))
        }
        //finding user in database
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return next(new ErrorHandler("Invalid email or password", 401))
        }
        //check if password is correct or not
        const isPasswordMatched = await user.comparePassword(password);
        if (!isPasswordMatched) { 
            return next(new ErrorHandler("Invalid email or password", 401))
        }
        sendToken(user,200,res);
        
        
        // const token = user.getJwtToken();
        // res.status(200).json({
        //     status: true,
        //     message: "user logged in successfully",
        //     token,
        // })
    }
    )
    //logout user
    exports.logout = catchAsyncError(async (req, res, next) => {
        res.cookie('token', null, {
            expires: new Date(Date.now()),
            httpOnly: true
        })
        res.status(200).json({
            status: true,
            message: "user logged out successfully",
        })
    }
    )
