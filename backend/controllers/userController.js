const ErrorHandler = require("../utils/errorhandler")
const  catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModel");
// token
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
// crypto
const crypto = require('crypto');
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
    // forgot password
    exports.forgotPassword = catchAsyncError(async (req, res, next) => {
        //  find user 
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return next(new ErrorHandler("User not found with this email", 404))
        }
        // get reset password token
        const resetToken = user.getResetPasswordToken();
        await user.save({ validateBeforeSave: false });
        // create reset password url
        const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/password/reset/${resetToken}`;
        const message = `Your password reset token is as follow:\n\n${resetUrl}\n\nIf you have not requested this email, then ignore it.`;
        try {
            await sendEmail({
                email: user.email,
                subject: " XXX Password Recovery",
                message,
            })
            res.status(200).json({
                status: true,
                message: `Email sent to: ${user.email}`,
            })
        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;
            await user.save({ validateBeforeSave: false });
            return next(new ErrorHandler(error.message, 500))
        }
    })

    // reset password
    exports.resetPassword = catchAsyncError(async (req, res, next) => {
        // creating  token hash
        const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");
        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() }   
        })
        if (!user) {
            return next(new ErrorHandler("Password reset token is invalid or has been expired", 400))
        }
        if (req.body.password !== req.body.confirmPassword) {
            return next(new ErrorHandler("Password does not match", 400))
        }
        // setup new password
        // ek bar use krne ke bad sab ko undefined kr denge
        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save();
        // password change kr liya to ab login bhi krega
        sendToken(user,200,res);
        // const token = user.getJwtToken();
        // res.status(201).json({
        //     status: true,
        //     message: "password updated successfully",
        //     token,
        // })
    }
    )

    // get user details (user ko uski details change krni ho profile pic ,password, name etc.)
    exports.getUserProfile = catchAsyncError(async (req, res, next) => {
        console.log(req.user.id)
        const user = await User.findById(req.user.id);
        res.status(200).json({
            status: true,
            user,
        })
    }
    )
    