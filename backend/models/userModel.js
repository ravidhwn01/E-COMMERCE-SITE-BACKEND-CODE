// connect mongoose
const mongoose = require('mongoose');
//vlidator
const validator = require('validator');
//create schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us your name!'],
        trim: true,
        maxlength: [40, 'A user name must have less or equal then 40 characters'],
        minlength: [10, 'A user name must have more or equal then 10 characters']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
