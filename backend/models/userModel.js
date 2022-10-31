// connect mongoose
const mongoose = require('mongoose');
//vlidator
const validator = require('validator');
// bcrypt
const bcrypt = require('bcryptjs');
// jwt token require
const jwt = require('jsonwebtoken');
//create schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name!'],
        trim: true,
        maxlength: [40, 'A user name must have less or equal then 40 characters'],
        minlength: [4, 'A user name must have more or equal then 4 characters']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    password:{
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [8, 'A password must have more or equal then 8 characters'],
        select: false  // sari details dega except password
    },
   //avatar
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: 'user'
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,


});
// encryption of password 
               //event
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});
 // jwt token
userSchema.methods.getJwtToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    })
}
// compare password
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

// export
module.exports = mongoose.model('User', userSchema);

